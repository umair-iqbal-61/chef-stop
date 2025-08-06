import React from 'react'
import Chef from '../../assets/logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-15'>
            <div className='flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    {/* Logo */}
                    <Link to="/">
                        <img src={Chef} alt="logo" className="w-[200px] -ml-5 -mb-6" />
                    </Link>

                    <p className='text-zinc-600 max-w-[350px]'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>

                    <p className='text-zinc-800 mt-6'>
                        2025 &copy; All Rights Reserved
                    </p>
                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ'S</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>

                <div>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>

                    <p className='text-zinc-600 mt-6'>
                        Questions or Feedback?<br />
                        We'd love to hear from you.
                    </p>

                    <div className='p-1 flex-1 bg-white rounded-lg mt-6'>
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg text-2xl hover:to-orange-600 cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
