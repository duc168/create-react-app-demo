import { DEFAULT_THUMBNAIL_URL } from "@/constant";
import { IDeviceTypeModel } from "@/interface/deviceType";

export const deviceTypes: IDeviceTypeModel[] = [
  {
    'id': 1,
    'name': 'Teleport Desk',
    'fdChannel': '5189@9f9289:91-9:9891',
    'faChannel': '5189@9f9289:91-9:9892',
    'activated': true,
    'latestFirmware': '2.0.2',
    'thumbnailUrl': 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'hasThumbnail': true,
    'defaultThumbnailUrl': DEFAULT_THUMBNAIL_URL
  },
  {
    'id': 2,
    'name': 'Eternal Light',
    'fdChannel': '5190@9f9289:91-9:9891',
    'faChannel': '5190@9f9289:91-9:9892',
    'activated': false,
    'latestFirmware': '2.0.0',
    'thumbnailUrl': 'https://media.istockphoto.com/photos/desk-lamp-picture-id534400418?b=1&k=20&m=534400418&s=170667a&w=0&h=kWgxXtGPOGYwOg5WdvFebM_z3wAQBUG2wrTf24oBWTc=',
    'hasThumbnail': true,
    'defaultThumbnailUrl': DEFAULT_THUMBNAIL_URL
  },
  {
    'id': 3,
    'name': 'Gold Frame',
    'fdChannel': '5191@9f9289:91-9:9891',
    'faChannel': '5192@9f9289:91-9:9892',
    'activated': true,
    'latestFirmware': '1.0.0',
    'thumbnailUrl': 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'hasThumbnail': true,
    'defaultThumbnailUrl': DEFAULT_THUMBNAIL_URL
  },

];
  