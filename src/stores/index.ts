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

interface userData {
  email: string,
  name: string,
  token: string,
}

const useUserStore = defineStore('user', {
  state: () => ({
    userData: [] as userData[]
  }),
  persist: true, // 啟用persisted state, 這行配置使得 state 自動持久化儲存
});

interface listData {
  id: number, //todo id
  title: string, //todo名稱
  status: boolean, //0=未完成;1=已完成
}

const useListStore = defineStore('list', {
  state: () => ({
    listData: [] as listData[]
  })
});


export { useToastStore, useUserStore, useListStore };