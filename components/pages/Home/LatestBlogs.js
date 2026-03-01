import React from 'react';

const blogData = [
    {
        image: "/images/blog-1.jpg",
        category: "Dead Stock Blog",
        title: "Selling non-moving inventory in the UAE: Quick Returns Guide",
        date: "11/12/2025, 11:40"
    },
    {
        image: "/images/blog-2.jpg",
        category: "Dead Stock Blog",
        title: "Free Up Warehouse Space in UAE | Fast Dead Stock Solutions",
        date: "15/12/2025, 10:23"
    },
    {
        image: "/images/blog-3.jpg",
        category: "Dead Stock Blog",
        title: "Smart Clearance: Cash for Dead Stocks | Trusted Buyer UAE",
        date: "21/12/2025, 02:32"
    }
];

const LatestBlogs = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 lg:px-16 font-sans">
            <div className="w-full mx-auto">
                <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0a0a0a] mb-14 tracking-tight">
                    Our Latest Blogs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((blog, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/60"
                        >
                            <div className="w-full h-[240px] bg-gray-100 relative">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col flex-grow p-6 md:p-8">
                                <span className="text-[#8c8c8c] font-bold text-[15px] mb-4">
                                    {blog.category}
                                </span>

                                <h3 className="text-[22px] font-semibold text-[#1a1a1a] leading-snug mb-8 flex-grow">
                                    {blog.title}
                                </h3>

                                <div className="flex justify-between items-center mt-auto w-full">
                                    <span className="text-[#8CC63F] font-bold text-[15px] cursor-pointer hover:text-[#7ab036] transition-colors">
                                        Read More
                                    </span>
                                    <span className="text-[#999999] font-medium text-[14px]">
                                        Published on : {blog.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16 md:mt-20">
                    <button className="border border-[#8CC63F] text-[#8CC63F] px-10 py-3 text-[14px] font-semibold rounded hover:bg-[#8CC63F] hover:text-white transition-all duration-300 uppercase tracking-widest cursor-pointer">
                        VIEW ALL
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;