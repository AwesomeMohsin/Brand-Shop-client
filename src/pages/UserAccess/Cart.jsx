import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import CartProduct from "./CartProduct";

const Cart = () => {

    const { user } = useContext(AuthContext)
    const email = user.email;
    // eslint-disable-next-line no-unused-vars
    const cartItems = useLoaderData()

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        fetch(`https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/cart/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    console.log('nothing here');
                    <h2>Nothing here</h2>
                }
                else {
                    setCartProducts(data);
                }
            })
    }, [email])


    return (
        <div className="py-20 mx-auto md:container">
            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold font-fontTitle pb-4">My Cart</h2>
            <hr className="mx-auto w-1/5" />
            <hr className="mx-auto w-1/5 pb-20" />

            <div className="grid grid-cols-1
            lg:grid-cols-2 gap-4 py-10">
                {
                    cartProducts.map((cartProduct, idx) => <CartProduct
                        key={idx}
                        cartProduct={cartProduct}
                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}
                    ></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;