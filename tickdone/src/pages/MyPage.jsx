import { useNavigate } from "react-router-dom"
function MyPage() {
    let navigation = useNavigate()
    return (
        <div>
            <h1>MyPage</h1>
            <button onClick={()=>{navigation('/myinfoedit')}}> 내정보 변경</button>
        </div>
    )
}

export default MyPage 