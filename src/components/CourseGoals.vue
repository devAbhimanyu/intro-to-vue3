<template>
  <ul>
    <li v-for="g in goals" :key="g">
      <!-- this is a slot -->
      <slot :item="g" :test="'this is jus dummy test'"> </slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["learn vue", "learn slots"],
    };
  },
};
</script>
