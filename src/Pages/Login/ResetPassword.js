import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    let resetError;

    const actionCodeSettings = {
        url: 'http://localhost:3000/forgot',
    };

    if (error) {
        resetError = <p>{error.message}</p>
    }
    if (sending) {
        return <LoadingSpinner />
    }

    const onSubmit = async (data) => {
        await sendPasswordResetEmail(data.email, actionCodeSettings);
        alert('Send A reset Code!')

    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Enter Your Email</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text" placeholder="Enter Your Email"
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
                        {resetError}
                        <input type="submit"
                            className='btn btn-accent w-full max-w-xs
                          text-white'
                            //   onClick={}
                            value='submit'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;