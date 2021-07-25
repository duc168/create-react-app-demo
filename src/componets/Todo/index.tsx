import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTodoTaskAction, ITask, removeTaskAction, syncTasksAction } from '../../redux/todoSlice';
import styles from './styles.module.scss';
const initialTask: ITask = {
    id: '',
    value: '',
}
const Todo: React.FC<any> = () => {
    const [currentTask, setCurrentTask] = useState<ITask>(initialTask);
    const tasks = useSelector((state: RootState) => state.todo.tasks);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const dispatch = useDispatch();
    const addTask = () => {
        // dispatch(addTodoTaskAction(currentTask));
        addTaskToServer();
    }
    const onKeyPress = (e: React.KeyboardEvent) => {
        e.code === "Enter" && addTask();
    }
    const onRemove = (task: ITask) =>  {
        // dispatch(removeTaskAction(task));
        removeTaskFromServer(task);
    }
    const addTasks = (inputTasks: ITask[]) => {   
        const listOfTaskId = tasks.map(task => task.id);
        inputTasks.forEach(task => {
            if (!listOfTaskId.includes(task.id)) {
                dispatch(addTodoTaskAction(task));
            }
        });
    }
    const addTaskToServer = () => {
        setLoading(true);
        axios.post('http://localhost:9191/tasks', {
            value: currentTask.value
        }).then(res => {
            console.log(res.data);
            // dispatch(syncTasksAction(res.data));
            setErrorMessage(undefined);
            getTasksFromServer();
        }).catch(err => {
            // console.log('err', err);
            console.log('err ', );
            const responseErrorMessage = err.response.data;
            if (typeof responseErrorMessage === 'string') {
                setErrorMessage(responseErrorMessage);
            } else {
                console.log('error message is invalid');
            }
        }).finally(() => {
            setLoading(false);
        })
    }
    const getTasksFromServer = () => {
        if (loading === true) return
        setLoading(true);
        axios.get('http://localhost:9191/tasks').then(res => {
            console.log('success', res);
            const serverTasks = res.data;
            // addTasks(serverTasks);
            dispatch(syncTasksAction(serverTasks));
        }).catch(err => {
            console.log('err ', err);
        }).finally(() => {
            setLoading(false);
        });
    }
    const removeTaskFromServer = (removeTask: ITask) => {
        if (loading === true) return
        setLoading(true);
        axios.delete(`http://localhost:9191/tasks/${removeTask.id}`).then(res => {
            console.log('success', res.data);
            getTasksFromServer();
        }).catch(err => {
            console.log('err ', err);
        }).finally(() => {
            setLoading(false);
        });
    }
    useEffect(() => {
        setCurrentTask(initialTask);
    }, [tasks])

    useEffect(() => {
        getTasksFromServer();
    }, []);
    return <div className={styles.container}>
        <h2>To do List</h2>
        {/* <div>
            <button onClick={getTasksFromServer}>{loading ? 'Loading...' : 'Get To Do List From Server'}</button>
        </div> */}
        <div className={styles.loading}>
            {loading ? 'Loading...' : ''}
        </div>
        <div className={styles.errorMessage}>
            {errorMessage ?? ''}
        </div>
        <div>
            <input value={currentTask.value} onChange={(e) => setCurrentTask({
                id: e.target.value + Math.random() * 1000000,
                value: e.target.value
            })} onKeyPress={onKeyPress} />
        </div>
        <div>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div>
            <ol>
                {tasks?.length !== undefined && tasks.map(task => <li className={styles.task} key={task.id}><span>
                    {task.value}
                    </span><span className={styles.removeButton} onClick={() => onRemove(task)}>x</span></li>)}
            </ol>
        </div>
    </div>
}

export default Todo;