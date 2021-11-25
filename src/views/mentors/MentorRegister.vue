<template>
  <section>
    <base-card>
      <h2>Register as a mentor now!</h2>
      <new-mentor @save-data="saveData"></new-mentor>
    </base-card>
  </section>
</template>

<script>
import NewMentor from "../../components/mentors/NewMentor.vue";

export default {
  components: {
    NewMentor,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("mentors/registerMentor", data);
      this.$router.replace("/mentors");
    },
  },
};
</script>
