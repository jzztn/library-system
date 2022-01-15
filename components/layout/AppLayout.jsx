const AppLayout = ({ children }) => {
	return (
		<div className='min-h-screen grid grid-flow-row'>
			<main>
				{children}
			</main>
		</div>
	);
}
export default AppLayout;