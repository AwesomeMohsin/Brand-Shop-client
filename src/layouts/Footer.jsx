import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center border-t-4 p-10 text-base-content rounded">
            <div className='flex  text-[#808080]'>
                
                <h3 className='font-semibold text-2xl'>Awesome Brands</h3>
                <img className='h-16' src="/icons/logo.png" alt="" />
            </div>
            <nav>
                <div className="grid grid-flow-col gap-4  text-[#808080]">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <button className="text-3xl"
                        ><FaFacebook></FaFacebook></button>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <button className="text-3xl"
                        ><FaInstagram></FaInstagram></button>
                    </a>

                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <button className="text-3xl"
                        ><FaYoutube></FaYoutube></button>
                    </a>
                </div>
            </nav>
            <aside className=' text-[#808080]'>
                <p>Copyright © 2023 - All right reserved by <span className='font-semibold'>Awesome Brands</span></p>
            </aside>
        </footer>
    );
};

export default Footer;