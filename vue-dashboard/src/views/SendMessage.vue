<template>
    <div class="w-full">

        <div class="px-124 pt-5">
             <h4 class="text-28 font-bold my-5">메시지 전송</h4>

            <ul class="flex mt-40">

                <RouterLink v-for="(menuItem, idx) in menuItems" :key="idx"
                class="w-[122px] h-[46px] mr-7 text-center transition"
                :class="{'text-fontblue border-b-2 font-bold border-fontblue' : activeMenu === idx}"
                :to="menuItem.path"
                @click="setActiveMenu(idx)"
                >
                    {{menuItem.text}}
                </RouterLink>

            </ul>
        </div>

        <div class="bg-white px-124 pt-40 flex flex-row flex-wrap pb-40">

            <div class="w-1/2 tablet:w-full pc:w-1/2">
                <p class="text-sm text-fontgray">- 간편하게 한 화면에서 단문, 장문, 포토메세지를 발송할 수 있습니다.</p>
                <p class="text-sm text-fontgray">- 90Byte 초과 시 장문문자로 자동 전환되며, 최대 2,000Byte까지 작성이 가능합니다.</p>

                <h4 class="text-18 font-semibold mt-56 mb-3">수신번호</h4>
                <div>
                    <form class="flex">
                        <input class="w-10/12 h-[61px] border border-gray-200 text-md p-2.5 rounded-md" type="text" placeholder="휴대폰번호 (숫자만입력)">
                        <button class="w-2/12 h-[61px] bg-blue-800 text-white rounded-md ml-5">+ 추가</button>
                    </form>

                    <div class="pt-2 w-full h-[177px] pb-40 border border-b-gray-300 mt-16 rounded-t-md">
                        <p class="text-18 text-lightgray p-2">번호를 입력 후 엔터 혹은 추가하기를 클릭해 주세요.<br/>최대 1만 건까지 붙여넣기 가능합니다.</p>
                    </div>
                    <div class="flex flex-row justify-between px-3 items-center h-[61px] border border-gray-200 border-t-0 rounded-b-md">
                        <p class="font-bold">총 0명</p>
                        <p class="cursor-pointer text-gray-400 underline">모두삭제</p>
                    </div>

                    <ul class="flex text-center mt-16 h-[61px]">
                        <li class="p-4 w-4/12 border border-gray-300 text-lightgray mr-4 rounded-md">주소록 불러오기</li>
                        <li class="p-4 w-4/12 border border-gray-300 text-lightgray mr-3 rounded-md">파일 불러오기</li>
                        <li class="p-4 w-4/12 border border-gray-300 text-lightgray rounded-md">최근 전송 내역</li>
                       
                    </ul>
                    

                </div>

                <div class="border border-gray-200 w-full my-12"></div>


                <h4 class="text-18 font-semibold">현재 발송 가능 건수</h4>
                <ul class="mt-16 bg-lightgray2 h-[56px] rounded-md flex justify-around">
                    <li class="">
                        <p class="p-3 mr-16">단문 SMS <span class="text-lg font-bold">152건</span> </p>
                    </li>

                    <li class="">
                        <p class="p-3 mr-16">장문 LMS <span class="text-lg font-bold">100건</span> </p>
                    </li>

                    <li class="">
                        <p class="p-3 mr-16">포토 MMS <span class="text-lg font-bold">100건</span> </p>
                    </li>
                    
                    
                </ul>

                <div class="mt-5">
                    <p class="text-lg">현재 보유한 크레딧이 부족합니다 <span class="text-lg text-blue-900 underline ml-16">충전하기</span></p>
                </div>

                <div class="border border-gray-200 w-full my-10"></div>

                <div>
                    <h4 class="text-lg font-bold mb-5">발신번호</h4>

                    <select name="select_num" id="selectNum" class="border border-gray-300 w-full h-[61px] p-4 text-lightgray3 rounded-md">
                        <option value="">전송할 발신번호 선택</option>
                        <option value="1">010-1111-2222</option>
                        <option value="2">010-3333-4444</option>
                    </select>
                </div>

                <div class="border border-gray-200 w-full my-12"></div>

                <h4 class="text-18 font-semibold mb-3">메세지 입력</h4>

                <div class="bg-lightgray4 p-5 rounded-md">
                    <input type="text" class="w-full h-[61px] px-2 rounded-md" placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)">
                    
                    <div class="flex justify-between items-center mt-3">
                        <p class="bg-violet text-base text-white rounded-2xl w-[101px] h-[35px] flex items-center justify-center">단문 SMS</p>
                        <div class="text-base">
                            <span class="text-blue-900">{{textLength}}</span>
                            <span class="text-gray-500"> / 90Byte</span>
                            <img class="inline-block w-[18px] h-[20px] rounded-md ml-16 border border-gray-200 bg-white" src="../assets/img/refresh.png" alt="img">
                        </div>
                    </div>

                    <div class="w-full relative">
                        <textarea @change="onChangeTextArea" name="textarea" id="textArea" cols="30" rows="10" class="resize-none w-full h-[295px] text-18 mt-16 rounded-md p-3" placeholder="내용을 입력해 주세요. 90byte 초과 시 장문문자로, 이미지 추가 시, 포토 문자로 자동 전환 됩니다."></textarea>
                        <ul class="absolute right-2 bottom-5 flex flex-row text-center leading-43  text-gray-500">
                            <li class="bg-gray-100 w-[107px] h-[43px] rounded-2xl mr-2">특수문자</li>
                            <li class="bg-gray-100 w-[107px] h-[43px] rounded-2xl mr-2">템플릿</li>
                            <li class="bg-gray-100 w-[107px] h-[43px] rounded-2xl">#[변수]</li>
                        </ul>
                    </div>

                    <div class="border border-gray-200 w-full my-5"></div>

                    <div class="flex justify-between">
                        <p class="text-18 font-semibold">광고성 문자(080 수신거부번호 포함)</p>
                         <div 
                            @click="toggleSwitch" 
                            :class="{ 'bg-blue-500': isActive, 'bg-gray-300': !isActive }" 
                            class="w-[52px] h-[33px] rounded-full focus:outline-none"
                            >
                            <span 
                                :class="{ 'translate-x-5': isActive, '-translate-x-2': !isActive }" 
                                class="inline-block overflow-hidden w-[33px] h-[33px] bg-white rounded-full shadow-md transform transition"
                            ></span>
                        </div>

                    </div>

                    <div class="border border-gray-200 w-full my-5"></div>

                    <h4 class="text-18 font-semibold mb-5">이미지 추가</h4>

                    <input id="add_image" type="file" hidden>
                   <label for="add_image" class="block w-[100px] h-[100px] border border-borderce relative cursor-pointer mb-6 bg-white">
                        <div class="absolute inset-0 flex justify-center items-center">
                            <div class="w-[19px] h-0.5 bg-gray-500"></div>
                            <div class="w-0.5 h-[19px] bg-gray-500 -translate-x-2.5"></div>
                        </div>
                    </label>

                    <p class="text-gray-500 text-sm">- 이미지는 최대 3장까지 첨부 가능합니다.</p>
                    <p class="text-gray-500 text-sm">- 이미지는 파일 형식은 JPG, PNG, GIF만 가능합니다.</p>
                    


                    
                </div>

                <div class="border border-gray-200 w-full my-8"></div>

                <div>
                    <h4 class="text-18 font-semibold mb-3">발송 설정</h4>

                    <ul class="flex text-center justify-between">
                        <li v-for="(btnItem, idx) in btnItems" :key="idx"  @click='toggleClickBtn(idx)' :class="{'border-2 border-blue1 text-blue1 ' : onClickBtn === idx, 'bg-gray-200 border-0 text-gray-500':onClickBtn !== idx, 'mr-3': idx !== btnItems.length - 1}" class="w-6/12 h-[66px] rounded-lg p-4 transition ">{{btnItem.text}}</li>
                    </ul>
                </div>






            </div> <!-- left -->

            <div class="w-1/2 p-10 tablet:hidden pc:block">
                
                <div class="border-4 border-black widepc:w-[401px] pc:w-[350px] pc:h-[700px] widepc:h-[775px] rounded-[22px] sticky mt-[50px] ml-[116px] left-[0px] top-[10px] overflow-hidden">
                    <div class="w-full h-full bg-blue-200 ">
                        <div class="relative p-5">
                            <p class="absolute left-5 top-5 text-2xl">≪</p>
                            <p class="text-center text-lg">단문 SMS</p>
                        </div>

                        <div class="px-5 mt-5">
                            <p class="mb-2">userId</p>
                            <div class="w-full h-auto  bg-white p-3 rounded-lg overflow-auto break-words">{{ textAreaValue }}</div>
                        </div>
                    </div>
                    
                    
                </div>
                

            </div><!-- right -->
            
            <div class="border border-gray-200 w-full my-8"></div>

            <div class="w-full">
                <button class="w-full h-[65px] text-white bg-blue1 p-3 rounded-lg">발송하기</button>
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