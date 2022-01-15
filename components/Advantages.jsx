import AdvantageBox from "./AdvantageBox"

const Advantages = () => {
	return (
		<section className="grid grid-rows-[auto,1fr] text-center gap-20 lg:gap-32 px-20 xl:my-72">
			<h1 className="text-xl md:text-2xl font-bold tracking-wide">FEATURES OF ONLINE LIBRARY SYSTEM</h1>
			<div className="grid grid-rows-[auto,1fr,auto] gap-32 xl:grid-cols-[auto,1fr,auto] xl:gap-0 justify-center items-center">
				<div className="flex flex-col gap-8">
					<AdvantageBox
						title="Easy Access"
						paragraph="You can easily access our website online with no hassle."
						color="bg-orange-400"
					/>

					<AdvantageBox
						title="Borrow Books"
						paragraph="You can search and borrow of your preffered book in our system."
						color="bg-cyan-400"
					/>
				</div>

				<div>
					<img src="laptop.png" alt="laptop" />
				</div>

				<div className="flex flex-col gap-8">
					<AdvantageBox
						title="Book Management"
						paragraph="You can easily add and delete a book to the records. "
						color="bg-pink-400"
					/>

					<AdvantageBox
						title="See History"
						paragraph="You can view your information and keep tracks at your transaction records"
						color="bg-yellow-300"
					/>
				</div>
			</div>
		</section>
	)
}

export default Advantages
