import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Sidebar from '../../../Sidebar/Sidebar';
import avatar from '../../../../assets/images/profile.png';
import { seller } from '../../../../data/data';
import '.././Profile.scss';
import { AuthContext } from '../../../../auth';
import axios from 'axios';

function Profile() {
	const validNumber = false;
	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	const [message, setMessage] = useState('');

	function handlePhoneChanger(event) {
		// Нужно в компоненте, где используется функция создать let validNumber = false
		// и делать проверку на validNumber в нужных местах
		const cleared = event.target.value.replace(/[^\d]/g, '');
		const splited = cleared.split('');
		if (!cleared) {
			event.target.value = '';
		} else {
			if (splited.slice(0, 3).join('') == ['9', '9', '6'].join('')) {
				splited.length == 12 ? (validNumber = true) : (validNumber = false);
			} else if (splited[0] == '7') {
				// splited.length == 11 ? (validNumber = true) : (validNumber = false);
			}
			setUserPhone('+' + splited.join(''));
		}
	}

	useEffect(() => {
		if (auth.isAuth && auth.userdata.user_role === 'seller') {
			navigate('/profile-seller');
		} else if (auth.isAuth === false) {
			navigate('/login');
		}
	}, []);

	useEffect(() => {
		setUserPhone(auth.userdata.user_phone);
		setSellername(auth.userdata.user_name);
	}, [auth]);

	const [userPhone, setUserPhone] = useState(auth.userdata.user_phone);
	const [shopname, setShopname] = useState('');
	function handleShopnameChange(e) {
		setShopname(e.target.value);
	}

	const [sellername, setSellername] = useState(auth.userdata.user_name);
	function handleSellernameChange(e) {
		setSellername(e.target.value);
	}
	const [description, setDescription] = useState('');
	function handleDescriptionChange(e) {
		setDescription(e.target.value);
	}
	const [shopAddress, setShopAddress] = useState('');
	function handleAddressChange(e) {
		setShopAddress(e.target.value);
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
					<div className="title">{shopname} </div>
					<form className="personal-info" onSubmit={upgrade_my_account}>
						<div className="input-block">
							<span>Название магазина</span>
							<input
								type="text"
								name="shopname"
								value={shopname}
								onChange={handleShopnameChange}
							/>
						</div>

						<div className="input-block input-block-big">
							<span>Описание магазина</span>
							<textarea
								name="description"
								value={description}
								onChange={handleDescriptionChange}
							/>
						</div>

						<div className="input-block">
							<span>Имя продавца</span>
							<input
								type="text"
								name="sellername"
								value={sellername}
								onChange={handleSellernameChange}
							/>
						</div>

						<div className="input-block">
							<span>Номер телефона</span>
							<input
								type="text"
								name="shopNumber"
								value={userPhone}
								onChange={handlePhoneChanger}
							/>
						</div>

						<div className="input-block">
							<span>Адрес магазина</span>
							<input
								type="text"
								name="shop_address"
								value={shopAddress}
								onChange={handleAddressChange}
							/>
						</div>

						<button type="submit" className="pink-button">
							Сохранить изменения
						</button>

						<p>{message}</p>
					</form>
				</div>
			</div>
			{window.innerWidth < 720 ? null : <Footer />}
		</div>
	);

	function upgrade_my_account(event) {
		event.preventDefault();
		const shopname = event.target.elements.shopname.value;
		const description = event.target.elements.description.value;
		const sellername = event.target.elements.sellername.value;
		const shopNumber = event.target.elements.shopNumber.value;
		const shopAddress = event.target.elements.shop_address.value;
		const formData = {
			shopname: shopname,
			description: description,
			sellername: sellername,
			shopNumber: shopNumber,
			shopAddress: shopAddress,
			token: auth.token,
		};

		console.log('Old_token: ' + auth.token);

		axios
			.post('https://optom-tkani.kg/back/upgrade_my_account.php', JSON.stringify(formData), {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				if (response.data === 'номер уже используется') {
					setMessage('Номер уже зарегистрирован');
				}

				if (response.data.feedback === 'all good') {
					localStorage.removeItem('userData');
					localStorage.setItem('userData', JSON.stringify(response.data.user_data));
					auth.setUserdata(response.data.user_data);
					navigate('/profile-seller');

					auth.saveToken(response.data.token);

					console.log('New_token: ' + auth.token);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default Profile;
