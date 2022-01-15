const About = () => {
	return (
		<div className="relative grid grid-rows-[auto,1fr,auto] gap-14 justify-center items-center text-center py-64 px-10">
			<h1 className="text-xl font-semibold">WHAT ABOUT ONLINE CLEARANCE SYSTEM?</h1>
			<div className="xl:w-[1000px]">
				<p className="text-typograhpy text-md lg:text-sm font-light leading-relaxed tracking-wide">Our online Library management system provides you to monitor, manage your transaction smoothly in the library. It is use to find books easily, compute fines of the borrowers. Also stored and edit detail information of its users and books in a efficient way with the use of database.</p>
			</div>

			<img src="book.png" alt="book" className="mx-auto" />
			<img src="bg-wave.svg" alt="wave" className="absolute w-full hidden  xl:block xl:bottom-[-200px]" />
		</div>
	)
}

export default About
