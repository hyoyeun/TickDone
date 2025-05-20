import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "./../../public/imges/logo.png"

function Header() {
    let navigate = useNavigate();
    return (
        <div class="flex flex-col max-h-[25vh] ">
            <div class="h-[80px] bg-lb text-iv flex justify-end items-center p-7">
                <div class="w-96 flex justify-between items-center text-2xl">
                    <Link to="/" class="transition-all duration-500  hover:scale-150"> Light</Link>
                    <Link to="/" class="transition-all duration-500  hover:scale-150"> Dark</Link>
                </div>
            </div>

            <div class="max-h-[15vh] flex justify-between items-center p-16 text-2xl ">
                <Link to='/'><img alt="logo" src={logo} class="w-48 h-48 " /></Link>
                <Link to='/goaltoday'><p class="transition-all duration-500  hover:scale-150">오늘의 목표</p></Link>
                <Link to='/calendar'><p class="transition-all duration-500  hover:scale-150">캘린더</p></Link>
                <Link to='/login'><p class="transition-all duration-500  hover:scale-150">로그인</p></Link>
                <Link to='/mypage'><p class="transition-all duration-500  hover:scale-150">마이페이지</p></Link>


            </div>
        </div>

    )
}

export default Header 