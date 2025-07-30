import React, { useState, useContext } from 'react';
// import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GuideContext } from '../context/GuideContext';

const Login = () => {
    const [state, setState] = useState('Admin');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setAToken, backendUrl } = useContext(AdminContext);
    const {setDToken} =useContext(GuideContext)


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl +'/api/admin/login', { email, password });
                if (data.success) {
                    localStorage.setItem('aToken', data.token);
                    setAToken(data.token);
                    toast.success("Login Successful");
                } else {
                    toast.error(data.message);
                }
            } else {
                // toast.info("Guide login not implemented");
                const {data} = await axios.post(backendUrl +'/api/guide/login',{email,password})
                 if (data.success) {
                    localStorage.setItem('dToken', data.token);
                    setDToken(data.token);
                    // toast.success("Login Successful");
                    console.log(data.token);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center bg-gray-100'>
            <div className='flex flex-col gap-4 p-8 w-[340px] sm:w-96 bg-white border rounded-2xl shadow-xl text-[#5E5E5E]'>
                <p className='text-2xl font-semibold text-center text-black'>
                    <span className='text-blue-600'>{state}</span> Login
                </p>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Email" className='p-3 border rounded-lg' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" placeholder="Password" className='p-3 border rounded-lg' />
                </div>
                <button type="submit" className='p-3 bg-blue-600 text-white rounded-lg'>Login</button>
                {state === 'Admin' ? (
                    <p>Guide Login? <span onClick={() => setState('Guide')} className='text-blue-600 cursor-pointer'>Click here</span></p>
                ) : (
                    <p>Admin Login? <span onClick={() => setState('Admin')} className='text-blue-600 cursor-pointer'>Click here</span></p>
                )}
            </div>
        </form>
    );
};

export default Login;
