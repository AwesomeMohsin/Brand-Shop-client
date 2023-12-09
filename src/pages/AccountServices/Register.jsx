import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { user, createUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, photo);


        // password validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters', {
                duration: 5000,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least 1 UPPERCASE character', {
                duration: 5000,
            });
            return;
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error('Password must contain at least 1 special character', {
                duration: 5000,
            });
            return;
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                toast.success('Registration successful')
                
            })
            .catch(error => {
                console.log(error.message);
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error('Account with this email already exist', {
                        duration: 5000,
                    });
                }

            }) 

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="min-h-screen flex justify-center shadow-lg">
            <div className="max-w-screen-xl m-0 sm:m-10 shadow-lg sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-2xl rounded-xl">
                    <div>

                        <img src="/icons/logo.png"
                            className="w-32 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Register
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button onClick={handleGoogleLogin}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-1 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="p-2 rounded-full">
                                        <img className="h-8" src="/icons/google.png" alt="" />
                                    </div>
                                    <span className="ml-2">Continue with Google
                                    </span>
                                </button>

                                {/* <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className=" p-2 rounded-full">
                                        <img className="h-8" src="/icons/github.png" alt="" />
                                    </div>
                                    <span className="ml-4">
                                        Continue with GitHub
                                    </span>
                                </button> */}
                            </div>

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or Register with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleRegister}>
                                <input
                                        className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        name="name"
                                        type="text" placeholder="Full Name"
                                        required
                                    />

                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        name="email"
                                        type="email" placeholder="Email"
                                        required
                                    />
                                    <input
                                        className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        name="password"
                                        type="password" placeholder="Password"
                                        required
                                    />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        name="photo"
                                        type="text" placeholder="Photo URL"
                                        
                                    />

                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Register
                                        </span>
                                    </button>

                                </form>

                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Already have an account? Please <Link className="text-blue-500 font-bold" to='/login'>Login</Link>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1  text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('/images/login-img2.jpg')` }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;