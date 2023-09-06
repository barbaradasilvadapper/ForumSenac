
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BotaoEntrar } from "./Logout.jsx"


function Logout(){

    
    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }

    }, [navigate])


    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return(
    <>
        <BotaoEntrar borderRadius='20' size='md' onClick={handleLogout}> 
        Logout
        </BotaoEntrar>
    </>
    )
}

export default Logout;