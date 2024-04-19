<template >
    <div>

        <nav class='w-full flex flex-row h-16 bg-white'>
            
            <div class='w-2/12 flex flex-row items-center'>
                <div @click="openPopup" class='ml-2 h-10 w-10 cursor-pointer'><img src="../assets/img/hamburger-menu.png" alt="menu"></div>
                <div class='ml-2 h-12 w-12 flex align-center items-center'>
                    <img src="../assets/img/logo.png" alt="logo">
                    <p class='text-xl'>sendgo</p>
                </div>
            </div>

            <div class='pc:w-6/12 tablet:w-4/12'></div>

            <div class='pc:w-4/12 tablet:w-6/12  flex flex-row'>
                <ul class=' w-2/3 flex justify-around items-center text-lg'>
                    <li><a href="#!">메시지</a></li>
                    <li><a href="#!">크레딧</a></li>
                    <li><a href="#!">고객센터</a></li>
                </ul>

                <ul class=' w-1/3 flex justify-center items-center'>
                    <li class='w-6 mr-5'><img src="../assets/img/alert.png" alt="img"></li>
                    <li class='w-10 h-10 rounded-full border border-gray-300'>
                        <img class='w-full h-full rounded-full' src="../assets/img/codemokey.png" alt="img">
                    </li>
                    <li>
                        <img class='w-4 ml-2' src="../assets/img/down.png" alt="img">
                    </li>
                </ul>

            </div>

        </nav>
        <div>
            <TabletSidePop class="pc:hidden" v-if="openPopup"/>
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