<script setup lang="ts">
const props = defineProps(['listData']);
</script>

<template>
	<ul class="h-full overflow-y-auto flex flex-col gap-4">
    <li class="flex items-center gap-3" v-for="(item, index) in props.listData">
      <div class="relative">
        <input type="checkbox" :id="`todo-${item.id}`" class="checkbox hidden invisible" />
        <label :for="`todo-${index}`" class="check relative cursor-pointer inline-block top-px size-[17px] border-[2px] border-solid border-black"></label>
      </div>
      <label :for="`todo-${item.id}`" class="flex-1 cursor-pointer inline-block">{{ item.title }}</label>
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