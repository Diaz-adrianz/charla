import { Component } from 'react';
import SidebarHeader from '../components/sidebar/header';

class ChatsPage extends Component {
	render() {
		return (
			<>
				<SidebarHeader title="chats"></SidebarHeader>

				<h6 className="m-0 px-3 text-secondary mb-3 small">24 unread messages</h6>

				<table className="table table-fixed table-hover table-dark w-100">
					<tbody>
						<tr
							className=""
							data-bs-toggle="offcanvas"
							data-bs-target="#main-chat"
							onClick={(e) => console.log('haha')}
						>
							<th scope="row" className="ps-3 py-3">
								<figure className="m-0 bg-dark rounded-circle" style={{ width: '3rem', height: '3rem' }}></figure>
							</th>
							<td className="pe-3 py-3">
								<div className="d-flex">
									<h5 className="mb-1">Dazveloper</h5>
									<span className="small text-secondary ms-auto">yesterday</span>
								</div>
								<div className="d-flex align-items-start">
									<p className="m-0 text-secondary text-start w-100">Lorem ipsum dolor sit amet, consectetur</p>
									<span className="badge bg-primary ms-auto rounded-pill pt-2">12</span>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row" className="ps-3 py-3">
								<figure className="m-0 bg-dark rounded-circle" style={{ width: '3rem', height: '3rem' }}></figure>
							</th>
							<td className="pe-3 py-3 w-100">
								<div className="d-flex">
									<h5 className="mb-1">Dazveloper</h5>
									<span className="small text-secondary ms-auto">yesterday</span>
								</div>
								<div className="d-flex align-items-start w-100">
									<p className="m-0 text-secondary text-start text-truncate twolines">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quis. Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Ad, quis.
									</p>
									<span className="badge bg-primary ms-auto rounded-pill pt-2">12</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</>
		);
	}
}

export default ChatsPage;
