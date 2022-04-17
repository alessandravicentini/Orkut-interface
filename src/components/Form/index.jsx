import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './style.css'

export const Form = () => {

  const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup
        .string()
        .required('Nome obrigatório'),
        surname: yup
        .string()
        .required('Sobrenome obrigatório'),
        email: yup
        .string()
        .required('Email obrigatório').email('Email inválido'),
        password: yup
        .string()
        .required('Senha obrigatória')
        .min(8, 'Mínimo 8 caracteres')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Senha deve conter pelo menos uma letra maiúscula, um número e um caracter especial'),
        passwordConfirmation: yup
        .string()
        .required('Confirme a senha')
        .oneOf([yup.ref('password')], 'A senha deve ser a mesma')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) })

    const onSubmitFunction = (data) => {
        history.push(`/home/${data.name} ${data.surname}`)
    }

    return (
        <>
          <h3>Cadastre-se!</h3>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome *" type="text" {...register("name")} />
            {errors.name && <span className="error">{errors.name.message}</span>}
            <input placeholder="Sobrenome *" type="text" {...register("surname")} />
            {errors.surname && <span className="error"span>{errors.surname.message}</span>}
            <input placeholder="E-mail *" type="text" {...register("email")} />
            {errors.email && <span className="error">{errors.email.message}</span>}
            <input placeholder="Senha *" type="password" id="password" {...register("password")} />
            {errors.password && <span className="error">{errors.password.message}</span>}
            <input placeholder="Confirme sua senha *" type="password" id="passwordConfirmation" {...register("passwordConfirmation")}/>
            {errors.passwordConfirmation && <span className="error">{errors.passwordConfirmation.message}</span>}
            <button type="submit">Cadastrar</button>
          </form>
        </>
    )
}