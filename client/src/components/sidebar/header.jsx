import { Component } from 'react';

class SidebarHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			q: '',
			searchActive: false,
		};
	}

	render() {
		return (
			<header className="p-3">
				<div className="d-flex gap-3 align-items-end">
					<h1 className="m-0 pb-5 me-auto text-capitalize">{this.props.title}</h1>

					<button className="btn btn-link btn-sm" onClick={(e) => this.setState({ searchActive: true })}>
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
				</div>
				<div id="sidebar-search" className={`mt-3 ${this.state.searchActive ? 'show' : ''}`}>
					<form className="d-flex bg-dark p-2 px-3 align-items-center gap-3 rounded-3">
						<input
							type="text"
							value={this.state.q}
							onChange={(e) => this.setState({ q: e.target.value })}
							placeholder={`Search ${this.props.title}...`}
							className="form-control px-0 bg-transparent text-white shadow-none border-0"
							style={{ position: 'relative', zIndex: 99 }}
						/>
						<button
							type="button"
							className="btn btn-link py-0 px-1 btn-sm"
							onClick={(e) => this.setState({ searchActive: false })}
						>
							<i className="ri-close-line fs-4"></i>
						</button>
					</form>
				</div>
			</header>
		);
	}
}

export default SidebarHeader;
