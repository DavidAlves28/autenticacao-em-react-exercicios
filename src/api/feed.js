import axios from "axios";

export default function feed (){
 const url = `https://api-cookenu.onrender.com/recipe/all`
//  const auth = ``
const auth  = localStorage.getItem('token')
axios.get(url,auth)
.then(res => console.log(res))
.catch(err => console.log(err))
}