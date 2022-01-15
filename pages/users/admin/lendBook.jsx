import AdminSideBar from "../../../components/navbars/AdminSideBar"
import Input from "../../../components/form/Input"
import { useState } from "react"
import { MenuAlt1Icon } from '@heroicons/react/solid'

const LendBook = () => {

	const [firstNameInput, setFirstNameInput] = useState('')
	const [lastNameInput, setLastNameInput] = useState('')
	const [idInput, setIdInput] = useState('')
	const [itemNameInput, setItemNameInput] = useState('')
	const [itemCodeInput, setItemCodeInput] = useState('')
	const [returnInput, setReturnInput] = useState('')
	const [lendInput, setLendInput] = useState('')

	const [firstNameError, setFirstNameError] = useState(false)
	const [lastNameError, setLastNameError] = useState(false)
	const [itemNameError, setItemNameError] = useState(false)
	const [idError, setIdError] = useState(false)
	const [itemCodeError, setItemCodeError] = useState(false)
	const [returnError, setReturnError] = useState(false)
	const [lendError, setLendError] = useState(false)

	const handleFirstNameInput = (e) => {
		setFirstNameInput(e.target.value)
	}

	const handleLastNameInput = (e) => {
		setLastNameInput(e.target.value)
	}

	const handleIdInput = (e) => {
		setIdInput(e.target.value)
	}

	const handleitemNameInput = (e) => {
		setItemNameInput(e.target.value)
	}

	const handleItemCode = (e) => {
		setItemCodeInput(e.target.value)
	}

	const handleReturnInput = (e) => {
		setReturnInput(e.target.value)
	}

	const handleLendInput = (e) => {
		setLendInput(e.target.value)
	}


	const handleErrors = () => {
		setFirstNameError(!firstNameInput)
		setLastNameError(!lastNameInput)
		setIdError(!idInput)
		setIdError(!idInput)
		setItemNameError(!itemNameInput)
		setItemCodeError(!itemCodeInput)
		setReturnError(!returnInput)
		setLendError(!lendInput)
	}

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
				<h1 className="font-semibold mr-auto">LEND BOOK</h1>

				<div className="flex flex-col gap-6">
					<Input
						title="First Name"
						type='text'
						value={firstNameInput}
						functionName={handleFirstNameInput}
						error={firstNameError}
					/>
					<Input
						title="Last Name"
						type='text'
						value={lastNameInput}
						functionName={handleLastNameInput}
						error={lastNameError}
					/>
					<Input
						title="Student ID"
						type='text'
						value={idInput}
						functionName={handleIdInput}
						error={idError}
					/>
					<Input
						title="Item Name"
						type='text'
						value={itemNameInput}
						functionName={handleitemNameInput}
						error={itemNameError}
					/>
					<Input
						title="Item Code"
						type='text'
						value={itemCodeInput}
						functionName={handleItemCode}
						error={itemCodeError}
					/>
					<Input
						title="Lend Date"
						placeholder={'Date / Month / Year'}
						type='text'
						value={lendInput}
						functionName={handleLendInput}
						error={lendError}
					/>
					<Input
						title="Return Date"
						placeholder={'Date / Month / Year'}
						type='text'
						value={returnInput}
						functionName={handleReturnInput}
						error={returnError}
					/>
				</div>

				<div>
					<button
						onClick={handleErrors}
						className="bg-gradient-to-b from-blue-300 to-blue-600 text-white py-4 px-8 text-xs tracking-wider rounded-sm">LEND BOOK</button>
				</div>
			</div>
		</div>
	)
}

export default LendBook 
