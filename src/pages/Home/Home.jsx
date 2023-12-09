/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Banner from "../Header/Banner";
import BrandCard from "../Collections/BrandCard";
import './DarkToLight.css';


const Home = () => {

  

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [])



    return (
        <div>
            
            <Banner></Banner>


            {/* Brand Section */}
            <div id="brands" className="md:container mx-auto py-32">


                {/* brands section */}
                <h2 className="text-center text-6xl font-semibold font-fontTitle pb-4">Our Brands</h2>
                <hr className="mx-auto w-2/5" />
                <hr className="mx-auto w-2/5 pb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                    {
                        brands.map(brand => <BrandCard
                            key={brand.id}
                            brand={brand}
                        ></BrandCard>)
                    }
                </div>


                {/* Who We are section */}
                <section>

                    <h2 className="text-center text-6xl font-semibold font-fontTitle pb-4 py-40">Who are we</h2>
                    <hr className="mx-auto w-2/5" />
                    <hr className="mx-auto w-2/5 pb-32" />

                    <div className="flex flex-col-reverse lg:flex-row">

                        <div className="flex-1 my-auto">
                            <h2 className="text-3xl font-fontTitle pb-6 mx-auto w-11/12 leading-10 text-center lg:text-left pt-4">We are "Awesome Brands", <br /> Your trusted source for all things tech. </h2>
                            <p className="text-xl w-11/12 mx-auto">Discover a world of innovation and endless possibilities at "Awesome Brands". We are your go-to destination for all things technology, offering a vast selection of phone, camera, and computer parts. From high-quality components to cutting-edge accessories, we've got it all. Our expert team is here to guide you through every step, ensuring you make the most of your tech. Elevate your devices, explore new horizons, and protect your investments. Welcome to the future of tech shopping.</p>
                        </div>
                        <div className="flex-1 my-auto">
                            <img className="rounded-xl" src="https://cdn.mos.cms.futurecdn.net/WY9xxaCG6kcFTHMuw3PdcB.jpg" alt="" />
                        </div>
                    </div>

                </section>



                {/* Why us section */}
                <section className="">
                    <h2 className="text-center text-6xl font-semibold font-fontTitle pb-4 py-40">Why customer choose us</h2>
                    <hr className="mx-auto w-2/5" />
                    <hr className="mx-auto w-2/5 pb-32" />


                    <div className="flex">

                        <div className="flex-1 mx-auto">
                            <img className="mx-auto" src="https://phono-demo.myshopify.com/cdn/shop/files/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.png" alt="" />
                        </div>
                        <div className="join join-vertical w-full flex-1 my-auto">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" checked="checked" />
                                <div className="collapse-title text-xl font-medium">
                                    "Unmatched Quality and Selection"
                                </div>
                                <div className="collapse-content">
                                    <p>Explore a world of technology essentials at our shop. We stand out for our unparalleled quality and a vast selection of phone, camera, and computer parts, ensuring you get the best for your tech needs.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    "Expert Guidance Every Step of the Way"
                                </div>
                                <div className="collapse-content">
                                    <p>Choose us for the expertise we bring to the table. Our team is committed to offering expert guidance, helping you make the right choices, from upgrades to protection solutions for your valuable devices.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    "Your Tech, Our Priority"
                                </div>
                                <div className="collapse-content">
                                    <p>We prioritize your tech just as much as you do. Our shop is the go-to destination where your technology needs come first. Find the perfect components and accessories to elevate your devices.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    "A Commitment to Your Tech Satisfaction"
                                </div>
                                <div className="collapse-content">
                                    <p>At our shop, we're committed to your tech satisfaction. From phone enhancements to camera upgrades and computer parts, we're here to ensure your devices perform at their best, so you can stay ahead in the tech game.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





            </div>
        </div>
    );
};

export default Home;