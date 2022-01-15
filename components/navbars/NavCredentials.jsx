const NavCredentials = ({ lastName, firstName, id }) => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-lg font-semibold tracking-wide cursor-pointer">{lastName}, {firstName}</h1>
			<p className="text-sm font-light tracking-wider cursor-pointer">{id}</p>
		</div>
	)
}

export default NavCredentials
