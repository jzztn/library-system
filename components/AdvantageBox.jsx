const AdvantageBox = ({ title, paragraph, color }) => {
	return (
		<div className='group relative flex flex-col gap-3 justify-center items-center text-center'>
			<div className={`${color} h-1 w-0 absolute top-0 group-hover:w-full transition-all duration-700`}></div>
			<h1 className='text-md text-typograhpy font-semibold tracking-wide lg:text-xl mt-6'>{title}</h1>

			<div className="w-72">
				<p className='text-sm text-typograhpy font-light lg:text-md'>{paragraph}</p>
			</div>
		</div>
	)
}

export default AdvantageBox
