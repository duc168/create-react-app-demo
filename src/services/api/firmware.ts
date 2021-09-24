import config from "@/config"
import { IFirmwareModel } from "@/interface/firmware"
import axios from "axios"
import mockData from "./mockData"
const apiServerUrl = config.API_SERVER
const getList = (): Promise<IFirmwareModel[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData.firmwareList)
        }, 1000)
    })
}
export default {
    getList
}