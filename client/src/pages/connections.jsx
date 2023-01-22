import { Component } from 'react';

class ConnectionsPage extends Component {
	render() {
		return (
			<>
				<header className="p-3 d-flex gap-2 align-items-end">
					<h1 className="m-0 pb-5 me-auto">Connections</h1>
					<button className="btn btn-link btn-sm">
						<i className="ri-search-line fs-6"></i>
					</button>
					<div className="dropdown">
						<button className="btn btn-link btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="ri-more-2-line fw-bold fs-6"></i>
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

				<h6 className="m-0 px-3 text-secondary mb-3 small">24 unread messages</h6>

				<table className="table table-hover table-dark w-100">
					<tbody>
						<tr>
							<th scope="row" className="ps-3 py-3">
								<figure className="m-0 bg-dark rounded-circle" style={{ width: '3rem', height: '3rem' }}></figure>
							</th>
							<td className="pe-3 py-3 w-100">
								<div className="d-flex align-items-center">
									<div>
										<h5 className="mb-1">Dazveloper</h5>
										<p className="m-0 text-secondary text-start w-100">Lorem ipsum dolor sit amet, consectetur</p>
									</div>
									<div className="dropdown ms-auto">
										<button
											className="btn btn-link btn-sm"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="ri-more-2-line fw-bold fs-6"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a className="dropdown-item" href="#">
													Start chat
												</a>
											</li>
											<li>
												<a className="dropdown-item text-danger" href="#">
													Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</>
		);
	}
}

export default ConnectionsPage;
