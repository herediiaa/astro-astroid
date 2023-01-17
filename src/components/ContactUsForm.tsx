/* stateForm */
import {useForm} from 'react-hook-form'
/* schema erros */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import type { FieldError } from 'react-hook-form';

export const MyForm = ()=>{

    type Values = {
        name: string,
        email: string
    }

    
    const schema = yup.object({
        /* variables register inputs with its requirements */
        name: yup.string().required("this field is required"),
        email: yup.string().email("incorrect format").required("this field is required")
    })
    const { register, handleSubmit, formState:{errors} } = useForm<Values>({
        resolver: yupResolver(schema)
    })

    type ErrorType = {
        error?:FieldError
    }
    const MyErrors = ({error}:ErrorType)=>{
        return <p className='text-red-600 mt-1'>{error?.message}</p>
    }

    
    return(
        <form className=' m-w-[570px] mx-auto mt-5 p-5 border border-gray-600 rounded-md'  onSubmit={handleSubmit((data:Values)=>(console.log(data)))} >
            <input className='p-3 border border-gray-300 rounded-2xl block w-full mt-2 outline-none focus:border-blue-600' type="text" placeholder='Nombre' {...register("name")} />
            <MyErrors error={errors.name} />
            <input className='p-3 border border-gray-300 rounded-2xl block w-full outline-none focus:border-blue-600 ' type="text" placeholder='Mail' {...register('email', {required: true, max: 5})}/>
            <MyErrors error={errors.email}/>

            <button className='p-3 bg-blue-600 rounded-lg text-white mt-5 hover:bg-blue-700 ' type='submit'>
                Mandar
            </button>
        </form>
    
    )
}
