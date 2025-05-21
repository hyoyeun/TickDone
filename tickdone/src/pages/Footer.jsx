import { FaGitAlt } from "react-icons/fa6";
import { RxNotionLogo } from "react-icons/rx";

function Footer() {
    return (
        <>
            <div class="h-[15vh] w-full bg-a-c fixed bottom-0 flex flex-row justify-end items-center p-11 gap-14">
            <div class="flex flex-row gap-6 text-g-b">
                <a href="https://github.com/hyoyeun/TickDone" target='_blank'><FaGitAlt class="w-10 h-10 transition-all duration-500  hover:scale-125" /></a>
                <a target="_blank" href="https://www.notion.so/1285bf108bcd805a9beae589981addd4"> <RxNotionLogo class="w-10 h-10 transition-all duration-500 hover:scale-125" /> </a>
            </div>
            <div class="flex flex-col gap-4 text-g-b">
                <p>상호 : 뾰유니네  | 대표자명 : 방효윤</p>
                <p>연락처 : 010-3678-9041 | 이메일 : gydbs99@naver.com</p>
            </div>
        </div >
        </>
    )

}

export default Footer 