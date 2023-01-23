import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import ApiCall from '../../helpers/apicall';
import { withRouter } from '../../helpers/withrouters';
import { setUser } from '../../redux/reducer';

class ModalProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gmail: 'dazveloper@gmail.com',
			gname: 'dazveloper',
			username: 'svdadrianz',
			about: 'Turu dekkkk',
			formReady: false,
		};
	}

	async logout() {
		const res = await ApiCall('delete', '/logout');

		if (!res) return;

		// this.props.dispatch(setUser({ id: data }));
		this.props.navigate('/login');
	}

	inputHandler(obj) {
		this.setState(obj);

		setTimeout(() => {
			let { username, about } = this.state;

			this.setState({
				formReady: (username && about) || false,
			});
		}, 100);
	}

	render() {
		return (
			<div className="modal fade" id="profile" data-bs-keyboard="false" tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content bg-dark">
						<div className="modal-header bg-dark-tint border-0">
							<h1 className="modal-title fs-5 text-white">Your profile</h1>
							<button type="button" onClick={() => this.logout()} className="btn btn-link">
								<i className="ri-logout-box-line text-danger fs-3"></i>
							</button>
						</div>
						<div className="modal-body">
							<figure
								className="m-0 bg-dark-tint rounded-circle mx-auto mt-3 mb-5"
								style={{ width: '10rem', height: '10rem' }}
							></figure>
							<div className="input-group mb-3 bg-transparent">
								<span className="input-group-text bg-dark border-secondary">
									<i className="ri-google-fill text-secondary fs-4"></i>
								</span>

								<div className="form-floating bg-dark-tint">
									<input
										type="email"
										className="disabled form-control bg-transparent text-secondary border-secondary shadow-none"
										id="gmail"
										value={this.state.gmail}
										placeholder="."
										disabled
									/>
									<label htmlFor="gmail" className="text-secondary">
										Gmail
									</label>
								</div>

								<div className="form-floating bg-dark-tint">
									<input
										type="text"
										className="disabled form-control bg-transparent text-secondary border-secondary shadow-none"
										id="gname"
										value={this.state.gname}
										placeholder="."
										disabled
									/>
									<label htmlFor="gname" className="text-secondary">
										Google name
									</label>
								</div>
							</div>
							<div className="input-group mb-3 bg-transparent">
								<span className="input-group-text bg-dark border-secondary">
									<i className="ri-account-circle-line text-secondary fs-4"></i>
								</span>

								<div className="form-floating">
									<input
										type="text"
										className="form-control bg-transparent text-white border-secondary shadow-none"
										id="username"
										value={this.state.username}
										onChange={(e) => this.inputHandler({ username: e.target.value })}
										placeholder="."
									/>
									<label htmlFor="username" className="text-secondary">
										Username
									</label>
								</div>
							</div>
							<div className="input-group mb-3 bg-transparent">
								<span className="input-group-text bg-dark border-secondary">
									<i className="ri-information-line text-secondary fs-4"></i>
								</span>

								<div className="form-floating">
									<input
										type="text"
										id="about"
										value={this.state.about}
										onChange={(e) => this.inputHandler({ about: e.target.value })}
										className="form-control bg-transparent text-white border-secondary shadow-none"
										placeholder="."
									/>
									<label htmlFor="about" className="text-secondary">
										About
									</label>
								</div>
							</div>
							<a className="link-primary" href="#">
								Read about privacy policy
							</a>
						</div>
						<div className="modal-footer border-dark-tint p-1">
							<button
								type="button"
								className="flex-grow-1 btn btn-lg btn-outline-danger rounded-2 border-0"
								data-bs-dismiss="modal"
							>
								<h6 className="m-0 pt-1">Close</h6>
							</button>
							<button
								type="submit"
								className={`${
									this.state.formReady ? ' ' : 'disabled'
								} flex-grow-1 btn btn-lg btn-outline-primary rounded-2 border-0`}
							>
								<h6 className="m-0 pt-1">Save</h6>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(ModalProfile);
