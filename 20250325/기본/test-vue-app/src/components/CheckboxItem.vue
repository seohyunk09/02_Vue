<template>
  <li><input type="checkbox" v model="checked" /> 옵션 1</li>
</template>
<script>
export default {
  name: 'CheckboxItem',
  props: {
    id: [Number, String],
    name: String,
    // String 타입
    checked: {
      type: Boolean,
      // Boolean 타입
      required: false,
      // 옵션
      default: false,
      // 생략시 , 기본값은 false
    },
  },
};
</script>
