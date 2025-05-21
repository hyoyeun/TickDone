import { useNavigate } from "react-router-dom"


function Login() {
    let navigate = useNavigate();


    return (
        <div class="h-[60vh] w-full flex flex-row justify-start items-center text-2xl">
            {/* 왼쪽 컨텐트 영역 */}
            <div class="flex flex-col w-[50%] h-[100%]  justify-center items-center text-4xl">
                <div class="bg-blue-200 w-[100%] h-[30%] flex flex-col justify-center items-center gap-3">
                    <h3>Welcom to TickDone</h3>
                    <p class="text-xl">List. Track.Achieve</p>
                </div>
                <div class="w-[100%] h-[50%] flex flex-row justify-center items-center">
                    <form class="w-[100%] h-[100%] flex flex-row justify-center items-center">
                        <div class=" w-[30%] h-[100%]  bg-yellow-100 flex flex-col justify-center items-center gap-5">
                            <label id="userid">아이디</label>
                            <label id="userpw">비밀번호</label>
                        </div>
                        <div class="w-[50%] h-[100%] bg-red-300 flex flex-col justify-center items-start gap-5">
                            <input type="email" id="userid" />
                            <input type="password" id="userpw" />
                        </div>
                        <div class="w-[30%] h-[100%] bg-green-300 flex flex-col justify-center items-center text-2xl">
                            <button >로그인</button>

                        </div>
                    </form>
                </div>
                <div class="w-[100%] h-[20%] bg-purple-500 flex justify-around items-center text-2xl">
                   <button >아이디 찾기</button>
                   <button >비밀번호 찾기</button>
                    <button >회원가입</button>
                </div>
            </div>
            {/* 오른쪽 이미지 영역 */}
            <div class="flex flex-col w-[50%] h-[100%] justify-center items-center text-4xl">

            </div>

        </div>
    )
}

export default Login 