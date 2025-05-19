import { useNavigate } from "react-router-dom"


function Login() {
    let navigate = useNavigate();


    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => { navigate('/membership') }}>회원가입</button>
        </div>
    )
}

export default Login 