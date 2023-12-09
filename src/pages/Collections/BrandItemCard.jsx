/* eslint-disable react/prop-types */
import { FaStar, FaRegStar } from 'react-icons/fa';
import Rating from "react-rating";
import { Link } from "react-router-dom";

const BrandItemCard = ({ loadedBrandItem }) => {

    const { _id, name, brand, price, type, ratings, image } = loadedBrandItem;



    return (
        <div className="card bg-base-100 shadow-2xl py-8">

            <figure><img className='h-60' src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto text-2xl font-fontTitle">{name}</h2>
                <div className="flex mx-auto gap-4">
                    <h3>Brand: <span className="font-semibold">{brand}</span></h3>
                    <h3>Price: <span className="font-semibold">{price} ৳</span></h3>
                </div>
                <div className="flex md:flex-col xl:flex-row mx-auto gap-4  my-auto items-center">
                    <h3>Type: <span className="font-semibold">{type}</span></h3>
                    <h3 >Rating: <Rating className=' items-center'
                        initialRating={ratings}
                        readonly
                        fullSymbol={<FaStar></FaStar>}
                        emptySymbol={<FaRegStar></FaRegStar>}
                    /></h3>

                </div>
                {/* {
                    description.length < 40 ? <p className="text-center">{description}</p>
                        : <p className="text-center">{description.slice(0, 40)} <Link to={`/products/${brand}/${_id}`} className="text-blue-500 font-semibold">Read more..</Link> </p>
                } */}

                <div className="card-actions justify-around my-auto mx-auto gap-6 pt-4">
                    <div className='flex gap-2'>
                        <Link to={`/products/update/${_id}`}><button className="btn btn-outline">Update</button></Link>
                        <Link to={`/products/${brand}/${_id}`}><button className="btn btn-outline">See Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandItemCard;