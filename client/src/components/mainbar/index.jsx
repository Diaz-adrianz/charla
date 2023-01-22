import { Component } from 'react';
import { useSelector } from 'react-redux';

function MainBar() {
	const chatId = useSelector((state) => state.chat.active);

	const dummy = ['Dazveloper', 'Diaz', 'Zaid'];

	return (
		<>
			{chatId ? (
				<>
					<header className="d-flex gap-2 align-items-center p-3 bg-dark-tint">
						<button
							className="btn btn-link btn-sm py-0 d-md-none"
							type="button"
							data-bs-dismiss="offcanvas"
							data-bs-target="#main-chat"
						>
							<i className="ri-arrow-left-line fs-1"></i>
						</button>
						<figure className="m-0 bg-dark rounded-circle" style={{ width: '3rem', height: '3rem' }}></figure>
						<div>
							<h5 className="m-0">{dummy[chatId]}</h5>
							<span className="text-secondary">
								<span className="badge bg-primary rounded-circle p-1 border border-primary me-1">
									<span className="visually-hidden">1</span>
								</span>
								online
							</span>
						</div>
						<div className="dropdown ms-auto">
							<button className="btn btn-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="ri-more-2-line fw-bold fs-4"></i>
							</button>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										New Group
									</a>
								</li>
							</ul>
						</div>
					</header>

					<div id="msgs" className="bg-dark d-flex gap-3 flex-grow-1 flex-column-reverse p-3 overflow-auto">
						<div className="msg">
							<p className="m-0">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus ab perferendis est
								possimus sunt hic ex tempora aperiam ad.
							</p>
							<span className="small text-secondary">Dazveloper ∘ 10:15 am</span>
						</div>
						<div className="msg end">
							<p className="m-0">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus ab perferendis est
								possimus sunt hic ex tempora aperiam ad.
							</p>
							<span className="small text-secondary">You ∘ 10:15 am</span>
						</div>
						<span className="text-secondary text-center my-4">Today</span>
					</div>

					<div className="bg-dark-tint p-3">
						<form className="d-flex bg-dark p-2 px-3 align-items-center gap-3 rounded-3">
							<textarea
								rows="1"
								data-maxrow="3"
								placeholder="Type message..."
								className="form-control form-control-lg px-0 bg-transparent text-white shadow-none border-0"
							></textarea>
							<div className="border-end border-secondary text-dark">1</div>
							<button className="btn btn-primary py-1 rounded-pill">
								<i className="ri-send-plane-2-line fs-5"></i>
							</button>
						</form>
					</div>
				</>
			) : (
				<div className="m-auto">
					<img src="/emptychat.svg" alt="" className="w-100" style={{ width: '100%', maxWidth: '500px' }} />
					<h6 className="fw-normal text-center">Open a connection to start chat</h6>
				</div>
			)}
		</>
	);
}

export default MainBar;
