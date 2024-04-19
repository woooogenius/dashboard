<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
import NavigationBar from './components/NavigationBar.vue'
import SideBarMenu from './components/SideBarMenu.vue'
import FooterComponent from './components/FooterComponent.vue'
import TabletSideBar from './components/TabletSideBar.vue'


</script>

<template>
    <div class="w-full">
        <NavigationBar/>
         <div class="flex flex-row bg-gray-100">
            <SideBarMenu class="hidden pc:block"/>
            <TabletSideBar class="hidden tablet:block pc:hidden"/>
            <RouterView/>
        </div>
        <FooterComponent/>
    </div>
 
</template>

<style scoped>

</style>
