<template>
  <div class="auth page">
    <div class="auth-form">
      <h1 @click="goBack">Auth</h1>

      <mdc-textfield outlined v-model="text" label="Hint text"/>
    </div>
  </div>
</template>

<script>
// import mdcAutoInit from "@material/auto-init";
// import { MDCTextField } from "@material/textfield";

export default {
  name: "auth",
  data() {
    return {
      text: ""
    };
  },
  beforeMount() {
    // this.autoinit();
  },
  created() {
    const $app = document.getElementById("app");

    $app.classList.add("navbar-hidden");

    // this.autoinit();
  },
  updated() {
    // this.autoinit();
  },
  destroyed() {
    const $app = document.getElementById("app");

    $app.classList.remove("navbar-hidden");
  },
  methods: {
    goBack() {
      // console.log("works");
      this.$router.push("/");
    },
    autoinit() {
      // new MDCTextField(document.querySelector(".mdc-text-field"));
      // mdcAutoInit.register("MDCTextField", MDCTextField);
      // [...document.querySelectorAll(".mdc-text-field")].forEach(field => {
      //   new MDCTextField(field);
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "@material/textfield/mdc-text-field";

.auth {
  // color: #333;
  // background-color: #26292c;
  // background: center / cover no-repeat
  // url("https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2");

  // background-color: darken(#176bef, 45%);
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;

  &-form {
    width: 450px;
    // min-height: 200px;
    // background: #26292c;
    // background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    padding: 48px 40px 36px;
  }
}
</style>
