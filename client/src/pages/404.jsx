function Page404() {
	return (
		<div className="container-fluid d-flex bg-dark text-white vh-100 overflow-100 pb-5">
			<div className="m-auto d-flex flex-column gap-3 align-items-center pb-5">
				<img src="/404.svg" alt="" className="w-100" style={{ maxWidth: 400 }} />
				<h4 className="text-center">There's nothing to see here</h4>
				<a href="/" className="btn btn-primary py-1 px-4 d-inline-flex align-items-center gap-2">
					<i className="ri-arrow-left-line fs-4"></i>
					<h6 className="m-0 pt-1">GO BACK!</h6>
				</a>
			</div>
		</div>
	);
}

export default Page404;
