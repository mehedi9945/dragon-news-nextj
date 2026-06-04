"use client";
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const logInPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginFunc = (data) => {
        console.log(data, "data");
    };
    console.log(errors, "errors");



    return <div className="container mx-auto flex items-center justify-center min-h-[80vh] bg-slate-100">
        <div className="p-4 rounded-xl bg-white">
            <h2 className="font-bold text-3xl text-center mb-6">Login your account</h2>

            <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                <fieldset className="$$fieldset">
                    <legend className="$$fieldset-legend">Email address</legend>
                    <input
                        type="email"
                        className="$$input"
                        placeholder="Enter your email address"
                        {...register("email")}
                    />
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
                <button className="btn w-full bg-slate-800 text-white">Login</button>
            </form>
            <p>Don't Have An Account ? <Link href="/register" className="text-blue-500 hover:underline">Register</Link></p>


        </div>

    </div>;
};

export default logInPage;