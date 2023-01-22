import { Component } from 'react';
import SidebarHeader from '../components/sidebar/header';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../redux/reducer';

function ChatsPage() {
	const chatId = useSelector((state) => state.chat),
		dispatch = useDispatch();

	const dummy = [
		{
			name: 'dazveloper',
			date: 'today',
			latestMessage: 'Lorem ipsum dolor sit amet, consectetur',
		},
		{
			name: 'diaz',
			date: 'yesterday',
			latestMessage: 'Lorem ipsum dolor sit amet, consectetur, adipisicing elit.',
		},
		{
			name: 'zaid',
			date: '20/01/23',
			latestMessage: 'Lorem ipsum dolor sit amet, consectetur',
		},
	];
	return (
		<>
			<SidebarHeader title="chats"></SidebarHeader>

			<h6 className="m-0 px-3 text-secondary mb-3 small">24 unread messages</h6>

			<table className="table table-fixed table-hover table-dark w-100">
				<tbody>
					{dummy.map((dum, i) => {
						return (
							<tr
								key={i}
								className={`${chatId.active == i ? 'active' : ''}`}
								data-bs-toggle="offcanvas"
								data-bs-target="#main-chat"
								onClick={(e) => dispatch(setActive(i))}
							>
								<th scope="row" className="ps-3 py-3">
									<figure className="m-0 bg-dark rounded-circle" style={{ width: '3rem', height: '3rem' }}></figure>
								</th>
								<td className="pe-3 py-3">
									<div className="d-flex">
										<h5 className="mb-1 text-capitalize">{dum.name}</h5>
										<span className="small text-secondary ms-auto">{dum.date}</span>
									</div>
									<div className="d-flex align-items-start">
										<p className="m-0 text-secondary text-start w-100">{dum.latestMessage}</p>
										<span className="badge bg-primary ms-auto rounded-pill pt-2">1</span>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default ChatsPage;
