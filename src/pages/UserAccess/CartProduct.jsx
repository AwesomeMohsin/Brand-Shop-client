/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CartProduct = ({ cartProduct, cartProducts, setCartProducts }) => {

    const { _id, name, price, brand, image } = cartProduct;

    console.log(cartProduct);



    const handleCartDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                            const remaining = cartProducts.filter(cartItem => cartItem._id !== _id)
                            setCartProducts(remaining);
                        }

                    })

            }
        })
    }
    const handlePurchase = () => {
        toast.success("Purchased successfully")
    }

    return (
        <div className="card bg-base-100 shadow-xl w-11/12 lg:w-full mx-auto flex flex-row items-center p-4 justify-between">
            <div className="flex items-center pl-3">
                <div>
                    <figure><img className="h-36 lg:h-48" src={image} alt="cartItems" /></figure>
                </div>
                <div className="my-auto space-y-2 lg:space-y-6 font-fontTitle md:pl-3">
                    <h2 className="card-title  text-xl lg:text-3xl">{name}</h2>
                    <div className="my-auto gap-4">
                        <h3 className=" lg:text-xl">Brand: <span className="font-semibold">{brand}</span></h3>
                        <h3 className=" lg:text-xl">Price: <span className="font-semibold">{price} ৳</span></h3>


                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <button onClick={handleCartDelete} className="btn btn-sm md:btn-md btn-outline text-red-700  ">Delete</button>
                <button onClick={handlePurchase} className="btn btn-sm md:btn-md btn-outline">Purchase</button>
            </div>


        </div>
    );
};

export default CartProduct;