import React from 'react';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text" placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email must be required!'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Invalid Email validation'
                                        }
                                    },
                                )}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p role="alert" className='text-red-500 text-thin'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p role="alert" className='text-red-500 text-thin'>{errors.email.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'password must be required!'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 character!'
                                        }
                                    },
                                )}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-500 text-thin'>{errors?.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500 text-thin'>{errors?.password.message}</p>}
                            </label>
                        </div>


                        <input type="submit" className='btn btn-accent w-full max-w-xs text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;