const Input = ({ title, placeholder, value, functionName, error, type }) => {
	return (
		<div className="grid grid-cols-[auto,1fr] gap-4 items-center">
			<h1 className="text-sm tracking-wider text-typograhpy">{title}:</h1>

			<div className="relative">
				<input
					className="border-black border-[1px] outline-blue-600 pl-2 py-1 rounded-sm placeholder:opacity-70"
					placeholder={placeholder}
					value={value}
					onChange={functionName}
					type={type}
				/>

				<div>
					<p className={`absolute bottom-[-18px] text-red-500 text-right text-[11px] font-semibold mt-1 ${error ? 'block' : 'hidden'}`}><i>This field cannot be empty or invalid</i></p>
				</div>
			</div>
		</div>
	)
}

export default Input
