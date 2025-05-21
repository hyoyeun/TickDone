import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "./../../public/imges/logo.png"

function Header() {
    let navigate = useNavigate();
    return (
        <div class="h-[25vh] flex flex-col ">
            {/* 상단  */}
            <div class="max-h-[40%] bg-lb text-iv flex justify-end items-center p-7">
                <div class="w-96 flex justify-between items-center text-2xl">
                    <Link to="/" class="transition-all duration-500  hover:scale-150"> Light</Link>
                    <Link to="/" class="transition-all duration-500  hover:scale-150"> Dark</Link>
                </div>
            </div>
            {/* 하단 */}
            <div class="max-h-[60%] flex justify-between items-center p-16 text-2xl ">
                <Link to='/'><img alt="logo" src={logo} class="min-w-40 h-40 transition-all duration-50 hover:scale-110" /></Link>
                <Link to='/goaltoday'><p class="transition-all duration-500  hover:scale-150">오늘의 목표</p></Link>
                <Link to='/calendar'><p class="transition-all duration-500  hover:scale-150">캘린더</p></Link>
                <Link to='/login'><p class="transition-all duration-500  hover:scale-150">로그인</p></Link>
                <Link to='/mypage'><p class="transition-all duration-500  hover:scale-150">마이페이지</p></Link>


            </div>
        </div>

    )
}

export default Header 