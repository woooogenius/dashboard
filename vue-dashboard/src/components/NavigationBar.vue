<template >
    <nav class='w-full flex flex-row h-16 bg-white'>
        
        <div class='w-2/12 flex flex-row items-center'>
            <div class='ml-2 h-10 w-10'><img src="../assets/img/hamburger-menu.png" alt="menu"></div>
            <div class='ml-2 h-12 w-12 flex align-center items-center'>
                <img src="../assets/img/logo.png" alt="logo">
                <p class='text-xl'>sendgo</p>
            </div>
        </div>

        <div class='w-6/12'></div>

        <div class='w-4/12  flex flex-row'>
            <ul class=' w-2/3 flex justify-around items-center text-lg'>
                <li><a href="#!">메시지</a></li>
                <li><a href="#!">크레딧</a></li>
                <li><a href="#!">고객센터</a></li>
            </ul>

            <ul class=' w-1/3 flex justify-center items-center'>
                <li class='w-6 mr-8'><img src="../assets/img/alert.png" alt="img"></li>
                <li class='w-10 h-10 rounded-full border border-gray-300'>
                    <img class='w-full h-full rounded-full' src="../assets/img/codemokey.png" alt="img">
                </li>
                <li>
                    <img class='w-4 ml-2' src="../assets/img/down.png" alt="img">
                </li>
            </ul>

        </div>

    </nav>
</template>


<script setup>
</script>

<style lang="">
</style>