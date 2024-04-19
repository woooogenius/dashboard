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

        <div class="bg-white px-20 pt-5 flex flex-row flex-wrap pb-40">

            <div class="w-1/2 tablet:w-full pc:w-1/2">
                <p class="text-sm text-gray-500">- 간편하게 한 화면에서 단문, 장문, 포토메세지를 발송할 수 있습니다.</p>
                <p class="text-sm text-gray-500">- 90Byte 초과 시 장문문자로 자동 전환되며, 최대 2,000Byte까지 작성이 가능합니다.</p>

                <h4 class="text-lg font-bold mt-10 mb-3">수신번호</h4>
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


                <h4 class="text-lg font-bold">현재 발송 가능 건수</h4>
                <ul class="mt-3 bg-gray-100 rounded-md flex ">
                    <li class="">
                        <p class="p-3">단문 SMS <span class="text-lg font-bold">152건</span> </p>
                    </li>

                    <li class="">
                        <p class="p-3">장문 LMS <span class="text-lg font-bold">100건</span> </p>
                    </li>

                    <li class="">
                        <p class="p-3">포토 MMS <span class="text-lg font-bold">100건</span> </p>
                    </li>
                    
                    
                </ul>

                <div class="mt-5">
                    <p class="text-lg">현재 보유한 크레딧이 부족합니다 <span class="text-lg text-blue-900 underline ml-5">충전하기</span></p>
                </div>

                <div class="border border-gray-200 w-full my-5"></div>

                <div>
                    <h4 class="text-lg font-bold mb-5">발신번호</h4>

                    <select name="select_num" id="selectNum" class="border border-gray-300 w-full p-4 rounded-md">
                        <option value="">전송할 발신번호 선택</option>
                        <option value="1">010-1111-2222</option>
                        <option value="2">010-3333-4444</option>
                    </select>
                </div>

                <div class="border border-gray-200 w-full my-5"></div>

                <h4 class="text-xl font-bold mb-3">메세지 입력</h4>

                <div class="bg-gray-100 p-5 rounded-md">
                    <input type="text" class="w-full p-2 rounded-md" placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)">
                    
                    <div class="flex justify-between mt-3">
                        <p class="bg-blue-900 text-white rounded-2xl px-3 py-2 text-xs">단문 SMS</p>
                        <div class="text-sm">
                            <span class="text-blue-900">{{textLength}} </span>
                            <span class="text-gray-500">/ 90Byte</span>
                        </div>
                    </div>

                    <div class="w-full relative">
                        <textarea @change="onChangeTextArea" name="textarea" id="textArea" cols="30" rows="10" class="resize-none w-full mt-3 rounded-md p-3" placeholder="내용을 입력해 주세요. 90byte 초과 시 장문문자로, 이미지 추가 시, 포토 문자로 자동 전환 됩니다."></textarea>
                        <ul class="absolute right-2 bottom-5 flex text-gray-500">
                            <li class="bg-gray-100 px-5 py-2 rounded-2xl mr-2">특수문자</li>
                            <li class="bg-gray-100 px-5 py-2 rounded-2xl mr-2">템플릿</li>
                            <li class="bg-gray-100 px-5 py-2 rounded-2xl">#[변수]</li>
                        </ul>
                    </div>

                    <div class="border border-gray-200 w-full my-5"></div>

                    <div class="flex justify-between">
                        <p class="text-lg font-bold">광고성 문자(080 수신거부번호 포함)</p>
                         <button 
                            @click="toggleSwitch" 
                            :class="{ 'bg-blue-500': isActive, 'bg-gray-300': !isActive }" 
                            class="w-12 h-7 rounded-full focus:outline-none"
                            >
                            <span 
                                :class="{ 'translate-x-2.5': isActive, '-translate-x-2.5': !isActive }" 
                                class="inline-block w-7 h-7 bg-white rounded-full shadow-md transform transition"
                            ></span>
                        </button>

                    </div>

                    <div class="border border-gray-200 w-full my-5"></div>

                    <h4 class="text-lg font-bold mb-5">이미지 추가</h4>

                    <input id="add_image" type="file" hidden>
                   <label for="add_image" class="block w-24 h-24 border border-gray-400 relative cursor-pointer mb-6 bg-white">
                        <div class="absolute inset-0 flex justify-center items-center">
                            <div class="w-12 h-0.5 bg-gray-500"></div>
                            <div class="w-0.5 h-12 bg-gray-500 -translate-x-6"></div>
                        </div>
                    </label>

                    <p class="text-gray-500 text-sm">- 이미지는 최대 3장까지 첨부 가능합니다.</p>
                    <p class="text-gray-500 text-sm">- 이미지는 파일 형식은 JPG, PNG, GIF만 가능합니다.</p>
                    


                    
                </div>

                <div class="border border-gray-200 w-full my-8"></div>

                <div>
                    <h4 class="text-lg font-bold mb-3">발송 설정</h4>

                    <ul class="flex text-center justify-between">
                        <li v-for="(btnItem, idx) in btnItems" :key="idx"  @click='toggleClickBtn(idx)' :class="{'border-2 border-blue-900 text-blue-900 font-bold' : onClickBtn === idx, 'bg-gray-200 border-0 text-gray-500':onClickBtn !== idx, 'mr-3': idx !== btnItems.length - 1}" class="w-6/12 rounded-lg border border-gray-300 p-4 transition ">{{btnItem.text}}</li>
                    </ul>
                </div>






            </div> <!-- left -->

            <div class="w-1/2 p-10 tablet:hidden pc:block">
                
                <div class="border-4 border-black widepc:w-400 pc:w-300 pc:h-500 widepc:h-700 rounded-xl sticky left-0 top-10">
                    <div class="w-full h-full bg-blue-200 rounded-lg">
                        <div class="relative p-5">
                            <p class="absolute left-5 top-5 text-2xl">≪</p>
                            <p class="text-center text-lg">단문 SMS</p>
                        </div>

                        <div class="px-5 mt-5">
                            <p class="mb-2">userId</p>
                            <div class="w-full h-auto bg-white p-3 rounded-lg overflow-auto break-words">{{ textAreaValue }}</div>
                        </div>
                    </div>
                    
                    
                </div>
                

            </div><!-- right -->
            
            <div class="border border-gray-200 w-full my-8"></div>

            <div class="w-full">
                <button class="w-full text-white bg-blue-900 p-3 rounded-lg">발송하기</button>
            </div>



        </div>



       
    </div>
</template>


<script setup>

    import {onMounted, ref} from 'vue';

    const menuItems = [
        { path : '/send', text : '메시지 전송'},
        { path : '/send', text : '카카오 알림톡'},
        { path : '/send', text : '카카오 친구톡'},
    ]

    const activeMenu = ref(0)
    const setActiveMenu = (idx)=>{
        activeMenu.value = idx
    }


    const isActive = ref(false)
    const toggleSwitch = ()=>{
        isActive.value = !isActive.value;
    }

    const textLength = ref(0)
    const textAreaValue = ref('이 영역은 미리보기 화면입니다.')

    const onChangeTextArea = (e)=>{
       textLength.value = e.target.value.length
       textAreaValue.value = e.target.value
       if(textLength.value === 0){
        textAreaValue.value = '이 영역은 미리보기 화면입니다.'
       }else if(textLength.value > 90){
        window.alert('90byte 이하로 작성해주세요')
        textAreaValue.value = textAreaValue.value.slice(0,90)
        
    
    
       }

    }

    
    onMounted(() => {
        textLength
        textAreaValue
    })

    

    const onClickBtn = ref(0)
    const btnItems = [
        {text : '즉시 발송'},
        {text : '예약 발송'},
    ]
    const toggleClickBtn = (idx)=>{
        onClickBtn.value = idx
    }

    


</script>
<style scoped>
    
</style>