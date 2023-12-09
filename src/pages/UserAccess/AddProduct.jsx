import toast from "react-hot-toast";

const AddProduct = () => {

    const handleNewProduct = e => {
        e.preventDefault();
        const selectData = new FormData(e.target);
        const form = e.target;

        const name = form.name.value;
        const price = form.price.value;
        const brand = selectData.get("brand");
        const type = selectData.get("type");
        const image = form.image.value;
        const ratings = parseInt(selectData.get("ratings"));
        const description = form.description.value;

        const newProduct = { name, price, brand, type, image, ratings, description }

        console.log(newProduct);

        // send a new product to server
        fetch('https://57-brand-shop-server-a3nlm4630-the-awesome.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Product added to database")
                    window.history.back();
                }
            })



    }


    return (

        <div>

            <div className="w-10/12 mx-auto bg-[#E0E7FF] my-20 rounded-2xl ">

                <h2 className="text-4xl text-center py-10 font-fontTitle font-bold shadow-xl">Add a new Product</h2>


                <form onSubmit={handleNewProduct}>

                    {/* name and price */}
                    <div className="md:flex gap-4 mx-auto justify-evenly px-10 py-10">

                        <div className="form-control md:w-2/5 ">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Name</span>
                            </label>
                            <label className="">
                                <input required
                                    type="text"
                                    name="name"
                                    className="input shadow-xl input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-2/5">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Price</span>
                            </label>
                            <label className="">
                                <input required
                                    type="number"
                                    name="price"
                                    className="input shadow-xl input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* brand and types */}
                    <div className="flex gap-4 mx-auto justify-between md:justify-evenly px-10 pb-10">

                        <div className="form-control  w-2/5">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Brand</span>

                            </label>
                            <select
                                name="brand"

                                className="select shadow-xl select-bordered">
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                                <option value="Google">Google</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Oppo">Oppo</option>
                            </select>
                            <label className="label">

                            </label>
                        </div>

                        <div className="form-control w-2/5">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Type</span>

                            </label>
                            <select className="select shadow-xl select-bordered"
                                name="type"
                            >
                                <option value="Mobile Phone">Mobile Phone</option>
                                <option value="Computer Parts">Computer Parts</option>
                                <option value="Headphone">Headphone</option>
                                <option value="Camera">Camera</option>
                                <option value="Others">Others</option>
                            </select>
                            <label className="label">

                            </label>
                        </div>

                    </div>

                    {/* image and ratings */}
                    <div className="md:flex gap-4  mx-auto justify-evenly px-10 pb-10">

                        <div className="form-control md:w-2/5 ">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Image URL</span>
                            </label>
                            <label className="">
                                <input required
                                    type="text"
                                    name="image"
                                    className="input shadow-xl input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-2/5">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Ratings</span>
                            </label>
                            <select
                                name="ratings"
                                className="select shadow-xl select-bordered">

                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                    </div>

                    {/* description */}
                    <div className="mx-auto px-10 md:px-20 pb-10">
                        <div className="form-control md:w-4/5 mx-auto">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Description</span>
                            </label>
                            <label className="">
                                <textarea required
                                    name="description"
                                    className="textarea shadow-xl textarea-bordered textarea-lg w-full" ></textarea>

                            </label>
                        </div>
                    </div>

                    {/* add product button */}
                    <div className="text-center py-10">
                        <button className="btn btn-outline">Add Product</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddProduct;