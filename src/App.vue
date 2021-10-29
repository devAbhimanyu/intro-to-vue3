<template>
  <div>
    <Header />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals #default="slotProps">
      <!-- <template #default="slotProps"> -->
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.test }}</p>
      <!-- </template> -->
    </course-goals>
  </div>
</template>

<script>
import Header from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
import CourseGoals from "./components/CourseGoals.vue";
export default {
  /**
   * local component reg
   */
  components: {
    Header,
    UserInfo,
    BadgeList,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
