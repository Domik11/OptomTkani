import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import avatar from '../../../assets/images/avatar.png';
import { AuthContext } from '../../../auth';
import './Profile.scss';
import { buyer } from '../../../data/data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	function logout() {
		auth.removeToken();
		auth.setIsAuth(false);
		localStorage.removeItem('userData');
		navigate('/login');
	}

	useEffect(() => {
		if (auth.isAuth) {
			if (auth.userdata.user_role === 'seller') {
				navigate('/profile-seller')
			}
		} else { navigate('/login') }
	}, []);

	useEffect(() => {
		setUsername(auth.userdata.user_name)
		setUserTel(auth.userdata.user_phone)
		setUserAddress(auth.userdata.user_address)
	}, [auth.userdata]);

	const [username, setUsername] = useState(auth.userdata.user_name)
	function handleNameChange(e) {
		setUsername(e.target.value)
	}
	const [userTel, setUserTel] = useState(auth.userdata.user_phone)
	function handleTelChange(e) {
		setUserTel(e.target.value)
	}
	const [userAddress, setUserAddress] = useState(auth.userdata.user_address)
	function handleAddressChange(e) {
		setUserAddress(e.target.value)
	}


	return (
		<div className="profile-page">
			{window.innerWidth < 1439 ? null : <Header />}

			<div className="content-wrapper">
				<Sidebar list={buyer} title={'Профиль'} toPath="" />

				<div className="profile-content profile-content-b">
					<div className="avatar">
						<img src={avatar} alt="" />
						<div className="change-avatar">
							<svg
								className="img"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.45 6.05L14.825 9.425M2 14.825V18.875H6.05L18.875 6.05L14.825 2L2 14.825Z"
									stroke="white"
									strokeWidth="2.025"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div className="title">{username}</div>
					<form className="personal-info">
						<div className="input-block">
							<span>Имя и Фамилия</span>
							<input name="username" value={username} onChange={handleNameChange} type="text" />
						</div>

						<div className="input-block">
							<span>Номер телефона</span>
							<input name="user_phone" value={userTel} onChange={handleTelChange}  type="text" />
						</div>

						<div className="input-block">
							<span>Адрес доставки</span>
							<input name="user_address" type="text" value={userAddress} onChange={handleAddressChange} />
						</div>

						<button className="pink-button">Сохранить изменения</button>
						<button
							onClick={() => {
								logout();
							}}
							className="logout"
						>
							Выйти
						</button>
					</form>
				</div>
			</div>
			{window.innerWidth < 720 ? null : <Footer />}
		</div>
	);
}

export default Profile;
