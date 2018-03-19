/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-03-19 11:03:53
 * @Description: API 配置
 */
const isOnline = false;
const onlineApiHost = isOnline ? 'http://88.888.88.88:8888/project/' : 'http://funlee.com/'
// const onlineWsHost = isOnline ? 'ws:/88.888.88.888:8888/' : 'http://funlee.com/'
export default {
  user: onlineApiHost + 'home/user'
}
