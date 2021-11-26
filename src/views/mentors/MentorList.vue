<template>
  <main id="mentor-list-comp">
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <mentor-filter @change-filter="setFilters"></mentor-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadMentors(true)"
            >Refresh</base-button
          >
          <base-button v-if="!isCoach && !isLoading" link to="/register"
            >Register as Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <mentor-info
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></mentor-info>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>
  </main>
</template>

<script>
import MentorInfo from "../../components/mentors/MentorInfo.vue";
import MentorFilter from "../../components/mentors/MentorFilter.vue";

export default {
  components: {
    MentorInfo,
    MentorFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters["mentors/isMentor"];
    },
    filteredCoaches() {
      const coaches = this.$store.getters["mentors/mentorList"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["mentors/hasMentors"];
    },
  },
  created() {
    this.loadMentors();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadMentors(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("mentors/loadMentors", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
