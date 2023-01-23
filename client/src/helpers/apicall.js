import axios from 'axios';

const baseUri = 'http://localhost:5000';
const ApiCall = async (method, uri, objData = {}, toast = true, withFile = false) => {
	let res,
		status,
		msg,
		contentType = withFile ? 'multipart/form-data' : 'application/json';

	try {
		switch (method) {
			case 'get':
				res = await axios.get(baseUri + uri);
				break;
			case 'post':
				res = await axios.post(baseUri + uri, objData, {
					headers: {
						'Content-Type': contentType,
					},
				});
				break;
			case 'post w/ file':
				break;
			case 'put':
				res = await axios.put(baseUri + uri, objData, {
					headers: {
						'Content-Type': contentType,
					},
				});
				break;
			case 'delete':
				res = await axios.delete(baseUri + uri);
				break;
			default:
				res = {
					data: {
						status: 'info',
						msg: 'No http method selected!',
					},
				};
				break;
		}

		status = res.data.status;
		msg = res.data.msg;

		if (toast) console.log(msg);

		return res.data.data || true;

		//
	} catch (error) {
		if (error.response) {
			status = error.response.data.status;
			msg = error.response.data.msg;
		}

		console.log(msg);

		return false;
	}
};

export default ApiCall;
