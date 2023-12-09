/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {

    const { name, logo } = brand;

    return (
        <Link to={`/products/${name}`}>
            <div className="card card-compact border shadow-xl mb-8 w-11/12 lg:w-full mx-auto p-4">
                <figure className="rounded-lg"><img className='h-60 lg:h-68' src={logo} alt="logo" /></figure>
                <div className="card-body border shadow-lg rounded-lg mt-4">
                    <h2 className="card-title text-center mx-auto font-fontTitle text-xl">{name}</h2>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;