import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTodoTaskAction, ITask, removeTaskAction } from '../../redux/todoSlice';
import styles from './styles.module.scss';
const initialTask: ITask = {
    id: '',
    value: '',
}
const Todo: React.FC<any> = () => {
    const [currentTask, setCurrentTask] = useState<ITask>(initialTask);
    const tasks = useSelector((state: RootState) => state.todo.tasks);
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodoTaskAction(currentTask));
    }
    const onKeyPress = (e: React.KeyboardEvent) => {
        e.code === "Enter" && addTask();
    }
    const onRemove = (task: ITask) =>  {
        dispatch(removeTaskAction(task));
    }
    useEffect(() => {
        setCurrentTask(initialTask);
    }, [tasks])
    return <div className={styles.container}>
        <h2>To do List</h2>
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
                {tasks.map(task => <li className={styles.task} key={task.id}><span>
                    {task.value}
                    </span><span className={styles.removeButton} onClick={() => onRemove(task)}>x</span></li>)}
            </ol>
        </div>
    </div>
}

export default Todo;