import './nav-mobile.scss';
import main from './main.png';
import cat from './cat.png';
import add from './add.png';
import profile from './profile.png';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth'

function NavMobile() {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation().pathname;

	const [profileLink, setProfileLink] = useState('');

	useEffect(() => {
		if (auth.isAuth) {
			auth.userdata.user_role == 'seller' ? setProfileLink('/profile-seller') : setProfileLink('/profile-buyer');
		} else {
			navigate('/login')
		}
	}, [auth]);
	if (location !== '/registration' && location !=='/login' && !location.startsWith('/product')) {
		return (
			<div className="nav-wrapper">
				<div className="nav">
					<Link to="/">
						<div className="item">
							<img src={main} alt="" />
							<span>Главная</span>
						</div>
					</Link>
					<Link to="/categories">
						<div className="item">
							<img src={cat} alt="" />
							<span>Категории</span>
						</div>
					</Link>
					<Link to="/create">
						<div className="item">
							<img src={add} alt="" />
							<span>Добавить</span>
						</div>
					</Link>
					<Link to={profileLink}>
						<div className="item">
							<img src={profile} alt="" />
							<span>Профиль</span>
						</div>
					</Link>
				</div>
			</div>
		);
	} else { return (null)}
}

export default NavMobile;
