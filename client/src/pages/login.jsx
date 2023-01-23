import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApiCall from '../helpers/apicall';
import { setUser } from '../redux/reducer';

function LoginPage() {
	const navigate = useNavigate(),
		dispatch = useDispatch(),
		userInfo = useSelector((state) => state.user);

	const googleLogin = useGoogleLogin({
		onSuccess: async (res) => {
			try {
				const data = await ApiCall('post', '/login', { googleToken: res.access_token });

				if (!data) return;

				dispatch(setUser(data));
				navigate('/');
				//
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<div className="container-fluid d-flex bg-dark text-white vh-100 overflow-100 pb-5">
			<div
				style={{ maxWidth: 400 }}
				className="m-auto bg-dark-tint d-flex flex-column align-items-center py-5  px-4 rounded-4"
			>
				<img src="/signin.svg" alt="" className="w-100 mb-4" />
				<h3>Stay Connected With Other</h3>
				<p className="text-center mb-5 text-secondary">
					if you don't have an account, the server will create a new account automatically. Read more about{' '}
					<a href="" className="link link-primary">
						Our Policy
					</a>
				</p>

				<div onClick={(e) => googleLogin()} className="d-flex gap-3 bg-white ps-3 rounded-2 overflow-hidden">
					<img width={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="" />

					<button className="btn btn-primary py-2 rounded-0">
						<h6 className="m-0 ">Continue with Google</h6>
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
