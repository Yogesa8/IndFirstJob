import { Link } from "react-router-dom"
import { FaGoogle, FaXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
                
                {/* Background gradient card */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3 rounded-3xl"></div>

                {/* Main card */}
                <div className="relative bg-white shadow-lg rounded-3xl p-6 sm:p-10 md:p-12">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                            Login
                        </h1>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent"
                                    placeholder="Email address"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                                    peer-placeholder-shown:top-2
                                    peer-placeholder-shown:text-base
                                    peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5
                                    peer-focus:text-sm
                                    peer-focus:text-gray-600"
                                >
                                    Email Address
                                </label>
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent"
                                    placeholder="Password"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                                    peer-placeholder-shown:top-2
                                    peer-placeholder-shown:text-base
                                    peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5
                                    peer-focus:text-sm
                                    peer-focus:text-gray-600"
                                >
                                    Password
                                </label>
                            </div>

                            {/* Forgot password */}
                            <div className="flex justify-end">
                                <a href="#" className="text-sm text-blue-500 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Submit button */}
                            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                                Login
                            </button>

                            {/* Social login */}
                            <div className="pt-4">
                                <p className="text-center text-sm text-gray-500 mb-4">
                                    Or continue with
                                </p>

                                <div className="flex justify-center gap-4">
                                    <Link className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition">
                                        <FaFacebookSquare />
                                    </Link>

                                    <Link className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition">
                                        <FaGoogle />
                                    </Link>

                                    <Link className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition">
                                        <FaXTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login