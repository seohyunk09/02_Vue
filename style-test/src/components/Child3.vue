<template>
  <div :class="$style.child">
    <h2>Child3</h2>
  </div>
</template>
<script>
export default {
  name: 'Child1',
  created() {
    console.log(this.$style);
  },
};
</script>
<style module>
.child {
  background-color: rgb(56, 194, 182);
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
<!-- 마지막에 적용된 것이 살아남음!!! -->
