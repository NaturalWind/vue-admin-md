import Mock from 'mockjs'
import loginAPI from './login'

Mock.mock('/user/login', 'post', loginAPI.loginByUsername)
Mock.mock('/user/userInfo', 'get', loginAPI.getUserInfo)
Mock.mock('/user/menu', 'get', loginAPI.getMenu)

export default Mock
