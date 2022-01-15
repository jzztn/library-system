const Search = () => {
	return (
		<div className="grid grid-flow-col items-center gap-2">
			<input
				placeholder="Search..."
				className="border-black border-[1px] outline-none pl-2 py-1 rounded-sm placeholder:text-opacity-30 placeholder:text-sm"
			/>
			<div>
				<img src="/search.png" alt="search icon" className="h-5 w-5" />
			</div>
		</div>
	)
}

export default Search
