"use client"

import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [loginLoader, setLoginLoader] = useState(false)
    const [googleLoginLoader, setGoogleLoginLoader] = useState(false)
    const [twitterLoginLoader, setTwitterLoginLoader] = useState(false)

    const loginMethod = () => {
        setLoginLoader(true)
        setTimeout(function () {
            setLoginLoader(false)
        }, 3000);
    }

    const googleloginMethod = () => {
        setGoogleLoginLoader(true)
        setTimeout(function () {
            setGoogleLoginLoader(false)
        }, 3000);
    }

    const twitterloginMethod = () => {
        setTwitterLoginLoader(true)
        setTimeout(function () {
            setTwitterLoginLoader(false)
        }, 3000);
    }

    return (
        <main>
            <dialog id="login_modal" className="modal scrollbar-hide">
                <form method="dialog" className="modal-box p-0 m-0 scrollbar-hide">
                    <div className="min-h-full row-span-2 w-full flex flex-col items-center justify-between">
                        <div className="hero min-h-full">
                            <div className="hero-content flex-col lg:flex-row-reverse w-full m-0 p-0">
                                <div className="card w-full max-w-xl rounded-lg shadow-2xl bg-base-100 px-10 py-8 mx-auto">
                                    <img className="my-auto h-10 w-10" src="https://training-layers-greenfield-pic.s3.us-west-1.amazonaws.com/clhqar9xz003ipiwuh3rxglye/assets/images/logo/clhqar9xz003ipiwuh3rxglye.png" />
                                    <h1 className="my-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                                        Welcome Back
                                    </h1>
                                    <p className="text-sm font-dark text-gray-500 dark:text-gray-400">
                                        Don't have an account?
                                        <Link
                                            href="/signup"
                                            className="font-medium ml-1 text-primary-600 hover:underline dark:text-primary-500"
                                        >
                                            {"Sign up"}
                                        </Link>
                                    </p>
                                    <div className="grid gap-6 sm:grid-cols-2 mt-4">
                                        <div className="form-control">
                                            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="name@company.com"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                                                Password
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                                        <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                                            or
                                        </div>
                                        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 items-start">
                                        <div>
                                            <button
                                                className={`btn w-full rounded-3xl border-gray-50 text-gray-50 bg-blue-500 hover:bg-blue-500`}
                                                onClick={twitterloginMethod}
                                                disabled={twitterLoginLoader}
                                            >
                                                {twitterLoginLoader && <span className="loading loading-spinner"></span>}
                                                {twitterLoginLoader ? "loading" : "TWITTER"}
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className={`btn w-full rounded-3xl border-gray-50 text-black bg-white-50 hover:bg-white-50`}
                                                onClick={googleloginMethod}
                                                disabled={googleLoginLoader}
                                            >
                                                {googleLoginLoader && <span className="loading loading-spinner"></span>}
                                                {googleLoginLoader ? "loading" : "GOOGLE"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                        </div>
                                        <Link href="/forgot-password"
                                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button
                                            className={`btn border-gray-50 text-gray-50 bg-primary-50 hover:bg-primary-50`}
                                            onClick={loginMethod}
                                            disabled={loginLoader}
                                        >
                                            {loginLoader && <span className="loading loading-spinner"></span>}
                                            {loginLoader ? "loading" : "Login"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </main>
    );
}
