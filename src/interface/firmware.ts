export type FirmwareModelStatus = 'Draft' | 'Publishing' | 'Archived'

export interface IFirmwareModel {
    id: number
    status: FirmwareModelStatus
    code: string
    name: string
    description: string
    fileUrl: string
    type: string    
}

export interface ICreateFirmwareModel {
    name: string
    code: string
    description: string
    fileUrl: string
}

export interface IUpdateFirmwareModel {
    id: number
    name: string
    code: string
    description: string
    fileUrl: string
}