import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};


type Props = {}

export default function ContactMe({ }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:jordonaren@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name}. ${data.message}`
    }
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left
        md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have what you need.{" "}
                    <span className='decoration-[#c52222]/50 underline'>Lets Talk</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='h-7 w-7 text-[#c52222] animate-pulse' />
                        <p className='text-2xl'>+1-321-795-6920</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='h-7 w-7 text-[#c52222] animate-pulse' />
                        <p className='text-2xl'>jordonaren@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='h-7 w-7 text-[#c52222] animate-pulse' />
                        <p className='text-2xl'>Ft Lauderdale, Fl</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                        </div>

                        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                        <textarea
                            {...register('message')}
                            placeholder='Message' className='contactInput'>
                        </textarea>
                        <button
                            type='submit' className='bg-[#c52222] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}