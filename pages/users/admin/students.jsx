import Link from "next/link"
import AdminSideBar from "../../../components/navbars/AdminSideBar"
import Search from "../../../components/search/Search"
import Cell from "../../../components/table/Cell"
import Header from "../../../components/table/Header"
import Row from "../../../components/table/Row"
import { MenuAlt1Icon } from '@heroicons/react/solid'
import { useState } from "react"

const Students = () => {

	const [sideBar, setSideBar] = useState(false)

	const handleSideBar = () => {
		setSideBar(!sideBar)
	}

	return (
		<div className="h-screen grid grid-cols-[auto,1fr]">
			<div>
				<MenuAlt1Icon className={`md:hidden w-7 h-7 text-blue-500 ml-4 my-7 cursor-pointer hover:text-blue-700 ${sideBar ? 'hidden' : 'block'}`} onClick={handleSideBar} />

				<div className={sideBar ? 'block md:block' : 'hidden md:block'}>
					<AdminSideBar
						click={handleSideBar} />
				</div>
			</div>

			<div className="grid grid-rows-[auto,1fr,auto] gap-10 px-10 py-7">
				<div className="flex items-center">
					<h1 className="font-semibold mr-auto">ALL STUDENTS</h1>
					<Search />
				</div>

				<div>
					<table>
						<thead>
							<tr className="bg-gradient-to-b from-blue-300 to-blue-600 text-white">
								<Header
									title="LAST NAME"
								/>
								<Header
									title="FIRST NAME"
								/>
								<Header
									title="STUDENT ID"
								/>
								<Header
									title="EMAIL ADDRESS"
								/>
								<Header
									title="CONTACT NO."
								/>
								<Header
									title="Registration Date"
									placeholder={'Date / Month / Year'}
								/>
							</tr>
						</thead>

						<tbody>
							<Row>
								<Cell
									value="IPSUM"
								/>
								<Cell
									value="LOREM"
								/>
								<Cell
									value="20154569"
								/>
								<Cell
									value="loremipsum@gmail.com"
								/>
								<Cell
									value="09194567890"
								/>
								<Cell
									value="10-20-22"
								/>
							</Row>


							<Row>
								<Cell
									value="IPSUM"
								/>
								<Cell
									value="LOREM"
								/>
								<Cell
									value="20154569"
								/>
								<Cell
									value="loremipsum@gmail.com"
								/>
								<Cell
									value="09194567890"
								/>
								<Cell
									value="10-20-22"
								/>
							</Row>
						</tbody>
					</table>
				</div>

				<p className="font-light">TOTAL STUDENTS: <span className="font-semibold">300</span></p>
			</div>
		</div>
	)
}

export default Students
