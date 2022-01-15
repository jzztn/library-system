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
					<h1 className="font-semibold mr-auto">LENDED BOOKS DETAILS</h1>
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
									title="ITEM NAME"
								/>
								<Header
									title="ITEM CODE"
								/>
								<Header
									title="ISBN"
								/>
								<Header
									title="LENDED DATE"
									placeholder={'Date / Month / Year'}
								/>
								<Header
									title="RETURN DATE"
									placeholder={'Date / Month / Year'}
								/>
								<Header
									title="RETURN STATUS"
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
									value="JAVASCRIPT BOOK"
								/>
								<Cell
									value="123456789"
								/>
								<Cell
									value="10-2-22"
								/>
								<Cell
									value="10-23-22"
								/>
								<Cell
									value="Not Returned"
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
									value="JAVASCRIPT BOOK"
								/>
								<Cell
									value="123456789"
								/>
								<Cell
									value="10-2-22"
								/>
								<Cell
									value="10-23-22"
								/>
								<Cell
									value="Not Returned"
								/>
							</Row>
						</tbody>
					</table>
				</div>

				<p className="font-light">TOTAL ROWS: <span className="font-semibold">300</span></p>
			</div>
		</div>
	)
}

export default Students
