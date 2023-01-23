import React from "react";
import { useNavigate } from "react-router-dom";
import login from "../../api/login.js";
import useForm from "../../hooks/useForm.js";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";


function LoginPage() {
  const navigate = useNavigate();
 const {form , onChange} = useForm({email:"",password:""})
 const enviar =(e)=>{
  e.preventDefault()
  login()
  console.log(form);
 }
  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={enviar}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.name}
            onChange={onChange}
          
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
           
          />
        </InputContainer>
        <button >Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
