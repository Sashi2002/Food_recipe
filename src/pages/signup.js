import React from "react";
import Image from "next/image";
import two from "../../public/images/OIP.jpg"
export default function SignUp() {
return (
    <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2">
    <div className="hidden sm:block">
    <Image src={two} className="w-[769px] h-[713px]" alt="food_recipe"></Image>
    </div>

    <div className="flex flex-col justify-center bg-gray-800">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-4xl font-bold text-center dark:text-white">
            SIGN UP
            </h2>
        <div className="flex flex-col py-2 text-gray-400">
            <label>Name</label>
            <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
            />
        </div>
        <div className="flex flex-col py-2 text-gray-400">
            <label>Email ID</label>
            <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
            />
        </div>
        <div className="flex flex-col py-2 text-gray-400">
            <label>Password</label>
            <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
            />
        </div>
        <div className="flex flex-col py-2 text-gray-400">
            <label>Confirm Password</label>
            <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
            />
        </div>
        <div className="flex justify-between py-2 text-gray-400">
            <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            {/*
        <p>Forgot Password</p>
        */}
        </div>
        <button className="w-full my-5 py-2 bg-[#07C731] shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Create Account
        </button>
        </form>
    </div>
    </div>
);
}
