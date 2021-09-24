import { IFirmwareModel } from '@/interface/firmware'

export const firmwareList: IFirmwareModel[] = [
  {
    id: 1,
    status: 'Draft',
    code: '19',
    name: '2.0.3',
    description: 'Bug fixing, improve performance',
    fileUrl: 'https://cloud.google.com/123',
    type: 'Teleport Desk'
  },
  {
    id: 2,
    status: 'Publishing',
    code: '18',
    name: '2.0.2',
    description: 'Bug fixing, improve performance',
    fileUrl: 'https://cloud.google.com/122',
    type: 'Teleport Desk'
  },
  {
    id: 3,
    status: 'Archived',
    code: '17',
    name: '2.0.1',
    description: 'Bug fixing, improve performance',
    fileUrl: 'https://cloud.google.com/121',
    type: 'Eternal Light'
  },

];
  