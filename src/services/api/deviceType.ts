import config from "@/config"
import { DEFAULT_THUMBNAIL_URL } from "@/constant"
import { ICreateDeviceTypeModel, IDeviceTypeModel, IUpdateDeviceTypeModel } from "@/interface/deviceType"
import axios from "axios"
import _ from "lodash"
import mockData from "./mockData"
let data = _.cloneDeep(mockData.deviceTypes);
(window as any).data = data
const apiServerUrl = config.API_SERVER
const getList = (): Promise<IDeviceTypeModel[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(_.cloneDeep(data))
        }, 1000)
    })
}

const get = (id: number): Promise<IDeviceTypeModel> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const detail = _.cloneDeep(data).find(d => d.id === id)
            if (detail) {
                resolve(detail)
            } else {
                reject('Invalid ID')
            }
        })
    })
}
const create = ({ onSuccess: _onSuccess, onError: _onError , ...request}: ICreateDeviceTypeModel): Promise<IDeviceTypeModel> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newId = data.length + 1
            const newData = {
                ...request,
                id: newId,
                activated: true,
                latestFirmware: '0.0.1',
                hasThumbnail: request.thumbnailUrl.length > 0,
                defaultThumbnailUrl: DEFAULT_THUMBNAIL_URL,
            } as IDeviceTypeModel
            data.push(_.cloneDeep(newData))
            resolve(newData)
        }, 1000)
    })
}

const update = ({ onSuccess: _onSuccess, onError: _onError , ...request}: IUpdateDeviceTypeModel): Promise<IDeviceTypeModel> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const updatedItem = data.find(d => d.id === request.id)
            const updatedItemIndex = data.findIndex(d => d.id === request.id)
            if (updatedItem && updatedItemIndex >= 0) {
                let newData = _.cloneDeep(data)
                newData[updatedItemIndex] = _.cloneDeep({
                    ...request,
                    latestFirmware: '0.0.1 - updated',
                    hasThumbnail: request.thumbnailUrl.length > 0,
                    defaultThumbnailUrl: DEFAULT_THUMBNAIL_URL,
                })
                data = _.cloneDeep(newData)
                resolve(newData[updatedItemIndex])
            } else {
                reject(undefined)
            }
        }, 1000)
    })
}


const remove = (deleteId: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newData = data.filter(d => d.id !== deleteId)
            data = _.cloneDeep(newData)
            resolve(deleteId)
        }, 1000)
    })
}

export default {
    getList,
    get,
    create,
    update,
    remove
}

