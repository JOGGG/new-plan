import service from "@/utils/request";
export function sendLogin(data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}
