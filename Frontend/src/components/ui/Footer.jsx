import React from 'react';
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import LinkedlnIcon from '../../assets/LinkedIn.png';

const Footer = () => {
  return (
    <div className="bg-[#1E714A] text-white w-full  ">
        <div className="footer flex  py-40 border-b-1 border-[#191614] flex-col md:flex-row sm:flex-roow justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="links w-full mx-auto flex flex-col items-center">
                <a href="#">About</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
            </div>
            <div className="suscribe w-[100%] flex flex-col mx-auto items-center">
                <h3 className="text-2xl font-bold text-left mb-4">Subscribe </h3>
                <p className="text-left mb-4 ">Join our Newsletter and be up to date on Health</p>
                <form className="flex w-80 justify-center gap-2">
                    <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md border-1 border-[#163326] text-[#ffffff]" />
                    <button type="submit" className="bg-[#163326] w-full text-white py-2 px-4 rounded-r-md">Subscribe</button>
                </form>
                <p className='text-[#191614] text-sm w-90'>By subscribing you agree to with our <span><a href="#">Privacy Policy</a></span> and provide consent to receive updates from our company.</p>
            </div>
        </div>
        <div className="flex lg:flex-row py-4 text-center text-sm justify-around md: flex-col items-center">
            <p>&copy; 2025 BMI AI. All rights reserved.</p>
            <div className='flex justify-center mt-2'>
                <a href="#" className="mx-2  border-b-1 border-[#ffffff]">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="mx-2  border-b-1 border-[#ffffff]">Terms of Service</a>
                <span>|</span>
                <a href="#" className="mx-2  border-b-1 border-[#ffffff]">Cookies Settings</a>
            </div>
            <div className="icons flex justify-center mt-2 gap-4">
                <a href="#">
                    <img src={FacebookIcon} 
                    alt="" 
                    className='w-4'
                    />
                </a>
                <a href="#">
                    <img src={InstagramIcon} 
                    alt="" 
                    className='w-4'
                    />
                </a>    
                <a href="#">
                    <img src={LinkedlnIcon} 
                    alt="" 
                    className='w-4'
                    />
                </a>    
            </div>
        </div>
        
      
    </div> 
  );
}

export default Footer;
