import React, { useState } from "react";
import firstJobInd from "./assets/firstJobInd.png"
import { Home, Building2, CheckCircle, Settings, FileText, Code2, BarChart3, GraduationCap, Award, Users, TrendingUp, ChevronDown, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

import amazon from "./assets/logoslider/amazon.png";
import bbc from "./assets/logoslider/bbc.png";
import boeing from "./assets/logoslider/boeing.png";
import capgemini from "./assets/logoslider/capgemini.png";
import cisco from "./assets/logoslider/cisco.png";
import dell from "./assets/logoslider/dell.png";
import facebook from "./assets/logoslider/facebook.png";
import hp from "./assets/logoslider/hp.png";
import ibm from "./assets/logoslider/ibm.png";
import google from "./assets/logoslider/google.png";
import microsoft from "./assets/logoslider/microsoft.png";
import mit from "./assets/logoslider/mit.png";
import myntra from "./assets/logoslider/myntra.jpg";
import nasa from "./assets/logoslider/nasa.png";
import penn from "./assets/logoslider/pennsy.png";
import princeton from "./assets/logoslider/princeton.png";
import usArmy from "./assets/logoslider/us.png";
import usNavy from "./assets/logoslider/us_navy.png";
import zomato from "./assets/logoslider/zomato.jpg";
import Marquee from "react-fast-marquee";

const MainPage = () => {
     const [open, setOpen] = useState(false);

     const handleCall = () => {
          window.location.href = "tel:+918198907329";
     };

     const categories = [
          { title: "Remote", icon: Home },
          { title: "MNC", icon: Building2 },
          { title: "Project Management", icon: CheckCircle },
          { title: "Engineering", icon: Settings },
          { title: "Internship", icon: FileText },
          { title: "Software & IT", icon: Code2 },
          { title: "Data Science", icon: BarChart3 },
          { title: "Fresher", icon: GraduationCap },
          { title: "Fortune 500", icon: Award },
          { title: "HR", icon: Users },
          { title: "Marketing", icon: TrendingUp },
     ];

     const faqs = [
          {
               question: "How do I create an account on FirstJobInd World?",
               answer:
                    "You can sign up using your email address or Google account. Once registered, complete your profile to start applying for jobs.",
          },
          {
               question: "Is this platform suitable for freshers?",
               answer:
                    "Yes, FirstJobInd World is specially designed for freshers and early-career professionals with entry-level jobs and internships.",
          },
          {
               question: "How does job matching work?",
               answer:
                    "Jobs are recommended based on your skills, education, and preferences to help you find the most relevant opportunities faster.",
          },
          {
               question: "Can I apply for internships and full-time jobs?",
               answer:
                    "Absolutely. You can apply for internships, full-time, remote, and hybrid roles depending on your interest.",
          },
          {
               question: "Are the companies on this platform verified?",
               answer:
                    "Yes, all companies go through a verification process to ensure a safe and trustworthy job application experience.",
          },
          {
               question: "How can I contact support if I face an issue?",
               answer:
                    "You can reach our support team through the Contact Us page or email us directly for quick assistance.",
          },
     ];

     const logos = [
          amazon, bbc, boeing, capgemini, cisco, dell, facebook, hp, ibm, google, microsoft, mit, myntra, nasa, penn, princeton, usArmy, usNavy, zomato
     ];
     return (
          <div className="bg-gray-50">
               {/* Main sectionjj */}
               <div className="relative bg-gray-50">
                    <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
                         <img
                              className="w-auto h-full"
                              src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
                              alt=""
                         />
                    </div>

                    <header className="relative py-4 md:py-6">
                         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                              <div className="flex items-center justify-between">
                                   <div className="shrink-0">
                                        <Link to="/" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                             <img className="w-auto h-8" src={firstJobInd} alt="" />
                                        </Link>
                                   </div>

                                   <div className="flex lg:hidden">
                                        <div className="drawer">
                                             <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

                                             <div className="drawer-content">
                                                  <label htmlFor="my-drawer-1" className="text-gray-900 cursor-pointer">
                                                       <svg
                                                            className="w-7 h-7"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                       >
                                                            <path
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                                 strokeWidth="1.5"
                                                                 d="M4 6h16M4 12h16M4 18h16"
                                                            />
                                                       </svg>
                                                  </label>
                                             </div>

                                             <div className="drawer-side">
                                                  <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
                                                  <ul className="menu bg-base-200 min-h-full w-80 p-4">
                                                       <li>
                                                            <Link to="/blogs" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                                                 Blogs
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/jobs" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                                                 Job
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/services" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                                                 Services
                                                            </Link>
                                                       </li>
                                                       <div className="divider">OR</div>
                                                       <li>
                                                            <Link role="button" to="/login" className="mb-2 px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white" >
                                                                 Login
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/signup" className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                                                                 role="button"
                                                            >
                                                                 Sign Up
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
                                        <div className="flex items-center space-x-12">
                                             <Link to="/blogs" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                                  Blogs
                                             </Link>

                                             <Link to="/jobs" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                                  Job
                                             </Link>

                                             <Link to="/services" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                                  Services
                                             </Link>
                                        </div>

                                        <div className="w-px h-5 bg-gray-300"></div>
                                        <Link to="/login" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 after:content-none" >
                                             Login
                                        </Link>

                                        <Link to="/signup" className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                                             role="button"
                                        >
                                             Create free account
                                        </Link>

                                   </div>
                              </div>
                         </div>
                    </header>

                    <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
                         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                              <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                                   <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                                        <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                                             <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                                  <span>
                                                       Stop searching. Start
                                                       <span className="text-rotate">
                                                            <span>
                                                                 <span className="bg-green-400 text-green-950 px-2 rounded">
                                                                      Growing
                                                                 </span>
                                                                 <span className="bg-yellow-400 text-yellow-950 px-2 rounded">
                                                                      Achieving
                                                                 </span>
                                                                 <span className="bg-blue-400 text-blue-950 px-2 rounded">
                                                                      Progressing
                                                                 </span>
                                                                 <span className="bg-red-400 text-red-950 px-2 rounded">
                                                                      Winning Big
                                                                 </span>
                                                                 <span className="bg-black text-white px-2 rounded">
                                                                      Your Success
                                                                 </span>
                                                                 <span className="bg-purple-400 text-purple-950 px-2 rounded">
                                                                      Succeeding
                                                                 </span>
                                                            </span>
                                                       </span>
                                                  </span>
                                             </h1>

                                             <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                                                  <div className="flex justify-center shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                                                       <img
                                                            className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                                                            src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
                                                            alt=""
                                                       />
                                                       <img
                                                            className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                                                            src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
                                                            alt=""
                                                       />
                                                       <img
                                                            className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                                                            src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                                                            alt=""
                                                       />
                                                  </div>

                                                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                                                       Join with{" "}
                                                       <span className="font-bold">4600+ Developers</span> and
                                                       start getting feedbacks right now
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                                             <Link to="/"
                                                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                                                  role="button"
                                             >
                                                  Early Access
                                             </Link>

                                             <Link to="/resume"
                                                  className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                                                  role="button"
                                             >
                                                  <svg
                                                       className="w-5 h-5 mr-2"
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2.5"
                                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                       ></path>
                                                  </svg>
                                                  Get Your Resume
                                             </Link>
                                        </div>
                                   </div>

                                   <div className="xl:col-span-3">
                                        <img
                                             className="w-full mx-auto scale-110"
                                             src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png"
                                             alt=""
                                        />
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>

               {/* opportunity section  */}
               <section className="py-4 bg-white sm:py-8 lg:py-10">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                         <div className="max-w-md mx-auto text-center">
                              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Find Opportunities That Match Your Career with AI (AI Powered Job Matching Engine)</h2>
                              <p className="mt-4 text-base font-normal leading-7 text-gray-600">Discover opportunities across industries, roles, and work preferences tailored for your career growth.</p>
                         </div>

                         <div className="max-w-7xl mx-auto px-4 py-12">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                   {categories.map((item, index) => (
                                        <div
                                             key={index}
                                             className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow-md cursor-pointer"
                                        >
                                             <div className="flex items-center gap-4">
                                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                                       <item.icon className="h-5 w-5 text-gray-700" />
                                                  </div>
                                                  <span className="font-medium text-gray-900">
                                                       {item.title}
                                                  </span>
                                             </div>
                                             <span className="text-gray-400">›</span>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* marquee section */}
               {/* company carousal */}
               <section className="py-4 bg-white sm:py-8 lg:py-10">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                         <div className="max-w-md mx-auto text-center">
                              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Trusted by Leading Companies</h2>
                              <p className="mt-4 text-base font-normal leading-7 text-gray-600">Top companies and institutions trust FirstJobInd World to discover fresh talent.</p>
                         </div>

                         <div className="rounded-box max-w-7xl mx-auto px-4 py-12">
                              <div className="w-full overflow-hidden">
                                   <Marquee speed={100} pauseOnHover={true} gradient={true} gradientColor={[0, 0, 0]} autoFill loop={0}>
                                        {logos.map((logo, index) => (
                                             <div key={index} className="mx-10 flex items-center ">
                                                  <img
                                                       src={logo}
                                                       alt="company logo"
                                                       className="h-10 w-auto object-contain"
                                                  />
                                             </div>
                                        ))}
                                   </Marquee>
                              </div>
                         </div>
                    </div>
               </section>

               {/* working */}
               <section className="py-4 bg-white sm:py-8 lg:py-10">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                         <div className="max-w-2xl mx-auto text-center">
                              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Create Your Dream With Us</h2>
                              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Start your professional journey and shape your future with us.</p>
                         </div>

                         <div className="relative mt-12 lg:mt-20">
                              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                   <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                              </div>

                              <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                                   <div>
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                             <span className="text-xl font-semibold text-gray-700"> 1 </span>
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Choose Your Career Path</h3>
                                        <p className="mt-4 text-base text-gray-600">Explore jobs based on your interests, skills, and career goals.</p>
                                   </div>

                                   <div>
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                             <span className="text-xl font-semibold text-gray-700"> 2 </span>
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create Your Resume</h3>
                                        <p className="mt-4 text-base text-gray-600">Bind your dream into your Resume.</p>
                                        <Link to={'/resume'} className="mt-4 btn btn-success btn-sm sm:btn-sm md:btn-md lg:btn-md xl:btn-md">Get Your Resume</Link>
                                   </div>

                                   <div>
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                             <span className="text-xl font-semibold text-gray-700"> 3 </span>
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Apply & Grow Your Career</h3>
                                        <p className="mt-4 text-base text-gray-600">Apply to top companies, attend interviews, and grow your professional journey.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* about say */}
               <section className="py-4 bg-gray-50 sm:py-8 lg:py-10">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                         <div className="flex flex-col items-center">
                              <div className="text-center">
                                   <p className="text-lg font-medium text-gray-600 font-pj">2,157 people have said how good Rareblocks</p>
                                   <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
                              </div>

                              <div className="mt-8 text-center md:mt-16 md:order-3">
                                   <a href="#" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all 2,157 reviews </a>
                              </div>

                              <div className="relative mt-10 md:mt-24 md:order-2">
                                   <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                        <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                                   </div>

                                   <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                                        <div className="flex flex-col overflow-hidden shadow-xl">
                                             <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                                  <div className="flex-1">
                                                       <div className="flex items-center">
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                       </div>

                                                       <blockquote className="flex-1 mt-8">
                                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                                       </blockquote>
                                                  </div>

                                                  <div className="flex items-center mt-8">
                                                       <img className="shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                                       <div className="ml-4">
                                                            <p className="text-base font-bold text-gray-900 font-pj">Leslie Alexander</p>
                                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Freelance React Developer</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="flex flex-col overflow-hidden shadow-xl">
                                             <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                                  <div className="flex-1">
                                                       <div className="flex items-center">
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                       </div>

                                                       <blockquote className="flex-1 mt-8">
                                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                                       </blockquote>
                                                  </div>

                                                  <div className="flex items-center mt-8">
                                                       <img className="shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                                       <div className="ml-4">
                                                            <p className="text-base font-bold text-gray-900 font-pj">Jacob Jones</p>
                                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Digital Marketer</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="flex flex-col overflow-hidden shadow-xl">
                                             <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                                  <div className="flex-1">
                                                       <div className="flex items-center">
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path
                                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                 />
                                                            </svg>
                                                       </div>

                                                       <blockquote className="flex-1 mt-8">
                                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”</p>
                                                       </blockquote>
                                                  </div>

                                                  <div className="flex items-center mt-8">
                                                       <img className="shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                                                       <div className="ml-4">
                                                            <p className="text-base font-bold text-gray-900 font-pj">Jenny Wilson</p>
                                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Graphic Designer</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Faq section */}
               <section className="py-8 bg-gray-50 sm:py-12 lg:py-18">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                         {/* Heading */}
                         <div className="max-w-2xl mx-auto text-center">
                              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                   Frequently Asked Questions
                              </h2>
                              <p className="max-w-xl mx-auto mt-4 text-base text-gray-600">
                                   Everything you need to know about using FirstJobInd World
                              </p>
                         </div>
                         {/* faq */}
                         <div className="max-w-3xl mx-auto space-y-4">
                              {faqs.map((faq, index) => (
                                   <div
                                        key={index}
                                        className="collapse collapse-arrow bg-base-100 border border-base-300"
                                   >
                                        {/* 👉 radio ensures only one open at a time */}
                                        <input
                                             type="radio"
                                             name="faq-accordion"
                                             defaultChecked={index === 0}
                                        />

                                        <div className="collapse-title font-semibold text-lg">
                                             {faq.question}
                                        </div>

                                        <div className="collapse-content text-sm text-gray-600">
                                             <p>{faq.answer}</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* footer */}
               <footer className="bg-white">
                    {/* CTA CARD */}
                    <div className="max-w-7xl mx-auto px-6">
                         <div className="relative overflow-hidden rounded-3xl shadow-xl bg-linear-to-br from-black via-[#1a0c06] to-[#3b1d0e]">
                              {/* subtle diagonal line */}
                              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(255,255,255,0.06)_49%,transparent_51%)]" />

                              <div className="relative px-10 py-16 md:px-16 md:py-20">
                                   <h2 className="text-white text-3xl md:text-4xl font-semibold max-w-lg leading-tight">
                                        Stay ahead without
                                        <br />
                                        the noise.
                                   </h2>

                                   <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md">
                                        <button onClick={handleCall} className="rounded-4xl bg-white px-6 py-3 font-medium text-black hover:bg-gray-200 transition">
                                             Contact Us
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* FOOTER LINKS */}
                    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-6 gap-10">
                         <div className="md:col-span-2">
                              <p className="text-lg font-semibold text-gray-900 max-w-sm">
                                   Designed for those who build
                                   <br />
                                   the future quietly.
                              </p>
                         </div>

                         <FooterColumn
                              title="Platform"
                              links={["How It Works", "Features", "Integrations", "Roadmap"]}
                         />
                         <FooterColumn
                              title="Company"
                              links={["About", "Careers", "Culture", "Press Kit"]}
                         />
                         <FooterColumn
                              title="Resources"
                              links={["Blog", "Docs", "Support", "API Reference"]}
                         />
                         <FooterColumn
                              title="Legal"
                              links={["Privacy Policy", "Terms of Use", "Security"]}
                         />
                    </div>

                    <div className="border-t">
                         <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-2 font-medium">
                                   <img src={firstJobInd} className="h-10" alt="Website logo" />
                              </div>
                              <p>© 2025 FirstJobInd. All rights reserved. | Solving India's Fresher Employment Crisis</p>
                         </div>
                    </div>
               </footer>
          </div>
     )
}

export default MainPage

function FooterColumn({ title, links }) {
     return (
          <div>
               <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
               <ul className="space-y-2 text-gray-600">
                    {links.map((link) => (
                         <li key={link} className="hover:text-black cursor-pointer transition">
                              <Link to={`/${link}`}>
                                   {link}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     );
}