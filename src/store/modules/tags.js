// 工具
import { setStorage, getStorage } from '@/util/storage'

const tagDefaultValue = {
  label: '首页', // 标签名称
  path: '/home/index', // 标签路径
  params: {}, // 标签路径参数
  query: {} // 标签参数
}

const tags = {
  state: {
    tagList: getStorage({
      name: 'tagList',
      type: 'session'
    }) || [tagDefaultValue],
    tag: getStorage({
      name: 'tag',
      type: 'session'
    }) || tagDefaultValue
  },
  actions: {},
  mutations: {
    ADD_TAG: (state, tag) => {
      state.tag = tag
      setStorage({
        name: 'tag',
        content: state.tag,
        type: 'session'
      })
      if (state.tagList.some((item) => {return item.label === state.tag.label && item.path === state.tag.path})) {
        return
      }
      state.tagList.push(state.tag)
      setStorage({
        name: 'tagList',
        content: state.tagList,
        type: 'session'
      })
    },
    DEL_TAG: (state, tag) => {
      if (tag.label === tagDefaultValue.label && tag.path === tagDefaultValue.path) {
        return
      }
      let index = state.tagList.indexOf(tag)
      if (index > -1) {
        state.tagList.splice(index, 1)
        setStorage({
          name: 'tagList',
          content: state.tagList,
          type: 'session'
        })
      }
    },
    DEL_TAG_OTHER: (state) => {
      state.tagList = [state.tag]
      setStorage({
        name: 'tagList',
        content: state.tagList,
        type: 'session'
      })
    },
    DEL_TAG_ALL: (state) => {
      state.tag = state.tagList.find((item) => {return item.label === '首页'})
      setStorage({
        name: 'tag',
        content: state.tag,
        type: 'session'
      })
      state.tagList = [state.tag]
      setStorage({
        name: 'tagList',
        content: state.tagList,
        type: 'session'
      })
    }
  }
}

export default tags
