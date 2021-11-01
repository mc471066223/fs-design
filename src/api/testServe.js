import request from './lib/request'

export function testRequest(data) {
  return request(
    {
      url: 'https://www.fastmock.site/mock/d5f1843b4fa0d23b19f88b580ae7b841/api/plan',
      method: 'post',
      data: data
    },
    {
      repeat_request_cancel: true,
      loading: false,
    }
  )
}
