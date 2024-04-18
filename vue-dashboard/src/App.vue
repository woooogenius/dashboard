<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
import NavigationBar from './components/NavigationBar.vue'
import SideBarMenu from './components/SideBarMenu.vue'
import FooterComponent from './components/FooterComponent.vue'


</script>

<template>
    <div>
        <NavigationBar/>
         <div class="flex flex-row bg-gray-100">
            <SideBarMenu/>
            <RouterView/>
        </div>
        <FooterComponent/>

    </div>
 
</template>

<style scoped>

</style>
