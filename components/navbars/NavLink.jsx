import Link from "next/link"

const NavLink = ({ link, name }) => {
	return (
		<Link href={link}>
			<div className="text-md text-white tracking-wider cursor-pointer hover:text-black transition-colors duration-500">
				{name}
			</div>
		</Link>
	)
}

export default NavLink
