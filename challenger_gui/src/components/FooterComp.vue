<template>
  <div>
    <footer class="feet">
      <p>© Copyright {{ cYear }}</p>
    </footer>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>
  
  <style scoped>
.feet {
  background-color: #1b4965;
  padding: 0;
  text-align: center;
  color: #bee9e8;
  margin: 0;
  /* position: sticky; */
  border: 2px solid #62b6cb;
  border-radius: 5px;
}

.bi:hover {
  color: black;
}

.bi {
  color: #bee9e8;
  font-size: 1.5rem;
  margin: 0.3rem;
}
</style>