import service from "@/utils/request";
export function sentOne(params) {
    return request({
      url: '/about',
      method: 'get',
      params
    })
  }