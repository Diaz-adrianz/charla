import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';

export const withRouter = (Component) => {
	const Wrapper = (props) => {
		let location = new URLSearchParams(useLocation().search);

		return (
			<Component
				navigate={useNavigate()}
				params={useParams()}
				dispatch={useDispatch()}
				location={location}
				{...props}
			/>
		);
	};

	return Wrapper;
};
