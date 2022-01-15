const Row = ({ children }) => {
	return (
		<tr className="cursor-pointer hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-600 hover:text-white hover:border-r-white hover:border-[1px]">
			{children}
		</tr>
	)
}

export default Row
