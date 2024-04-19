<template>
    <div>
        <div class='bg-blue-900 text-white w-80 h-screen px-5 py-10 '>
            <!-- <div>
                <p class='text-xl text-bold mb-5'>userId</p>
                
                <div class='border-b border-gray-500'>
                    <div class='flex justify-between'>
                        <p class='text-gray-300'>보유 크레딧</p>
                        <p>120,000</p>
                    </div>

                    <div class='flex justify-between mt-3'>
                        <p class='text-gray-300'>주소록 그룹</p>
                        <p>23 그룹</p>
                    </div>

                    <div class='flex justify-between mt-3 mb-8'>
                        <p class='text-gray-300'>등록 발신 번호</p>
                        <p>3 개</p>
                    </div>
                </div>
            </div>         -->

            <div class='py-6'>
            
                <RouterLink v-for="(menuItem, index) in menuItems"
                    :key="index"
                    class="block p-2 rounded-xl text-center mb-8 cursor-pointer transition delay-75 hover:bg-white hover:text-black"
                    :class="{ 'bg-white text-black': activeMenu === index }"
                    :to="menuItem.path"
                    @click="setActiveMenu(index)">

                    <img :src="`../public/img/${menuItem.text}`" alt="img" class="">
                
                </RouterLink>
                

            </div> <!--bottom-->

        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import {RouterLink} from 'vue-router'

    const menuItems = [
        { path: '/send', text: "mail.webp"},
        { path: '/', text: 'send.png'},
        { path: '/', text: 'credit.png'},
        { path: '/', text: 'document.png'},
        { path: '/', text: 'call.webp'},
        { path: '/', text: 'user.png'},
       
    ];
    const activeMenu = ref(0)

    const setActiveMenu = (index)=>{
        activeMenu.value = index;
    }
</script>
<style>
    
</style>