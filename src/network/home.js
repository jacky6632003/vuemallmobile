import {
    requestHttp
  } from "./request";
   
  export function getHomeMultidata() {
    return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632007/products', null);
  }
   
  export function getHomefeature() {
    return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632008/products', null);
  }
   
  export function getHomeGoods(type, paramObj) {
    switch (type) {
      case "new":
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632004/products', paramObj);
      case "pop":
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632005/products', paramObj);
      case "fea":
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632006/products', paramObj);
      default:
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632005/products', paramObj);
    }
  }
  