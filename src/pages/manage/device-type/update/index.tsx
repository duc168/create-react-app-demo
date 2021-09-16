import UpdateDeviceType from '@/components/Authenticated/DeviceType/Update'
import React from 'react'
import { useParams } from 'react-router-dom';
const UpdateDeviceTypePage: React.FC<any> = () => {
    const { deviceTypeId } = useParams() as any;
    console.log('this device type id ', deviceTypeId)
    return <UpdateDeviceType />
}

export default UpdateDeviceTypePage