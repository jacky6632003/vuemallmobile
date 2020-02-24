import {
    requestHttp
  } from "./request";
   
  export function getDetailID(category, id) {
    switch (category) {
      case "new":
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632004/product/' + id, null);
      case "pop":
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632005/product/' + id, null);
      case "fea":
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632006/product/' + id, null);
      default:
        return requestHttp.fetch('https://vue-course-api.hexschool.io/api/jacky6632005/product/' + id, null);
    }
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
  