import toast from './index.js'
const obj = {
 
}
 
obj.install = function name(Vue) {
  const toastContrustor = Vue.extend(toast);
  const newtoast = new toastContrustor();
  newtoast.$mount(document.createElement('div'));
  document.body.appendChild(newtoast.$el);
  Vue.prototype.$newtoast = newtoast;
}
export default obj
