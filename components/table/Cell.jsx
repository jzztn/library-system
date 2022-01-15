const Cell = ({ value }) => {
	return (
		<td className="py-3 px-20 text-xs tracking-wider border-r-gray-300 border-[1px] group-hover:border-r-white hover:border-[1px]">
			{value}
		</td>
	)
}

export default Cell
