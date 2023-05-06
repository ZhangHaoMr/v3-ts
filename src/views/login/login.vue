<template>
  <div class="login">
    <loginPanel />
  </div>
</template>

<script lang="ts" setup>
import loginPanel from "./components/login-panel.vue";
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login-bg.svg");
}
</style>
