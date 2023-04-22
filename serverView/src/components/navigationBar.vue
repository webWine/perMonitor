<template>
  <div class="nav" @click="toTargetPage($event)">
    <div v-for="(item,index) in manu" :key="item" class="nav-list" :class="{'active': curSelect == index }"
      :data-index="index">
      {{map[item]}}
    </div>
  </div>

</template>
<script setup lang="ts">
  import {
    map
  } from "../router/nameMap"
  import {
    reactive,
    ref,
    watchEffect
  } from "vue"
  import {
    useRouter,
    useRoute
  } from "vue-router"

  const router = useRouter()
  const route = useRoute()


  const manu = reactive(Object.keys(map))
  let curSelect = ref(0)

  watchEffect(() => {
    const routeIndex = manu.indexOf(route.name)
    if (routeIndex > -1) {
      curSelect.value = routeIndex
    }
  })

  const toTargetPage = (e) => {
    if (e.target.dataset.index >= 0) {
      curSelect.value = e.target.dataset.index
      router.push({
        name: `${manu[curSelect.value]}`
      })
    }

  }
</script>
<style scoped>
  .nav {
    width: 150px;
    height: 100vh;
    background-color: #304156;
    color: rgb(191, 203, 217);
    font-size: 14px;
  }

  .nav-list {
    height: 56px;
    line-height: 56px;
    /* border-bottom: 1px solid #999; */
  }

  .active {
    color: rgb(64, 158, 255)
  }
</style>