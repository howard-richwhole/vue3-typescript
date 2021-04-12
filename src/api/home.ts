import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function test(data: canJson): AxiosPromise {
  return request({
    url: 'https://webhook.site/8a36596d-0c1d-4df8-a7e7-2c40e19cdb1a',
    method: 'post',
    data,
  })
}
