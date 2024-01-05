import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
            console.log(`http://localhost:5000/api/users/${param.id}/verify/${param.token}`)
			try {
				const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;
                console.log(url)
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
			{validUrl ? (
				<div>
					<h1>Email verified successfully</h1>
					<Link to="/signin">
						<button className="btn" style={{ backgroundColor: '#006DCC', padding: '5px', color: 'white'}}>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default EmailVerify;
