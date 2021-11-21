<template>
  <base-container title="Vuex">
    <h3>{{ $store.state.counter }}</h3>
    <ChangeCounter />
    <AlteredCounter />
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import AlteredCounter from "./components/AlteredCounter.vue";

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    AlteredCounter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
