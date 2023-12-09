import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const BrandItemDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const { brandName, id } = useParams();
    const loadedBrandItem = useLoaderData();
    const { name, brand, price, type, ratings, image, description } = loadedBrandItem;
    console.log(loadedBrandItem);

    const { user } = useContext(AuthContext);

    const email = user.email;
    const uid = user.uid;
    const userCartData = { email, uid, name, brand, price, type, ratings, image, description };
    console.log(userCartData);

    const handleAddToCart = () => {
        fetch('https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userCartData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Added to cart")
                }
            })

    }





    return (
        <div className="my-20 ">
            <div >
                <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold font-fontTitle pb-4">Product Details</h2>
                <hr className="mx-auto w-1/5" />
                <hr className="mx-auto w-1/5 pb-20" />
            </div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">

                    <img src={image} className="max-w-sm rounded-lg " />

                    <div className="lg:ml-10 space-y-4 lg:flex items-center">
                        <div className="pt-6">
                            <h2 className="card-title mx-auto text-3xl md:text-5xl font-fontTitle pb-8">{name}</h2>
                            <p>Brand: {brand}</p>
                            <p>Type: {type}</p>
                            <p>Price: {price}৳</p>
                            <p>Ratings: {ratings} out of 5</p>
                            <p className="py-6">{description}</p>
                        </div>
                        <div>
                            <button onClick={handleAddToCart} className="btn btn-outline btn-wide text-[#808080]">Add to cart</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default BrandItemDetails;