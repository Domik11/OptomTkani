import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import './registration.scss';
import logo from '../../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth';

function RegisterPage() {
	let validNumber = false;
	const auth = useContext(AuthContext);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.isAuth) {
			const role = auth.userdata.user_role
			if (role == 'seller') {navigate('/profile-seller')}
			if (role == 'buyer') {navigate('/profile-buyer')}
		}
	}, [auth]);

	return (
		<div className="reg-page">
			{window.innerWidth < 1439 ? null : <Header />}

			<div className="mobile-header">
				<img src={logo} alt="" />
				<Link to="/">
					<h1 className="header__title">
						Оптом<i className="tkani">Ткaни</i>
					</h1>
				</Link>
			</div>
			<div className="content-wrapper">
				<Sidebar list={[]} title={'Регистрация'} toPath="" />
				<form onSubmit={regFormSender} className="reg-content">
					<input
						required
						name="username"
						type="text"
						placeholder="Имя или название магазина"
					/>
					<input
						required
						name="phone_number"
						type="tel"
						onChange={handlePhoneChanger}
						placeholder="Номер телефона с WhatsApp"
					/>
					<input
						required
						name="password"
						type="password"
						placeholder="Придумайте пароль"
					/>
					<input
						required
						name="confirm_password"
						type="password"
						placeholder="Повторите ваш пароль"
					/>

					<button className="message">
						<span
							style={{
								fontSize: '16px',
								color: 'red',
								textAlign: 'center',
								marginTop: '10px',
							}}
						>
							{message}
						</span>
					</button>
					<button type="submit" className="pink-button-448">
						Регистрация
					</button>

					<Link to="/login">
						<button className="go-login">Войти в существующий аккаунт</button>
					</Link>
				</form>
			</div>

			{window.innerWidth < 1439 ? null : <Footer />}
		</div>
	);

	function regFormSender(event) {
		event.preventDefault();

		const formData = new URLSearchParams();
		formData.append('username', event.target.elements.username.value)
		formData.append('phone_number', event.target.elements.phone_number.value)
		formData.append('password', event.target.elements.password.value)

		if (!validNumber) {
			setMessage('Введите корректный номер телефона!');
		} else {
			axios.post('https://optom-tkani.kg/back/register.php', formData)
				.then((response) => {
					if (response.data === 'номер уже используется') {
						setMessage('Данный номер уже используется. Выполните авторизацию');
					} else if (response.data === 'error') {
						setMessage('Что-то пошло не так. Повторите попытку или попробуйте позднее');
					} else if (response.data.feedback === 'succes') {
						auth.setIsAuth(true)
						auth.saveToken(response.data.token);
						auth.setUserdata(response.data.user_data)
						localStorage.setItem('userData',JSON.stringify(response.data.user_data));
						navigate('/profile-buyer');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}




	// функция маска для телефона
	function handlePhoneChanger(event) {
		setMessage('');
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
				splited.length == 11 ? (validNumber = true) : (validNumber = false);
			}
			event.target.value = '+' + splited.join('');
		}
	}
}

export default RegisterPage;
