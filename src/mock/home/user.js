/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-03-19 11:07:49
 * @Description: 测试 一组 数据
 */
import { urlReg } from 'assets/js/utils';
import Mock from 'mockjs';

export default Mock.mock(urlReg('/home/user'), {
  'code': 1,
  'msg': 'success',
  'result': {
    'user': '@name()',
    'age': '@natural(10,30)'
  }
})
