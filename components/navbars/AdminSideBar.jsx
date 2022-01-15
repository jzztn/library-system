import Link from "next/link"
import NavCredentials from "./NavCredentials"
import NavLink from "./NavLink"
import { XIcon } from '@heroicons/react/solid'

const AdminSideBar = ({ click }) => {
	return (
		<div className="h-screen bg-gradient-to-b from-blue-400 to-blue-700 text-white grid grid-rows-[auto,auto,1fr,auto] text-center w-72 p-6">
			<XIcon className="w-5 h-5 md:opacity-0 hover:text-black transition-colors duration-500 ml-auto mb-10" onClick={click} />

			<NavCredentials
				lastName="User"
				firstName="Admin"
				id="20175896"
			/>

			<div className="flex flex-col gap-10 justify-center">
				<NavLink
					link={'/users/admin/addAdmin'}
					name="Add New Admin"
				/>
				<NavLink
					link={'/users/admin/addStudent'}
					name="Add New Student"
				/>
				<NavLink
					link={'/users/admin/students'}
					name="Students"
				/>
				<NavLink
					link={'/users/admin/books'}
					name="Books"
				/>
				<NavLink
					link={'/users/admin/addBook'}
					name="Add Book"
				/>
				<NavLink
					link={'/users/admin/lendBook'}
					name="Lend Book"
				/>
				<NavLink
					link={'/users/admin/lendedBooks'}
					name="Lended Books"
				/>
				<NavLink
					link={'/users/admin/requests'}
					name="Request Books"
				/>
				<NavLink
					link={'/users/admin/returnBook'}
					name="Return Book"
				/>
			</div>

			<Link href={'/'}>
				<h1 className="text-white tracking-wide cursor-pointer hover:text-black transition-colors duration-500">LOGOUT</h1>
			</Link>
		</div>
	)
}

export default AdminSideBar
