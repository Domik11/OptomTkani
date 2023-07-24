import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import avatar from '../../../assets/images/profile.png';
import { seller } from '../../../data/data';
import './Profile.scss';
import { AuthContext } from '../../../auth';
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
			if (auth.userdata.user_role === 'buyer') {
				navigate('/buyer')
			}
		} else { navigate('/login')}
	}, []);

	useEffect(() => {
		setShopname(auth.userdata.shop_name)
		setDescription(auth.userdata.shop_desc)
		setSellername(auth.userdata.user_name)
		setShopNumber(auth.userdata.user_phone)
		setShopAddress(auth.userdata.user_address)
	}, [auth.userdata]);

	const [shopname, setShopname] = useState(auth.userdata.shop_name)
	function handleShopnameChange(e) {
		setShopname(e.target.value)
	}
	const [shopNumber, setShopNumber] = useState(auth.userdata.user_phone)
	function handleShopNumberChange(e) {
		setShopNumber(e.target.value)
	}
	const [sellername, setSellername] = useState(auth.userdata.user_name)
	function handleSellernameChange(e) {
		setSellername(e.target.value)
	}
	const [description, setDescription] = useState(auth.userdata.shop_desc)
	function handleDescriptionChange(e) {
		setDescription(e.target.value)
	}
	const [shopAddress, setShopAddress] = useState(auth.userdata.shop_address)
	function handleAddressChange(e) {
		setShopAddress(e.target.value)
	}

	return (
		<div className="profile-page">
			{window.innerWidth < 1439 ? null : <Header />}
			<div className="content-wrapper">
				<Sidebar list={seller} title={'Профиль'} toPath="" />

				<div className="profile-content profile-content-s">
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
					<div className="title">Магазин</div>
					<form className="personal-info">
						<div className="input-block">
							<span>Название магазина</span>
							<input type="text" name="shopname" value={shopname} onChange={handleShopnameChange} />
						</div>

						<div className="input-block input-block-big">
							<span>Описание магазина</span>
							<textarea name="description" value={description} onChange={handleDescriptionChange}/>
						</div>

						<div className="input-block">
							<span>Имя продавца</span>
							<input type="text"  name="sellername" value={sellername} onChange={handleSellernameChange} />
						</div>

						<div className="input-block">
							<span>Номер телефона</span>
							<input type="text" name="shopNumber" value={shopNumber} onChange={handleShopNumberChange} />
						</div>

						<div className="input-block">
							<span>Адрес магазина</span>
							<input type="text" name="shop_address" value={shopAddress} onChange={handleAddressChange}/>
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



	function takeShopData() {
		const token = auth.token;
		const formData = {request: 'shopData', token: token}

		axios
		.post('https://eatesting.site/back/giveData.php', JSON.stringify(formData), {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
		})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error);
		});
	}
}

export default Profile;
