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
      state.tagList = state.tagList.filter((item) => {
        return item.label !== tag.label && item.path !== tag.path
      })
      setStorage({
        name: 'tagList',
        content: state.tagList,
        type: 'session'
      })
    },
    DEL_TAG_OTHER: (state) => {
      if (state.tag.label === tagDefaultValue.label && state.tag.path === tagDefaultValue.path) {
        state.tagList = [tagDefaultValue]
      } else {
        state.tagList = [tagDefaultValue, state.tag]
      }
      setStorage({
        name: 'tagList',
        content: state.tagList,
        type: 'session'
      })
    },
    DEL_TAG_ALL: (state) => {
      state.tag = tagDefaultValue
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
