import { useNavigate } from "react-router-dom";
import signUp from "../../api/signUp";
import useForm from "../../hooks/useForm";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {

  const navigate = useNavigate();
  // useForm
  const {form , onChange } = useForm({
    name:'',email: '', password: ''
  })
  // onChange para Form
  const handleClick = (e)=>{
    signUp(form)
    e.preventDefault()
    goToFeed(navigate)
  
  }
  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={handleClick}>
        <InputContainer>
     

          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            type='text'
            // pattern='[a-zA-Z]{5}'
            
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            type={'password'}
            value={form.password}
            pattern='[0-9]{6}'
            onChange={onChange}
          
          />
        
        </InputContainer>

        <button >Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;