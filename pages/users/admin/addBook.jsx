import AdminSideBar from "../../../components/navbars/AdminSideBar"
import Input from "../../../components/form/Input"
import { useState } from "react"
import { MenuAlt1Icon } from '@heroicons/react/solid'

const AddBook = () => {

	const [nameInput, setNameInput] = useState('')
	const [codeInput, setCodeInput] = useState('')
	const [categoryInput, setCategoryInput] = useState('')
	const [ISBNInput, setISBNInput] = useState('')
	const [quantityInput, setQuantityInput] = useState('')

	const [nameError, setNameError] = useState(false)
	const [codeError, setCodeError] = useState(false)
	const [categoryError, setCategoryError] = useState(false)
	const [ISBNError, setISBNError] = useState(false)
	const [quantityError, setQuantityError] = useState(false)


	const handleNameInput = (e) => {
		setNameInput(e.target.value)
	}

	const handleCodeInput = (e) => {
		setCodeInput(e.target.value)
	}

	const handleCategoryInput = (e) => {
		setCategoryInput(e.target.value)
	}

	const handleISBNInput = (e) => {
		setISBNInput(e.target.value)
	}

	const handleQuantityInput = (e) => {
		setQuantityInput(e.target.value)
	}

	const handleErrors = () => {
		setNameError(!nameInput)
		setCodeError(!codeInput)
		setCategoryError(!categoryInput)
		setISBNError(!ISBNInput)
		setQuantityError(!quantityInput)
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
				<h1 className="font-semibold mr-auto">ADD NEW BOOK</h1>

				<div className="flex flex-col gap-6">
					<Input
						title="Item Name"
						type='text'
						value={nameInput}
						functionName={handleNameInput}
						error={nameError}
					/>
					<Input
						title="Item Code"
						type='text'
						value={codeInput}
						functionName={handleCodeInput}
						error={codeError}
					/>
					<Input
						title="Category"
						type='text'
						value={categoryInput}
						functionName={handleCategoryInput}
						error={categoryError}
					/>
					<Input
						title="ISBN"
						type='text'
						value={ISBNInput}
						functionName={handleISBNInput}
						error={ISBNError}
					/>
					<Input
						title="Quantity"
						type='text'
						value={quantityInput}
						functionName={handleQuantityInput}
						error={quantityError}
					/>
				</div>

				<div>
					<button
						onClick={handleErrors}
						className="bg-gradient-to-b from-blue-300 to-blue-600 text-white py-4 px-8 text-xs tracking-wider rounded-sm">
						ADD BOOK
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddBook
