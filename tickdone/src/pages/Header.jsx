import { useNavigate } from "react-router-dom"

function Header() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Header </h1>
            <button onClick={() => { navigate('/') }}>🏠 </button>
            <button onClick={() => { navigate('/login') }}>로그인 </button>
            <button onClick={() => { navigate('/goaltoday') }}>오늘의 목표 </button>
            <button onClick={() => { navigate('/mypage') }}>마이페이지 </button>
            <button onClick={() => { navigate('/calendar') }}>캘린더 </button>
        </div>
    )
}

export default Header 