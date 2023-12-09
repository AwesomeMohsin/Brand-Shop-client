import { useLoaderData, useParams } from "react-router-dom";
import BrandItemCard from "./BrandItemCard";
import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const BrandItems = () => {

    // eslint-disable-next-line no-unused-vars
    const { brandName } = useParams();
    const loadedBrand = useLoaderData();


    const [jsonBrands, setJsonBrands] = useState([])
    const [matchedObject, setMatchedObject] = useState([])

    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => {
                setJsonBrands(data)

            })
    }, [])


    useEffect(() => {
        const matched = jsonBrands.find(jsonBrand => jsonBrand.name == brandName)
        setMatchedObject(matched);
        console.log(matched);

    }, [brandName, jsonBrands])


    console.log(matchedObject?.banner1);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="md:container mx-auto">


            {/* advertisement section */}
            <section className="pt-20">

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                >
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src={matchedObject?.banner1} className="w-full rounded-xl" />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={matchedObject?.banner2} className="w-full rounded-xl" />
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={matchedObject?.banner3} className="w-full rounded-xl" />
                    </div>
                      
                </Carousel>

            </section>



            <div className="py-20">
                <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold font-fontTitle pb-4">Available Products</h2>
                <hr className="mx-auto w-2/5" />
                <hr className="mx-auto w-2/5 pb-20" />

                {
                    loadedBrand.length <= 0 ?
                        <div className="mx-auto pt-20 pb-52">
                            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-fontTitle">There are no products available from this brand. <br /> Please explore another brand.</h2>
                        </div>

                        :

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-full gap-6 mx-auto ">

                            {
                                loadedBrand.map((loadedBrandItem, idx) => <BrandItemCard
                                    key={idx}
                                    loadedBrandItem={loadedBrandItem}
                                ></BrandItemCard>)
                            }
                        </div>
                }

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-full gap-6 mx-auto ">

                    {
                        loadedBrand.map((loadedBrandItem, idx) => <BrandItemCard
                            key={idx}
                            loadedBrandItem={loadedBrandItem}
                        ></BrandItemCard>)
                    }
                </div> */}
            </div>
        </div>
    );
};

export default BrandItems;