import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import searchIcon from '../../assets/images/search-icon.png';
import { AuthContext } from '../../auth';

function Header() {
	const location = useLocation().pathname;
	const [myCartClass, setMyCartClass] = useState('');
	const [myClass, setMyClass] = useState('');
	const auth = useContext(AuthContext);
	const [profileLink, setProfileLink] = useState('');

	useEffect(() => {
		if (location.startsWith('/profile')) {
			setMyClass(' in-page');
		} else if (location.startsWith('/cart')) {
			setMyCartClass(' in-page');
		}
		if (auth.isAuth) {
			auth.userdata.user_role === 'seller'
				? setProfileLink('/profile-seller')
				: setProfileLink('/profile-buyer');
		} else {
			setProfileLink('/login')
		}
	}, []);
	return (
		<div className="header">
			<Link to="/">
				<h1 className="header__title">
					Оптом<i className="tkani">Ткaни</i>
					<span className="header__title-slogan">Все продавцы ткани на одном сайте</span>
				</h1>
			</Link>

			<div className="header__search">
				<img className="header__search-icon" src={searchIcon} alt="" />
				<input className="header__search-input" type="text" placeholder="поиск по тканям" />
			</div>

			<div className="header__btns-block">
				{pickTheButton()}
				<Link to={profileLink}>
					<button className={'profile ' + myClass}>
						{/* Иконка пользователя в кнопке */}
						<div className="person-icon">
							<div className="person-icon-body"></div>
							<div className="person-icon-head"></div>
						</div>
						{/* Конец иконки пользователя в кнопке */}
						Профиль
					</button>
				</Link>
			</div>
		</div>
	);

	function pickTheButton() {
		if (auth.isAuth && auth.userdata.user_role == 'seller') {
			return (
				<Link to="/create">
					<button className="create-new">
						{/* Иконка плюсика для кнопки */}
						<div className="create-new-icon"></div>
						Добавить ткань
					</button>
				</Link>
			);
		} else {
			return (
				<Link to="/cart">
					<button className={'header-cart-btn ' + myCartClass}>
						<svg
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.0941 0.847332L6.69947 6.50467H15.0115L11.6155 0.847332L12.7621 0.161999L16.5661 6.50467H19.9181C20.4355 6.50467 20.8555 6.92467 20.8555 7.442V8.02733C20.8555 11.9523 19.9416 15.8234 18.1861 19.334C18.1104 19.4855 17.9939 19.6129 17.8497 19.7019C17.7056 19.7909 17.5395 19.8381 17.3701 19.838H4.3408C4.17129 19.8378 4.00519 19.7904 3.86107 19.7012C3.71696 19.6119 3.60052 19.4843 3.5248 19.3327C1.76935 15.8221 0.855437 11.951 0.855469 8.026L0.855469 7.442C0.855469 6.92467 1.27547 6.50467 1.7928 6.50467H5.1448L8.9488 0.161999L10.0941 0.847332Z"
								fill="#BB1FD4"
							/>
						</svg>
						Моя корзина
					</button>
				</Link>
			);
		}
	}
}

export default Header;
