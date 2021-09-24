import { ICreateDeviceTypeModel, IDeleteDeviceTypeModel, IDeviceTypeModel, IUpdateDeviceTypeModel } from '@/interface/deviceType';
import api from '@/services/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { AppThunk } from './store';

export interface DeviceState {
    loading: boolean
    list: IDeviceTypeModel[]
    detail?: IDeviceTypeModel
    error?: string
}
const initialState: DeviceState = {
  loading: false,
  list: [],
}
export const getDeviceTypeListAsyncAction = createAsyncThunk('deviceType/getList', async (_, { rejectWithValue }) => {
  try {
    const response = await api.deviceType.getList()
    return response
  } catch (error) {
    return rejectWithValue(JSON.stringify(error))
  }
})

export const getDeviceTypeDetailAsyncAction = createAsyncThunk('deviceType/getDetail', async (id: number, { rejectWithValue }) => {
  try {
    const response = await api.deviceType.get(id)
    return response
  } catch (error) {
    location.href = '/'
    return rejectWithValue(error)
  }
})

export const deviceSlice = createSlice({
  name: 'deviceType',
  initialState: {...initialState},
  reducers: {
    updateLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDeviceTypeListAsyncAction.pending, (state) => {
      state.loading = true
      state.list = []
    }),
    builder.addCase(getDeviceTypeListAsyncAction.fulfilled, (state, action) => {
      state.loading = false
      state.list = _.cloneDeep(action.payload)
      state.error = undefined
    }),
    builder.addCase(getDeviceTypeDetailAsyncAction.pending, (state) => {
      state.loading = true
      state.detail = undefined
    }),
    builder.addCase(getDeviceTypeDetailAsyncAction.fulfilled, (state, action) => {
      state.loading = false
      state.detail = _.cloneDeep(action.payload)
      state.error = undefined
    }),
    builder.addCase(getDeviceTypeDetailAsyncAction.rejected, (state, action) => {
      state.loading = false
      state.detail = undefined
      state.error = action.payload as string      
    })
  }
})

const { updateLoadingAction} = deviceSlice.actions

export const createDeviceTypeAsyncAction = (request: ICreateDeviceTypeModel): AppThunk => async (
  dispatch,
  _getState
) => {
  dispatch(updateLoadingAction(true))
  const { onSuccess, onError } = request
  try {
    await api.deviceType.create(request)
    dispatch(updateLoadingAction(false))
    dispatch(getDeviceTypeListAsyncAction())    
    onSuccess && onSuccess()
  } catch (error) {
    dispatch(updateLoadingAction(false))
    onError && onError(error)
  }
}

export const updateDeviceTypeAsyncAction = (request: IUpdateDeviceTypeModel): AppThunk => async (
  dispatch,
  _getState
) => {
  dispatch(updateLoadingAction(true))
  const { onSuccess, onError } = request
  try {
    await api.deviceType.update(request)
    dispatch(updateLoadingAction(false))
    dispatch(getDeviceTypeListAsyncAction())  
    onSuccess && onSuccess()
  } catch (error) {
    dispatch(updateLoadingAction(false))
    onError && onError(error)
  }
}


export const deleteDeviceTypeAsyncAction = (request: IDeleteDeviceTypeModel): AppThunk => async (
  dispatch,
  _getState
) => {
  dispatch(updateLoadingAction(true))
  const { onSuccess, onError } = request
  try {
    await await api.deviceType.remove(request.id)
    dispatch(updateLoadingAction(false))
    dispatch(getDeviceTypeListAsyncAction())  
    onSuccess && onSuccess()
  } catch (error) {
    dispatch(updateLoadingAction(false))
    onError && onError(error)
  }
}


export default deviceSlice.reducer