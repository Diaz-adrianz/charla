import { toast } from 'react-toastify';

const Toasters = (status, msg) => {
	switch (status) {
		case 'success':
			toast.success(msg);
			break;
		case 'warning':
			toast.warn(msg);
			break;
		case 'danger':
			toast.error(msg);
			break;
		default:
			toast.info(msg);
			break;
	}
};

export default Toasters;
