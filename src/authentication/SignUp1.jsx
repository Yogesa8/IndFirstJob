import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">

                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-300 to-blue-600 shadow-lg 
                    transform -skew-y-3 sm:skew-y-0 sm:-rotate-3 rounded-3xl">
                </div>

                {/* Card */}
                <div className="relative bg-white shadow-lg rounded-3xl 
                    px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-16">

                    <div className="max-w-md mx-auto">
                        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-8">
                            Sign Up
                        </h1>

                        <div className="space-y-6 text-gray-700">

                            {/* First + Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="fname"
                                        type="text"
                                        placeholder="First Name"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                           focus:outline-none focus:border-blue-500 placeholder-transparent"
                                    />
                                    <label
                                        htmlFor="fname"
                                        className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                           peer-placeholder-shown:top-2
                           peer-placeholder-shown:text-base
                           peer-placeholder-shown:text-gray-400
                           peer-focus:-top-3.5
                           peer-focus:text-sm"
                                    >
                                        First Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="lname"
                                        type="text"
                                        placeholder="Last Name"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                           focus:outline-none focus:border-blue-500 placeholder-transparent"
                                    />
                                    <label
                                        htmlFor="lname"
                                        className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                           peer-placeholder-shown:top-2
                           peer-placeholder-shown:text-base
                           peer-placeholder-shown:text-gray-400
                           peer-focus:-top-3.5
                           peer-focus:text-sm"
                                    >
                                        Last Name
                                    </label>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="email"
                                    type="email"
                                    placeholder="Email address"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                         focus:outline-none focus:border-blue-500 placeholder-transparent"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                         peer-placeholder-shown:top-2
                         peer-placeholder-shown:text-base
                         peer-placeholder-shown:text-gray-400
                         peer-focus:-top-3.5
                         peer-focus:text-sm"
                                >
                                    Email Address
                                </label>
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                         focus:outline-none focus:border-blue-500 placeholder-transparent"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                         peer-placeholder-shown:top-2
                         peer-placeholder-shown:text-base
                         peer-placeholder-shown:text-gray-400
                         peer-focus:-top-3.5
                         peer-focus:text-sm"
                                >
                                    Password
                                </label>
                            </div>

                            {/* Re-type Password */}
                            <div className="relative">
                                <input
                                    id="retypepassword"
                                    type="password"
                                    placeholder="Re Password"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
                         focus:outline-none focus:border-blue-500 placeholder-transparent"
                                />
                                <label
                                    htmlFor="retypepassword"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all
                         peer-placeholder-shown:top-2
                         peer-placeholder-shown:text-base
                         peer-placeholder-shown:text-gray-400
                         peer-focus:-top-3.5
                         peer-focus:text-sm"
                                >
                                    Re Password
                                </label>
                            </div>

                            {/* Submit */}
                            <button className="w-full bg-blue-500 text-white py-2 rounded-md 
                             hover:bg-blue-600 transition">
                                Create Account
                            </button>

                            {/* Social login */}
                            <div className="pt-6">
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

export default SignUp