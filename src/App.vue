<template>
  <div id="app" class="app">
    <div class="navbar" id="navbar">
      <router-link tag="div" to="/home" class="navbar-item">Home</router-link>
      <router-link tag="div" to="/contacts" class="navbar-item">Contacts</router-link>
      <router-link tag="div" to="/about" class="navbar-item">About</router-link>
      <router-link tag="div" to="/auth" class="navbar-item">Auth</router-link>
    </div>
    <div class="content" id="content">
      <transition name="test">
        <router-view></router-view>
      </transition>
    </div>

    <!-- router -->
    <div id="tile"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  watch: {
    $route(to, from) {
      const $tile = document.getElementById("tile");
      $tile.classList.remove("active");
      $tile.classList.add("active");

      setTimeout(function() {
        $tile.classList.remove("active");
      }, 800);

      // console.log({ from, to });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400");

#app {
  height: 100%;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font: 400 16px/24px "Raleway";
  background: #f7f7f7;
  overflow-y: scroll;
}

.page {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  // padding-top: 80px;
  height: 100%;
}

.app {
  padding-top: 80px;

  transition: padding 0.2s linear 0.6s;

  &.navbar-hidden {
    padding-top: 0;

    #navbar {
      transform: translateY(-100%);
    }
  }
}

.navbar {
  height: 80px;
  width: 100%;
  position: fixed;

  top: 0;
  left: 0;

  color: #fff;
  background-color: #179c52;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  transition: transform 0.4s cubic-bezier(0, 0.5, 0.5, 1) 0.6s;

  &.hidden {
    transform: translateY(-100%);
  }

  &-item {
    position: relative;
    padding: 15px 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.4s cubic-bezier(0, 0.5, 0.5, 1);

    &::after {
      content: "";
      display: block;
      height: 10px;
      width: 2px;
      background-color: transparent;

      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) scaleY(0);
      transform-origin: bottom center;
      transition: all 0.4s cubic-bezier(0, 0.5, 0.5, 1);
    }

    &:active,
    &:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.08);
    }

    &.active {
      color: #fff;

      &::after {
        transform: translateX(-50%) scaleY(1);
        background-color: #fff;
      }
    }
  }
}

.test-enter-to,
.test-leave {
  transition: opacity 0.4s ease 1.2s;
  opacity: 1;
}
.test-enter,
.test-leave-to {
  transition: opacity 0.4s ease;
  opacity: 0;
}

#tile {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // height: 0;
  // height: 150vh;

  background-color: #179c52;

  transition: transform 0.4s ease-in-out;
  transform: scaleY(0);
  transform-origin: top center;

  &.active {
    transition: transform 0.6s ease-in-out;
    transform-origin: bottom center;
    transform: scaleY(1);
  }
}
</style>

