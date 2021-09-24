export interface IDeviceTypeModel {
    id: number
    name: string
    fdChannel: string
    faChannel: string
    activated: boolean
    latestFirmware: string
    thumbnailUrl: string
    hasThumbnail: boolean
    defaultThumbnailUrl: string
}

export interface ICreateDeviceTypeModel {
    name: string
    fdChannel: string
    faChannel: string
    thumbnailUrl: string
    onSuccess?: () => void
    onError?: (errorMessage: string) => void
}

export interface IUpdateDeviceTypeModel {
    id: number
    name: string
    fdChannel: string
    faChannel: string
    thumbnailUrl: string
    activated: boolean
    onSuccess?: () => void
    onError?: (errorMessage: string) => void
}


export interface IDeleteDeviceTypeModel {
    id: number
    onSuccess?: () => void
    onError?: (errorMessage: string) => void
}