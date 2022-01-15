import Link from "next/link"
import NavCredentials from "./NavCredentials"
import NavLink from "./NavLink"
import { XIcon } from '@heroicons/react/solid'


const StudentSideBar = ({ click }) => {
	return (
		<div className="h-screen bg-gradient-to-b from-blue-400 to-blue-700 text-white grid grid-rows-[auto,auto,1fr,auto] text-center w-72 p-6">
			<XIcon className="w-5 h-5 md:opacity-0 hover:text-black transition-colors duration-500 ml-auto mb-10" onClick={click} />

			<NavCredentials
				lastName="Ipsum"
				firstName="Lorem"
				id="20154569"
			/>

			<div className="flex flex-col gap-10 justify-center">
				<NavLink
					link={'/users/students/books'}
					name="Books"
				/>

				<NavLink
					link={'/users/students/history'}
					name="History"
				/>

				<NavLink
					link={'/users/students/request'}
					name="Request Book"
				/>
			</div>

			<Link href={'/'}>
				<h1 className="text-white tracking-wide cursor-pointer hover:text-black transition-colors duration-500">LOGOUT</h1>
			</Link>
		</div>
	)
}

export default StudentSideBar
