import AdminSideBar from "../../../components/navbars/AdminSideBar"
import Input from "../../../components/form/Input"
import { useState } from "react"
import { MenuAlt1Icon } from '@heroicons/react/solid'

const AddNewStudent = () => {

	const [firstNameInput, setFirstNameInput] = useState('')
	const [lastNameInput, setLastNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const [confirmPasswordInput, setConfirmPasswordInput] = useState('')
	const [contactInput, setContactInput] = useState('')
	const [idInput, setIdInput] = useState('')
	const [registerInput, setRegisterInput] = useState('')

	const [emailError, setEmailError] = useState(false)
	const [firstNameError, setFirstNameError] = useState(false)
	const [lastNameError, setLastNameError] = useState(false)
	const [contactError, setContactError] = useState(false)
	const [idError, setIdError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [confirmpasswordError, setConfirmPasswordError] = useState(false)
	const [registerError, setRegisterError] = useState(false)

	const handleFirstNameInput = (e) => {
		setFirstNameInput(e.target.value)
	}

	const handleLastNameInput = (e) => {
		setLastNameInput(e.target.value)
	}

	const handleEmailInput = (e) => {
		setEmailInput(e.target.value)
	}

	const handleContactInput = (e) => {
		setContactInput(e.target.value)
	}

	const handleIdInput = (e) => {
		setIdInput(e.target.value)
	}

	const handlePasswordInput = (e) => {
		setPasswordInput(e.target.value)
	}

	const handleConfirmPasswordInput = (e) => {
		setConfirmPasswordInput(e.target.value)
	}

	const handleRegisterInput = (e) => {
		setRegisterInput(e.target.value)
	}

	const handleErrors = () => {
		setEmailError(!emailInput.endsWith('@gmail.com'))
		setFirstNameError(!firstNameInput)
		setLastNameError(!lastNameInput)
		setContactError(!contactInput)
		setIdError(!idInput)
		setPasswordError(!passwordInput)
		setConfirmPasswordError(!confirmPasswordInput)
		setRegisterError(!registerInput)
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
				<h1 className="font-semibold mr-auto">ADD NEW STUDENT</h1>

				<div className="flex flex-col gap-6">
					<Input
						title="First Name"
						value={firstNameInput}
						functionName={handleFirstNameInput}
						error={firstNameError}
						type='text'
					/>
					<Input
						title="Last Name"
						value={lastNameInput}
						functionName={handleLastNameInput}
						error={lastNameError}
					/>
					<Input
						title="Member ID"
						value={idInput}
						functionName={handleIdInput}
						error={idError}
					/>
					<Input
						title="Contact No."
						value={contactInput}
						functionName={handleContactInput}
						error={contactError}
					/>
					<Input
						title="Email Address"
						value={emailInput}
						functionName={handleEmailInput}
						error={emailError}
					/>
					<Input
						title="Password"
						type="password"
						value={passwordInput}
						functionName={handlePasswordInput}
						error={passwordError}
					/>
					<Input
						title="Confirm Password"
						type="password"
						value={confirmPasswordInput}
						functionName={handleConfirmPasswordInput}
						error={confirmpasswordError}
					/>
					<Input
						title="Date of Registration"
						placeholder={'Date / Month / Year'}
						type="text"
						value={registerInput}
						functionName={handleRegisterInput}
						error={registerError}
					/>
				</div>

				<div>
					<button
						onClick={handleErrors}
						className="bg-gradient-to-b from-blue-300 to-blue-600 text-white py-4 px-8 text-xs tracking-wider rounded-sm">
						ADD NEW STUDENT
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddNewStudent
