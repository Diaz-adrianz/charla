import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ModalProfile from '../components/modals/profile';
import MainBar from '../components/mainbar';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiCall from '../helpers/apicall';
import { setUser } from '../redux/reducer';

function UserLayout() {
	const location = useLocation(),
		path = location.pathname.split('/')[1],
		dispatch = useDispatch(),
		navigate = useNavigate(),
		userInfo = useSelector((state) => state.user);

	useEffect(() => {
		getUserInfo();
	}, []);

	async function getUserInfo() {
		const data = await ApiCall('get', '/userinfo');

		if (!data.id) {
			dispatch(setUser(0));
			navigate('/login');
			return;
		}

		dispatch(setUser(data.id));
	}

	return (
		<>
			{userInfo.id ? (
				<>
					<ToastContainer
						position="bottom-center"
						theme="colored"
						autoClose={3000}
						pauseOnFocusLoss={false}
						newestOnTop={true}
					/>

					<div className="row container-fluid overflow-hidden vh-100 bg-dark text-white p-0 m-0">
						<ModalProfile />
						<div id="sidebar" className="d-flex h-100 col col-md-6 col-lg-4 p-0">
							<nav className="d-flex flex-column gap-2 p-3 px-1 px-sm-3 align-items-center">
								<NavLink to={'/'} className={`${path == '' ? 'active' : ''} btn btn-link`}>
									<i className={`ri-message-3-line fs-4`}></i>
								</NavLink>
								<NavLink to={'/groups'} className={`${path == 'groups' ? 'active' : ''} btn btn-link`}>
									<i className={`ri-group-line fs-4`}></i>
								</NavLink>
								<NavLink to={'/connections'} className={`${path == 'connections' ? 'active' : ''} btn btn-link`}>
									<i className={`ri-contacts-line fs-4`}></i>
								</NavLink>
								<div className="dropdown mt-auto">
									<button
										className="btn btn-link position-relative"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<i className="ri-notification-line fs-4"></i>
										<span
											className="position-absolute translate-middle badge rounded-pill bg-danger"
											style={{ top: '20%', left: '80%' }}
										>
											2
										</span>
									</button>
									<ul className="dropdown-menu dropdown-menu-dark overflow-auto" style={{ maxHeight: '50vh' }}>
										<li>
											<a className="dropdown-item d-flex gap-2 align-items-center" href="#">
												<i className="ri-contacts-line text-info"></i>
												Chat request from Udin
											</a>
										</li>
										<li>
											<a className="dropdown-item d-flex gap-2 align-items-center" href="#">
												<i className="ri-error-warning-line text-warning"></i>
												You have been warned!
											</a>
										</li>
									</ul>
								</div>
								<button className="btn btn-link">
									<i className="ri-settings-line fs-4"></i>
								</button>
								<hr className="border-secondary border w-50" />
								<figure
									className="m-0 bg-dark-tint rounded-3"
									style={{ width: '2.5rem', height: '2.5rem' }}
									data-bs-toggle="modal"
									data-bs-target="#profile"
								></figure>
							</nav>

							<aside className="bg-dark-tint flex-grow-1 overflow-hidden border-end border-dark border-3">
								<Outlet></Outlet>
							</aside>
						</div>

						<main
							id="main-chat"
							data-bs-backdrop="false"
							className="d-flex flex-column col-md-6 col-lg-8 p-0 offcanvas-md offcanvas-end border-0 shadow-none"
							tabIndex={-1}
						>
							<MainBar></MainBar>
						</main>
					</div>
				</>
			) : (
				<div></div>
			)}
		</>
	);
}

export default UserLayout;
