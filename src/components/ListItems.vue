<script setup lang="ts">
import { watch } from 'vue'
import { useListStore } from '@/stores'
const storeList = useListStore();
import { putTodos, patchStatus, delTodos } from '@/services/axios'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import TrashIcon from '@/components/icons/TrashIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
const props = defineProps(['editMode']);

const todoAdd = async(id:number, status: boolean) => {
  let newStatus = status ? 0 : 1;
  await patchStatus(id, {status: newStatus}).then()
}
const todoDelete = async(id: number) => {
  if(confirm(t('validate.confirm'))) {
    await delTodos(id).then(() => {
      storeList.$state.listData = storeList.$state.listData.filter(item => item.id !== id);
    });
  }
}
watch(()=> props.editMode, async(newMode: boolean)=> {
  const dataList = storeList.$state.listData;
  if (!newMode) await putTodos(dataList).then();
})
</script>

<template>
	<ul class="h-full overflow-y-auto flex flex-col gap-5">
    <li class="flex items-center gap-3" v-for="item in storeList.$state.listData">
      <div v-if="props.editMode">
        <EditIcon :size="17" class="icon-jelly-animate"/>
      </div>
      <div class="flex items-center" @click="todoAdd(item.id, item.status)" v-else>
        <input type="checkbox" :id="`todo-${item.id}`" class="checkbox hidden invisible" :checked="item.status" />
        <label :for="`todo-${item.id}`" class="check relative cursor-pointer inline-block top-px size-[17px] border-[2px] border-solid border-black"></label>
      </div>
      <input type="text" v-if="props.editMode" v-model="item.title" class="flex-grow" />
      <label :for="`todo-${item.id}`" class="flex-1 cursor-pointer inline-block" v-else>{{ item.title }}</label>
      <div v-if="props.editMode">
        <TrashIcon class="icon-jelly-animate" @click="todoDelete(item.id)" />
      </div>
    </li>
  </ul>
</template>
<style scoped>
label {
	display: inline-block;
}
input[type="checkbox"]:checked ~ .check {
	background: var(--color-primary);
	animation: jelly 0.6s ease;
}
.icon-jelly-animate {
  animation: jelly 0.6s ease;
}
@-moz-keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    to {
      transform: scale(1, 1);
    }
  }
  @-webkit-keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    to {
      transform: scale(1, 1);
    }
  }
  @-o-keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    to {
      transform: scale(1, 1);
    }
  }
  @keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    to {
      transform: scale(1, 1);
    }
  }
</style>