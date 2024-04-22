
<template>
    <div>
        <div class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-80"></div>
        <div class="absolute top-0 z-50">
            <div class="w-full relative">
                <div class='bg-sideblue text-white w-[240px] h-screen px-5 py-6 absolute left-0 top-0 z-50'>
                    <div class="mb-[77px] text-xl" @click="closePopup">X</div>
                    <div>
                        <p class='text-[20px] text-bold mb-5'>userId</p>
                        
                        <div class='border-b border-gray-500'>
                            <div class='flex justify-between'>
                                <p class='text-sidefont'>보유 크레딧</p>
                                <p>120,000</p>
                            </div>

                            <div class='flex justify-between mt-3'>
                                <p class='text-sidefont'>주소록 그룹</p>
                                <p>23 그룹</p>
                            </div>

                            <div class='flex justify-between mt-3 mb-8'>
                                <p class='text-sidefont'>등록 발신 번호</p>
                                <p>3 개</p>
                            </div>
                        </div>
                    </div> <!--top-->        

                    <div class='py-6'>
                    
                        <RouterLink v-for="(menuItem, index) in menuItems"
                            :key="index"
                            class="block px-3 py-4 rounded-xl text-left mb-5 cursor-pointer transition delay-75 hover:bg-violet2 hover:text-white"
                            :class="{ 'bg-violet2 text-white': activeMenu === index }"
                            :to="menuItem.path"
                            @click="setActiveMenu(index)">

                            {{ menuItem.text }}
                        
                        </RouterLink>
                        

                    </div> <!--bottom-->

                </div>
            </div>
        
        </div>
    </div>
   
        
</template>

<script setup>
    import { ref, defineEmits } from 'vue';
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

    const emits = defineEmits(['close-popup']);
    
    const closePopup =()=>{
        emits('close-popup')
        // console.log('emit 발생')
    }
</script>


<style>
</style>