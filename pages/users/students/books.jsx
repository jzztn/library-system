import StudentSideBar from "../../../components/navbars/StudentSideBar"
import Search from "../../../components/search/Search"
import Cell from "../../../components/table/Cell"
import Header from "../../../components/table/Header"
import Row from "../../../components/table/Row"
import { MenuAlt1Icon } from '@heroicons/react/solid'
import { useState } from "react"

const Books = () => {
	const [sideBar, setSideBar] = useState(false)

	const handleSideBar = () => {
		setSideBar(!sideBar)
	}

	return (
		<div className="h-screen grid grid-cols-[auto,1fr]">
			<div>
				<MenuAlt1Icon className={`md:hidden w-7 h-7 text-blue-500 ml-4 my-7 cursor-pointer hover:text-blue-700 ${sideBar ? 'hidden' : 'block'}`} onClick={handleSideBar} />

				<div className={sideBar ? 'block md:block' : 'hidden md:block'}>
					<StudentSideBar
						click={handleSideBar} />
				</div>
			</div>

			<div className="grid grid-rows-[auto,1fr,auto] gap-10 px-10 py-7">
				<div className="flex items-center">
					<h1 className="font-semibold mr-auto">ALL BOOKS</h1>
					<Search />
				</div>

				<div>
					<table>
						<thead>
							<tr className="bg-gradient-to-b from-blue-300 to-blue-600 text-white">
								<Header
									title="BOOK NAME"
								/>
								<Header
									title="BOOK CODE"
								/>
								<Header
									title="ISBN"
								/>
								<Header
									title="CATEGORY"
								/>
								<Header
									title="QUANTITY"
								/>
							</tr>
						</thead>

						<tbody>
							<Row>
								<Cell
									value="JAVASCRIPT BOOK"
								/>
								<Cell
									value="123456789"
								/>
								<Cell
									value="1234567891234"
								/>
								<Cell
									value="TECHNOLOGY"
								/>
								<Cell
									value="30"
								/>
							</Row>

							<Row>
								<Cell
									value="JAVASCRIPT BOOK"
								/>
								<Cell
									value="123456789"
								/>
								<Cell
									value="1234567891234"
								/>
								<Cell
									value="TECHNOLOGY"
								/>
								<Cell
									value="30"
								/>
							</Row>
						</tbody>
					</table>
				</div>

				<p className="font-light">TOTAL BOOKS: <span className="font-semibold">300</span></p>
			</div>
		</div>
	)
}

export default Books
