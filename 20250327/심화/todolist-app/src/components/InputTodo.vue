<!-- <script>
export default {
  name: 'TodoListItem',
  data() {
    return { todo: '' };
  },
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        //작성된 할 일(this.todo)을
        //부모 컴포넌트(App.vue)로 전달하기!
        // -> 이벤트 발신 (emit) 이용
        // $emit(이벤트명, 페이로드) : 이벤트 발신 메서드
        this.$emit('add-todo', this.todo);
        this.todo = ''; //입력된 내용 삭제
      } else {
        alert('할 일은 3글자 이상으로 작성해주세요!!');
      }
    },
  },
};
</script> -->

<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          id="msg"
          type="text"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />

        <!-- 추가 버튼 클릭 시 작성된 할 일 내용을 todolist에 추가 -->
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
/*name필요 없음! 파일 자체가 name임! */
import { ref } from 'vue';
const todo = ref(''); // ref()에 등록된 값 접근 방법 : 변수명.value
// 추가 동작  => .value 로 접근해야 한다.
const emit = defineEmits(['add-todo']);

const addTodoHandler = () => {
  if (todo.value.length >= 3) {
    //작성된 할 일(this.todo)을
    //부모 컴포넌트(App.vue)로 전달하기!
    // -> 이벤트 발신 (emit) 이용
    // $emit(이벤트명, 페이로드) : 이벤트 발신 메서드
    emit('add-todo', todo.value);
    todo.value = ''; // 입력된 내용 삭제
  } else {
    alert('할 일은 3글자 이상으로 작성해주세요!!');
  }
};
</script>
