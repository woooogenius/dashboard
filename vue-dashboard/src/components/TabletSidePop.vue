
<template>
    <div class="absolute top-0">
        <div class="w-full relative bg-black">
            <div class='bg-blue-900 text-white w-240 h-900 px-5 py-6 absolute left-0 top-0'>
                <div class="mb-3 text-xl">X</div>
                <div>
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
                </div> <!--top-->        

                <div class='py-6'>
                
                    <RouterLink v-for="(menuItem, index) in menuItems"
                        :key="index"
                        class="block p-3 rounded-xl text-center mb-5 cursor-pointer transition delay-75 hover:bg-white hover:text-black"
                        :class="{ 'bg-white text-black': activeMenu === index }"
                        :to="menuItem.path"
                        @click="setActiveMenu(index)">

                        {{ menuItem.text }}
                    
                    </RouterLink>
                    

                </div> <!--bottom-->

            </div>
        </div>
    
    </div>
        
</template>

<script setup>
    import { ref } from 'vue';
    import {RouterLink} from 'vue-router'

    const menuItems = [
        { path: '/send', text: '메시지 전송'},
        { path: '/', text: '발송결과'},
        { path: '/', text: '크레딧'},
        { path: '/', text: '템플릿 관리'},
        { path: '/', text: '발신번호 관리'},
        { path: '/', text: '주소록 관리'},
       
    ];
    const activeMenu = ref(0)

    const setActiveMenu = (index)=>{
        activeMenu.value = index;
    }
</script>


<style>
</style>