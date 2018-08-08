import JsBasicList from '@/components/JsBasicList/JsBasicList'
import EventDes from '@/components/JsBasicList/EventDes'
export const jsBasicRoute = [
  {
    path: '/js_basic',
    name: 'js_basic',
    component: JsBasicList,
    meta: {
      tabNum: '1'
    }
  },
  {
    path: '/event_des',
    name: 'event_des',
    component: EventDes,
    meta: {
      tabNum: '1'
    }
  }
]
