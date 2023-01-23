import axios from "axios";

export default function signUp (form){
    console.log(form);
const url = 'https://api-cookenu.onrender.com/user/signup'
const body = {
    name: 'david22',
    email: 'david28@gmail.com.br',
    password: '123123'
}

axios.post(url,body)
.then((res)=>{
    localStorage.setItem('token',res.data.token)
    console.log(res);
})

.catch(err => console.log(err))


}