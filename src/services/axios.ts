import axios from 'axios';
import router from '@/router';
import i18n from '@/i18n';
import { useUserStore, useToastStore } from '@/stores';

const baseURL = import.meta.env.VITE_API_BASE_URL;

// 沒token的請求
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  console.log(error);
});
// 有token的請求
const axiosInstanceAuth = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
axiosInstanceAuth.interceptors.request.use(function (config) {
    // Do something before request is sent
    const storeUser = useUserStore();
    config.headers.Authorization = `Bearer ${storeUser.userData.token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
axiosInstanceAuth.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.response?.status === 401) {
    const storeToast = useToastStore();
    storeToast.toastData = {
      status: true,
      type: 'info',
      message: i18n.global.t('validate.error.timeout'),
      ms: 3000
    }
    router.replace('/signin');
  }
  return Promise.reject(error);
});

// 註冊
const postRegister = (data: JSON) => axiosInstance.post('/register', data);
// 登入
const postLogin = (data: JSON) => axiosInstance.post('/login', data);

// 列表
const getTodos = () => axiosInstanceAuth.get('/todos');
// 新增Todo
const postTodos = (data: JSON) => axiosInstanceAuth.post('/todos', data);
// 修改Todo內容
const putTodos = (data: JSON) => axiosInstanceAuth.put('/todos', data);
// 修改Todo狀態
const patchStatus = (id: number, data: JSON) => axiosInstanceAuth.patch('/todos/'+id+'/status', data);
// 刪除Todo
const delTodos = (id: number) => axiosInstanceAuth.delete('/todos/'+id);


export { postRegister, postLogin, getTodos, postTodos, putTodos, patchStatus, delTodos };