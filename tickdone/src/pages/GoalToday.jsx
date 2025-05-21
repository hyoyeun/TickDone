import { Outlet, useNavigate } from "react-router-dom";
import { MdNotStarted } from "react-icons/md";
import { useState } from "react";


function GoalToday() {

    const today = new Date();
    const formatteDate =`${today.getFullYear()}년 ${today.getMonth() +1 }월 ${today.getDate()}일`;
    let [countTime,setCountTime] = useState()

    let navigation = useNavigate()
    return (
        <div class="h-[60vh] w-full flex flex-col justify-start items-center text-2xl">
            {/* 버튼 및 날짜, 총 시간  */}
            <div class="flex flex-row h-[30%] w-[80vw] bg-red-200  justify-center items-center text-4xl">
                <div class="flex w-[50%] h-[100%] bg-slate-50 justify-center items-center">
                    <button class="w-36 h-36 rounded-full bg-violet-300 flex justify-center items-center"><MdNotStarted class="text-7xl"/></button>
                </div>
                <div class=" w-[50%] h-[100%] bg-blue-300 flex flex-col justify-center items-center gap-3">
                    <p class="text-base">{formatteDate}</p>
                    <p>00:00:00</p>
                </div>
            </div>
            {/* 목표 추가 */}
            <div class="flex flex-col h-[15%] w-[80vw] bg-slate-50 justify-center items-start">
                <button onClick={() => { navigation('/goaltoday/goalsetting') }}> 목표 추가하기 </button>
                <Outlet />
            </div>
            {/* 오늘의 목표 map */}
            <div class="flex flex-row h-[55%] w-[80vw] bg-orange-200  justify-around items-center ">
                <p>목표</p>
                <p>진행시간</p>
                <p>목표시간</p>
            </div>

        </div>
    )
}

export default GoalToday;