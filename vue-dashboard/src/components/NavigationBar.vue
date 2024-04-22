<template >
    <div>

        <nav class='w-full flex flex-row h-[81px] bg-white'>
            
            <div class='w-2/12 tablet:w-3/12 flex flex-row items-center'>
                <div @click="openPopup" class='ml-2 tablet:ml-5 tablet:w-[40px] h-[32px] w-[32px] cursor-pointer'><img class="w-full block" src="../assets/img/hamburger-menu.png" alt="menu"></div>
                <div class='ml-2 h-[45px] w-[142px] flex align-center items-center justify-center '>
                    <img class="w-[32px] h-[32px]" src="../assets/img/logo.png" alt="logo">
                    <p class='text-xl'>sendgo</p>
                </div>
            </div>

            <div class='pc:w-4/12 tablet:w-3/12 widepc:w-6/12'></div>

            <div class='pc:w-6/12 tablet:w-6/12 widepc:w-4/12 flex flex-row'>
                <ul class=' w-2/3 flex justify-around items-center text-lg'>
                    <li><a href="#!">메시지</a></li>
                    <li><a href="#!">크레딧</a></li>
                    <li><a href="#!">고객센터</a></li>
                </ul>

                <ul class='w-1/3 flex justify-center items-center pc:mr-[20px]'>
                    <li class='tablet:w-[22px] tablet:h-[23px] w-[27px] h-[28px] mr-[32px]'><img class="w-full h-full" src="../assets/img/alert.png" alt="img"></li>
                    <li class='w-[44px] h-[44px] tablet:w-[30px] tablet:h-[30px] pc:h-[35px] pc:w-[35px] rounded-full border border-gray-300'>
                        <img class='w-full h-full rounded-full' src="../assets/img/user.png" alt="img">
                    </li>
                    <li>
                        <img class='w-4 ml-[10px]' src="../assets/img/down.png" alt="img">
                    </li>
                </ul>

            </div>

        </nav>
        <div>
            <TabletSidePop class="pc:hidden " :class="{ 'block': isOpen, 'hidden': !isOpen}" v-model="isOpen.value" :isPopupOpen="isOpen" @close-popup="closePopup"/>
        </div>

    </div>
</template>


<script setup>
import { ref } from "vue";
import TabletSidePop from './TabletSidePop.vue'


    const isOpen = ref(false);
    
    const openPopup = ()=>{
        isOpen.value = true
    }
    const closePopup = ()=>{
        isOpen.value = false
    }

</script>

<style lang="">
</style>