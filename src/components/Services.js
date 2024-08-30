import React from 'react';
import img from '../images/fruits.png';
import img2 from '../images/veg.png';
import img3 from '../images/dryFruits.png';
import img4 from '../images/lentils.png';
import img5 from '../images/vaccine.png';
import img6 from '../images/aloevera.png';
import img7 from '../images/granite.png';
import img8 from '../images/human_hair.jpg';

// ... existing imports ...

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-black-900 uppercase font-bold">Our Products</h2>

                        

                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-black'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl text-black">We are committed to providing the freshest and highest quality products to our customers.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Fresh Fruits</h2>
                                    <p className="text-md font-medium">
                                        Discover our wide variety of fresh, juicy fruits sourced from local farms and international suppliers. From crisp apples to exotic mangoes, we have all your favorite fruits available year-round.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Fresh Vegetables</h2>
                                    <p className="text-md font-medium">
                                        Explore our extensive selection of farm-fresh vegetables. From leafy greens to root vegetables, we offer a diverse range of high-quality produce to meet all your culinary needs.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Dry Fruits</h2>
                                    <p className="text-md font-medium">
                                        Indulge in our premium selection of dry fruits. From nutritious almonds to delicious raisins, we offer a wide range of high-quality dry fruits perfect for snacking or cooking.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Spices and Lentils</h2>
                                    <p className="text-md font-medium">
                                        Explore our diverse range of aromatic spices and nutritious lentils. From exotic spice blends to protein-rich lentil varieties, we offer high-quality ingredients to enhance your culinary creations and support a healthy diet.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Animal Vaccines</h2>
                                    <p className="text-md font-medium">
                                        Discover our comprehensive range of animal vaccines. We provide high-quality, effective vaccines to protect livestock and pets, ensuring their health and well-being.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Aloe Vera</h2>
                                    <p className="text-md font-medium">
                                        Experience the natural benefits of our premium aloe vera products. From raw aloe vera to processed goods, we offer a variety of options for health, beauty, and wellness applications.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img7} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Granites and Marbles</h2>
                                    <p className="text-md font-medium">
                                        Explore our exquisite collection of granites and marbles. We offer a wide range of high-quality stones suitable for various architectural and design applications, enhancing the beauty of any space.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img8} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Human Hair</h2>
                                    <p className="text-md font-medium">
                                        Discover our premium selection of human hair products. From extensions to wigs, we offer high-quality, ethically sourced human hair to meet diverse beauty and styling needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="m-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center mb-8 lg:mb-0">
                            <div className='flex items-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current text-black mr-4'>
                                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                                    <path d="M12 6l-7 5v2l7-5 7 5v-2l-7-5zm0 4l-7 5v2l7-5 7 5v-2l-7-5z"/>
                                </svg>
                                <h3 className="text-3xl text-black font-bold">We <span className='font-black'>Source</span></h3>
                            </div>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    With over 10 years of experience in sourcing the finest fruits, vegetables, dry fruits, and hair wigs, we have established strong relationships with trusted suppliers to bring you the best quality products at competitive prices.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='flex items-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current text-black mr-4'>
                                    <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
                                    <circle cx="15.73" cy="8.3" r="2"></circle>
                                    <path d="M5 16c-2 1-2 5-2 5s4 0 5-2l-3-3z"></path>
                                </svg>
                                <h3 className="text-3xl text-black font-bold">We <span className='font-black'>Deliver</span></h3>
                            </div>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We ensure that our products reach you in the freshest condition possible. Our efficient delivery system and careful handling practices guarantee that you receive top-quality fruits, vegetables, dry fruits, and hair wigs right at your doorstep.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// ... existing export ...

export default Services;