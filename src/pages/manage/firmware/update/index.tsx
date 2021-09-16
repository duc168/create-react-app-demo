import UpdateFirmware from '@/components/Authenticated/Firmware/Update'
import React from 'react'
import { useParams } from 'react-router-dom';
const UpdateFirmwarePage: React.FC<any> = () => {
    const { firmwareId } = useParams() as any;
    console.log('this firmware id ', firmwareId)
    return <UpdateFirmware />
}

export default UpdateFirmwarePage