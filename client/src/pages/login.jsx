import { GoogleLogin } from '@react-oauth/google';
import ApiCall from '../helpers/apicall';

function LoginPage() {
	async function googleLogin(credentialResponse) {
		const credential = credentialResponse.credential;

		const data = await ApiCall('post', '/login', { googleToken: credential });

		console.log(data);
	}

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

				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse);
						googleLogin(credentialResponse);
					}}
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			</div>
		</div>
	);
}

export default LoginPage;
