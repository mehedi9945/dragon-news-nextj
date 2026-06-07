"use client";
import { authClient } from '@/lib/auth-client';
import { email } from 'better-auth';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const registerPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterFunc = async (data) => {
        console.log(data, "data");
        const { name, email, password, photo } = data;
        console.log(name, photo);


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error);
    };
    console.log(errors, "errors");



    return <div className="container mx-auto flex items-center justify-center min-h-[80vh] bg-slate-100">
        <div className="p-4 rounded-xl bg-white">
            <h2 className="font-bold text-3xl text-center mb-6">Register your account</h2>

            <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                <fieldset className="$$fieldset">
                    <legend className="$$fieldset-legend">Your Name</legend>
                    <input
                        type="text"
                        className="$$input"
                        placeholder="Enter your name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className="text-red-500">Name is required</p>}
                </fieldset>

                <fieldset className="$$fieldset">
                    <legend className="$$fieldset-legend">Photo URL</legend>
                    <input
                        type="text"
                        className="$$input"
                        placeholder="Enter your photo URL"
                        {...register("photoUrl", { required: true })}
                    />
                    {errors.photoUrl && <p className="text-red-500">Photo URL is required</p>}
                </fieldset>

                <fieldset className="$$fieldset">
                    <legend className="$$fieldset-legend">Email address</legend>
                    <input
                        type="email"
                        className="$$input"
                        placeholder="Enter your email address"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className="text-red-500">Email is required</p>}
                </fieldset>

                <fieldset className="$$fieldset">
                    <legend className="$$fieldset-legend">Password</legend>
                    <input
                        type="password"
                        className="$$input"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <p className="text-red-500">Password is required</p>}
                </fieldset>
                <button className="btn w-full bg-slate-800 text-white">Register</button>
            </form>
            <p>Don't Have An Account ? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>


        </div>

    </div>;
};

export default registerPage;