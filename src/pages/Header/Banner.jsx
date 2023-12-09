

const Banner = () => {

  

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://phono-demo.myshopify.com/cdn/shop/files/phono-slider-3.jpg)' }}>
           
            <div className="hero-overlay bg-opacity-20 "></div>
            <div className="hero-content text-center mr-3.5 mx-auto text-white">
            

                <div className="w-11/12 md:w-3/4 space-y-6">
                    <h1 className="mb-5 
                        text-4xl md:text-5xl lg:text-7xl font-fontTitle font-bold ">Empowering Your Digital Journey</h1>
                    
                    <p className="font-fontTitle text-xl md:text-3xl pt-6">Elevate Your Experience!</p>
                    <div>
                    <a href="#brands"><button className="btn btn-outline text-white">View our Brands</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;