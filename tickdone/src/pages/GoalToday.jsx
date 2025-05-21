import { Outlet, useNavigate } from "react-router-dom";
import { MdNotStarted } from "react-icons/md";
import { useState } from "react";


function GoalToday() {

    const today = new Date();
    const formatteDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    let [countTime, setCountTime] = useState()

    let navigation = useNavigate()
    return (
        <div class="h-[60vh] w-full flex flex-col md:flex-row justify-around items-center text-2xl">

            <div class="flex flex-col h-full w-[75vw] rounded-2xl bg-slate-200">
                {/* 버튼 총 시간 */}
                <div class="flex flex-row h-[30%] w-[75vw] bg-red-200  justify-center items-center text-4xl">
                    <div class="flex w-[50%] h-[100%] bg-slate-50 justify-center items-center">
                        <button class="w-36 h-36 rounded-full bg-violet-300 flex justify-center items-center"><MdNotStarted class="text-7xl" /></button>
                    </div>
                    <div class=" w-[50%] h-[100%] bg-blue-300 flex flex-col justify-center items-center gap-3">
                        <p class="text-base">{formatteDate}</p>
                        <p>00:00:00</p>
                    </div>
                </div>
                {/* 목표 추가 */}
                <div class="flex flex-col h-[15%] w-[75vw] bg-slate-50 justify-center items-start">
                    <button onClick={() => { navigation('/goaltoday/goalsetting') }}> 목표 추가하기 </button>
                    <Outlet />
                </div>
                {/* 오늘의 목표 map */}
                <div class="grid md:grid-cols-5 grid-cols-3 h-[55%] w-[75vw] bg-orange-200  justify-around items-center text-center overflow-y-auto">
                    <p>목표</p>
                    <p>진행시간</p>
                    <p>목표시간</p>
                    <p class="hidden md:block">메모</p>
                    <p class="hidden md:block">평가</p>

                </div>
            </div>

            <div class="flex flex-col h-[100%] md:w-[15vw] w-[75vw] bg-violet-200 justify-center items-center rounded-2xl">
                <div class="h-[15%] w-full flex flex-row justify-center items-center">
                    <h3>ToDoList</h3>
                </div>
                <div class="h-[10%] w-full flex flex-row justify-center items-center">
                    <button> 할일 추가하기 </button>
                </div>
                <div class="h-[75%] w-full flex flex-row justify-center items-center gap-2">
                    <input type="checkbox" />
                    <label>오늘 할일 </label>
                </div>
            </div>
        </div>
    )
}

export default GoalToday;