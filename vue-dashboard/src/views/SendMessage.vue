<template>
    <div class="w-full">

        <div class="px-20 pt-5">
             <h4 class="text-2xl font-bold my-5">메시지 전송</h4>

            <ul class="flex mt-8">

                <RouterLink v-for="(menuItem, idx) in menuItems" :key="idx"
                class="px-5 py-3 mr-8 transition"
                :class="{'text-blue-900 border-b-2  border-blue-800' : activeMenu === idx}"
                :to="menuItem.path"
                @click="setActiveMenu(idx)"
                >
                    {{menuItem.text}}
                </RouterLink>

            </ul>
        </div>

        <div class="bg-white px-20 pt-5 flex flex-row">

            <div>
                <p class="text-sm text-gray-500">- 간편하게 한 화면에서 단문, 장문, 포토메세지를 발송할 수 있습니다.</p>
                <p class="text-sm text-gray-500">- 90Byte 초과 시 장문문자로 자동 전환되며, 최대 2,000Byte까지 작성이 가능합니다.</p>

                <h4 class="text-md font-bold mt-10 mb-3">수신번호</h4>
                <div>
                    <form class="flex">
                        <input class="w-9/12 border border-gray-200 text-md p-2.5 rounded-md" type="text" placeholder="휴대폰번호 (숫자만입력)">
                        <button class="w-3/12 bg-blue-800 text-white rounded-md ml-5">+ 추가</button>
                    </form>

                    <div class="pt-2 px-3 pb-40 border border-b-gray-300 mt-3 rounded-t-md">
                        <p class="text-sm text-gray-500">번호를 입력 후 엔터 혹은 추가하기를 클릭해 주세요.<br/>최대 1만 건까지 붙여넣기 가능합니다.</p>
                    </div>
                    <div class="flex flex-row justify-between p-3 border border-gray-200 border-t-0 rounded-b-md">
                        <p class="font-bold">총 0명</p>
                        <p class="cursor-pointer text-gray-400 underline">모두삭제</p>
                    </div>

                    <ul class="flex text-center mt-5">
                        <li class="p-4 w-4/12 border border-gray-300 mr-4 rounded-md">주소록 불러오기</li>
                        <li class="p-4 w-4/12 border border-gray-300 mr-3 rounded-md">파일 불러오기</li>
                        <li class="p-4 w-4/12 border border-gray-300 rounded-md">최근 전송 내역</li>
                       
                    </ul>
                    

                </div>

                <div class="border border-gray-200 w-full my-5"></div>


                <h4 class="text-md font-bold">현재 발송 가능 건수</h4>
                <ul class="mt-3 bg-gray-200 rounded-md">
                    <li class="flex">
                        <p>단문 SMS</p>
                        <p>152건</p>
                    </li>
                </ul>

            </div> <!-- left -->

            <div>
                


            </div><!-- right -->
            


            

        </div>


       
    </div>
</template>


<script setup>

    import {ref} from 'vue';

    const menuItems = [
        { path : '/send', text : '메시지 전송'},
        { path : '/send', text : '카카오 알림톡'},
        { path : '/send', text : '카카오 친구톡'},
    ]

    const activeMenu = ref(0)
    const setActiveMenu = (idx)=>{
        activeMenu.value = idx
    }

</script>
<style scoped>
    
</style>