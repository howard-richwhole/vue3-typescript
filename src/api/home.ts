import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function test(data: canJson): AxiosPromise {
  return request({
    url: '/test',
    method: 'post',
    data,
  })
}
