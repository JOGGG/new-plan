import service from "@/utils/request";
export function sentOne(params) {
    return service({
      url: '/about',
      method: 'get',
      params
    })
  }