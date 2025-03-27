<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 임시 확인용 태그 -->
        <!--  <p v-for="todo in todoList">{{ todo }}</p> -->
        <!-- 할 일 목록 요소 컴포넌트 -->
        <!-- props로 받은 데이터 수정 x 
          -> emit을 이용해서 부모로 전달하여 수정
          TodoItem -> TodoList -> App 
          -->

        <TodoListItem
          v-for="todo in todoList"
          :todoItem="todo"
          @toggle-completed="emit('toggle-completed', event)"
          @delete-todo="emit('delete-todo', event)"
        />
        <!-- $event : 자식 컴포넌트에서 방출된 payload 참조 변수(id)
          -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

//부모로 부터 전달 받은 데이터 수신 + 유효성 검사
const props = defineProps({
  //전달 받은 todoList는 배열 형태. 필수 데이터
  todoList: { type: Array, required: true },
});
// 부모 컴포넌트로 방출되는 이벤트 검사
const emit = defineEmits(['toggle-completed', 'delete-todo']);
</script>
