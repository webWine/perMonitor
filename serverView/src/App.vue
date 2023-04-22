<template>

  <div class="wrapper">
    <Navigator class="navBar"/>
    <div class="content">
      <transition name="cr">
        <router-view></router-view>
      </transition>
      
    </div>
  </div>
 
  
</template>
<script setup lang="ts">
  import Navigator from "./components/navigationBar.vue"
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
<style scoped>
  .wrapper{
    display: flex;
    flex-direction: row;
    width: 100vw;
    overflow: hidden;
  }
  .navBar{
    flex-shrink: 0;
  }
  .content{
    flex: 1;
    height: 100vh;
  }
  .cr-enter-from,
  .cr-leave-to{
    transform: translateX(0%);
    opacity: 0;
  }
  .cr-leave-active,
  .cr-enter-active{
    transition: opacity .5s ease;
  }
</style>