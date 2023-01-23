import axios from "axios";

export default function login (form){
    const url = 'https://api-cookenu.onrender.com/user/login'
    const body = {
        name: 'david28@gmail.com.br',
        password: '123123'
    }
axios.post(url,body)
.then(res => alert('logado!'))
.catch(err=> console.log(err,'erro login'))

}