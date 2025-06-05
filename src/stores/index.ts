import { defineStore } from 'pinia';

interface toastData {
  status: boolean, //顯示true, 隱藏false
  type: string, //類型:success, info, warning, error
  message: string, //文字內容
  ms: number //顯示毫秒
}

const useToastStore = defineStore('toast', {
  state: () => ({
    toastData: {} as toastData
  }),
})


export { useToastStore };