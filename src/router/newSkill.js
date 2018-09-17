import normalizr from '@/components/newSkill/normalizr'
export const newSkillRoute = [
  {
    path: '/normalizr',
    name: 'normalizr',
    component: normalizr,
    meta: {
      tabNum: '1',
      keepAlive: false,
    }
  }
]