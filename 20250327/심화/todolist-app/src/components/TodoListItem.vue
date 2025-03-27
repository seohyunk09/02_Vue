<template>
  <li
    :key="todoItem.id"
    class="list-group-item"
    :class="{ 'list-group-item-success': todoItem.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      v-model="todoItem.completed"
      @click="toggleCompletedHandler(todoItem.id)"
    />

    <!-- todoItem.completed 값이 true이면 
                   'todo-done' 클래스, '(완료') 문자열 추가 -->
    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
    </span>

    <!-- 삭제 버튼이 클릭된 경우 deleteTodo() 메서드 호출
                  .stop : 이벤트 전파(하위 요소 -> 상위 요소) 막기  -->
    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>

<script setup>
//props: 부모로 부터 전달 받은 데이터 수싱 + 유효성 검사
const props = defineProps({
  todoItem: {
    type: Object,
    required: true, // 필수 데이터
  },
});

const toggleCompletedHandler = (id) => {
  // this.$emit(이벤트명, payload) : 부모쪽으로 이벤트 발신
  emit('toggle-completed', id);
};

// 부모 컴포넌트로 발신되는 이벤트 유효성 검사
// 보통 특정 이벤트가 발신되는게 맞는지 확인하는 용도로 사용

const emit = defineEmits(['toggle-completed', 'delete-todo']);
</script>
