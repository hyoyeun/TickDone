import { useNavigate } from "react-router-dom"

function Home() {
    let navigation = useNavigate()
    return (
        <>
            <div class="w-full h-full flex flex-row justify-center items-center">
                <div class="flex w-full h-full justify-center items-center">
                    <div class="flex flex-col text-5xl text-center gap-10 justify-center">
                        <h1>시간을 담은, </h1>
                        <h1>100% 자기주도 목표앱</h1>
                        <h4 class="text-2xl">Daily Plans, Expertly Managed</h4>
                        <button class="transition-all duration-500 ease-in-out w-80 h-24 border-black border-2 rounded-xl hover:shadow-lg hover:scale-110 cursor-pointer hover:shadow-gray-400" onClick={() => { navigation('/goaltoday') }}>start</button>
                    </div>

                </div>
                <div class="flex w-full h-full">

                </div>

            </div>

        </>
    )
}

export default Home 