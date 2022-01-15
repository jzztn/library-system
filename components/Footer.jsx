import { PhoneIcon, MailIcon } from '@heroicons/react/outline'

const Footer = () => {
	return (
		<div className='bg-secondary flex flex-col gap-6 pt-16 pb-4 justify-center items-center mt-20'>
			<div className='flex gap-4'>
				<img src="facebook.png" alt="facebook icon" className='w-6 h-6 cursor-pointer' />
				<PhoneIcon className='w-6 h-6 cursor-pointer' />
				<MailIcon className='w-6 h-6 cursor-pointer' />
			</div>

			<div className='grid grid-flow-row gap-1 text-center'>
				<h1 className="text-md font-semibold tracking-wide">PHILIPPINE CHRISTIAN UNIVERSITY</h1>
				<h1 className="text-xs">ALL RIGHTS RESERVED 2022</h1>
			</div>

		</div>
	)
}

export default Footer
