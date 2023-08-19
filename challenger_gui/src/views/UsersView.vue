<template>
  <div class="container">
    <div class="row">
      <div class="display-2">
        <h2>Users</h2>
      </div>
      <div class="row justify-content-center gap-3" v-if="users">
        <div
          v-for="user in users"
          class="card"
          style="width: 18rem"
          :key="user.userID"
        >
          <img
            :src="user.profileUrl"
            class="card-img-top"
            :alt="user.firstName"
          />
          <div class="card-body">
            <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="card-text">
              <span>Email address : {{ user.emailAdd }}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <SpinnerCompVue />
      </div>
    </div>
  </div>
</template>
<script>
import SpinnerCompVue from "@/components/SpinnerComp.vue";
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  components: {
    SpinnerCompVue,
  },
};
</script>
<style scoped>
</style>