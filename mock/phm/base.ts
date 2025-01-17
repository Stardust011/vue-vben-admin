import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'
import { resultError } from '../_util'

const elevatorsList = [
  {
    id: 1,
    name: 'BBB大厦A座1号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: {
      lng: 120.162677,
      lat: 30.270211,
    },
    pairs: 100,
    monitorUrl: 'baidu.com',
    repairerNumber: 10,
  },
  {
    id: 2,
    name: 'BBB大厦A座2号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 50,
    location: [
      {
        lng: 121.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
    repairerNumber: 11,
  },
  {
    id: 3,
    name: 'BBB大厦A座3号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 80,
    location: [
      {
        lng: 120.162677,
        lat: 31.270211,
      },
    ],
    pairs: 100,
    monitorUrl: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
    repairerNumber: 12,
  },
  {
    id: 4,
    name: 'BBB大厦A座4号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 5,
    name: 'BBB大厦A座5号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 6,
    name: 'BBB大厦A座6号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 7,
    name: 'BBB大厦A座7号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 8,
    name: 'BBB大厦A座8号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 9,
    name: 'BBB大厦A座9号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 10,
    name: 'BBB大厦A座10号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 11,
    name: 'BBB大厦A座11号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 12,
    name: 'BBB大厦A座12号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 13,
    name: 'BBB大厦A座13号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 14,
    name: 'BBB大厦A座14号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 15,
    name: 'BBB大厦A座15号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 16,
    name: 'BBB大厦A座16号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 17,
    name: 'BBB大厦A座17号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 18,
    name: 'BBB大厦A座18号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 19,
    name: 'BBB大厦A座19号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 20,
    name: 'BBB大厦A座20号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
  {
    id: 21,
    name: 'BBB大厦A座21号',
    needCheck: false,
    lastCheck: 1626832597790,
    healthy: 40,
    location: [
      {
        lng: 120.162677,
        lat: 30.270211,
      },
    ],
    pairs: 100,
    monitorUrl: '',
    repairerNumber: 10,
  },
]

export default [
  {
    url: '/basic-api/phm/base',
    timeout: 1000,
    method: 'get',
    response: () => {
      const baseList: any[] = []
      for (const Item of elevatorsList) {
        baseList.push({
          id: Item.id,
          name: Item.name,
          lastCheck: Item.lastCheck + Math.floor(Math.random() * 5000000000),
          // healthy: Item.healthy,
          healthy: Math.floor(Math.random() * 600 + 400) / 10,
        })
      }
      return resultSuccess(baseList)
    },
  },
  {
    url: '/basic-api/phm/rebase',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultError()
    },
  },
  {
    url: '/basic-api/phm/detail',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const ids = +query.id
      const checkID = elevatorsList.find((item) => item.id === ids)
      if (!checkID) {
        return resultError('No Such ID!')
      }
      checkID.monitorUrl =
        'https://vdn6.vzuu.com/HD/54a9232c-f906-11ed-90b1-a254f9a0acd1-v8_f2_t1_OXyW7IGm.mp4?pkey=AAVNxPIpN5D20X8GIhPoTQmFqpfG5uroEwd_dk4MFKMZwVySTH-ewakXgTSgzD1Vdo_UHF4e1kRgyBQsB0Wy7wMt&bu=1513c7c2&c=avc.8.0&expiration=1699796509&f=mp4&pu=1513c7c2&v=ks6&pp=ChMxNDAxNjIzODY1NzM5NTc5MzkyGGMiC2ZlZWRfY2hvaWNlMhMxMzY5MDA1NjA4NTk5OTA0MjU3PXu830Q%3D&pf=Web&pt=zhihu'
      return resultSuccess(checkID)
    },
  },
] as MockMethod[]
