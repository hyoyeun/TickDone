import { Outlet, useNavigate } from "react-router-dom";

function GoalToday() {
    let navigation = useNavigate()
    return (
        <div>
            <h1>오늘의 목표 페이지 </h1>
            <button onClick={() => { navigation('/goaltoday/goalsetting') }}> 목표 추가하기 </button>
            <Outlet/>
        </div>
    )
}

export default GoalToday;