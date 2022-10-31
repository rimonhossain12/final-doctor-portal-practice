import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import auth from '../../firebase.init';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();

    if (gUser || user) {
        console.log(gUser);
    }

    if (updating) {
        console.log('profile Name update done!');
    }

    if (gLoading || loading) {
        return <LoadingSpinner />
    }

    if (gError || error || uError) {
        signInError = <p>{gError?.message || error?.message || uError?.message}</p>
    }


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password, data.name);
        await updateProfile({ displayName: data.name });
        navigate("/");
        reset();
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text" placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'name must be required!'
                                        }
                                    },
                                )}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <p role="alert" className='text-red-500 text-thin'>{errors.name.message}</p>}
                            </label>
                        </div>
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
                            {signInError}
                            <p className='py-2'>
                                <Link to='/forgot'>Forgot Password?</Link>
                            </p>
                        </div>
                        <input type="submit" className='btn btn-accent w-full max-w-xs text-white' value="sign up" />
                    </form>
                    <div className="divider">OR</div>
                    <p className='py-3 text-accent text-center'>Already Sign Up!
                        <Link to="/login"><span className='text-primary'> Please Login</span></Link>
                    </p>
                    <button
                        className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with Google</button>                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;