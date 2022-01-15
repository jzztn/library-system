const Hero = () => {
	return (
		<section className='h-screen bg-mobile-hero-bg bg-cover bg-center lg:bg-desktop-hero-bg flex justify-center text-center items-start lg:justify-start lg:items-center'>
			<div className="flex flex-col gap-10 mt-52 px-4 lg:ml-28 lg:mt-0">
				<div className="flex flex-col gap-1">
					<h1 className='text-[30px] md:text-[42px] text-black font-semibold tracking-wide'>REQUEST YOUR BOOK NOW</h1>
					<p className='text-xs text-center tracking-wider text-typograhpy'>YOU CAN SEARCH, BORROW AND RETURN A BOOK ANYTIME ANYWHERE.</p>
				</div>

				<div className="grid grid-flow-row gap-2">
					<input type="email" placeholder='Email Adddess' className='bg-secondary placeholder-typograhpy placeholder-opacity-25 text-sm p-4 outline-none' />
					<input type="password" placeholder='Password' className='bg-secondary placeholder-typograhpy placeholder-opacity-25 text-sm p-4 outline-none' />
					<button className='mt-6 bg-gray-300 text-md tracking-wider text-md py-4 px-10 cursor-pointer hover:text-white transition-all duration-300 '>LOG IN</button>
				</div>
			</div>

		</section>
	);
}

export default Hero