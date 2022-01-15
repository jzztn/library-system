import Input from "../../../components/form/Input"
import StudentSideBar from "../../../components/navbars/StudentSideBar"
import { useState } from "react"
import { MenuAlt1Icon } from '@heroicons/react/solid'

const Request = () => {

	const [firstNameInput, setFirstNameInput] = useState('')
	const [lastNameInput, setLastNameInput] = useState('')
	const [idInput, setIdInput] = useState('')
	const [itemNameInput, setItemNameInput] = useState('')
	const [itemCodeInput, setItemCodeInput] = useState('')
	const [collectionInput, setCollectionInput] = useState('')
	const [requestInput, setRequestInput] = useState('')

	const [firstNameError, setFirstNameError] = useState(false)
	const [lastNameError, setLastNameError] = useState(false)
	const [itemNameError, setItemNameError] = useState(false)
	const [idError, setIdError] = useState(false)
	const [itemCodeError, setItemCodeError] = useState(false)
	const [collectionError, setCollectionError] = useState(false)
	const [requestError, setRequestError] = useState(false)

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

	const handleCollectionInput = (e) => {
		setCollectionInput(e.target.value)
	}

	const handleRequestInput = (e) => {
		setRequestInput(e.target.value)
	}


	const handleErrors = () => {
		setFirstNameError(!firstNameInput)
		setLastNameError(!lastNameInput)
		setIdError(!idInput)
		setIdError(!idInput)
		setItemNameError(!itemNameInput)
		setItemCodeError(!itemCodeInput)
		setCollectionError(!collectionInput)
		setRequestError(!requestInput)
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
					<StudentSideBar
						click={handleSideBar} />
				</div>
			</div>

			<div className="grid grid-rows-[auto,1fr,auto] gap-10 px-10 py-6">
				<h1 className="font-semibold mr-auto">REQUEST BOOK</h1>

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
						title="Collection Date"
						placeholder={'Date / Month / Year'}
						type='text'
						value={collectionInput}
						functionName={handleCollectionInput}
						error={collectionError}
					/>
					<Input
						title="Request Date"
						placeholder={'Date / Month / Year'}
						type='text'
						value={requestInput}
						functionName={handleRequestInput}
						error={requestError}
					/>
				</div>

				<div>
					<button
						onClick={handleErrors}
						className="bg-gradient-to-b from-blue-300 to-blue-600 text-white py-4 px-8 text-xs tracking-wider rounded-sm">REQUEST BOOK</button>
				</div>

			</div>
		</div>
	)
}

export default Request
