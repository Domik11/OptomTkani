import React, { useState } from 'react';
import openEye from '../assets/images/openeye.svg';
import closeEye from '../assets/images/closeeye.svg';
import Header from './Header/Header';

const messages = {
	error: 'Пароли не совпадают/Неверный пароль',
	succes: 'Ваш пароль успешно изменен',
	notEnough: 'Пароль слишком короткий',
	tooSimple: 'Пароль слишком простой, пароль обязательно должен содержать буквы и цифры',
};

function ChangePass() {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleOldPasswordChange = (event) => {
		setOldPassword(event.target.value);
	};

	const handleNewPasswordChange = (event) => {
		setNewPassword(event.target.value);
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};

	const toggleShowOldPassword = () => {
		setShowOldPassword((prevShow) => !prevShow);
	};

	const toggleShowNewPassword = () => {
		setShowNewPassword((prevShow) => !prevShow);
	};

	const toggleShowConfirmPassword = () => {
		setShowConfirmPassword((prevShow) => !prevShow);
	};

	return (
		<>
			<div className="content-wrapper">
				<div className="content__title">Смена пароля</div>
				<div className="inputs">
					<div className="input-block-pass">
						<div className="input-text">
							<span>Старый пароль</span>
							<input
								type={showOldPassword ? 'text' : 'password'}
								id="oldPassword"
								value={oldPassword}
								onChange={handleOldPasswordChange}
								placeholder="***********"
							/>
						</div>
						<div>
							<img
								className="change-type-icon"
								style={{ width: '25px' }}
								src={showOldPassword ? closeEye : openEye}
								alt=""
								onClick={toggleShowOldPassword}
							/>
						</div>
					</div>

					<div className="input-block-pass">
						<div className="input-text">
							<span>Новый пароль</span>
							<input
								type={showNewPassword ? 'text' : 'password'}
								id="newPassword"
								value={newPassword}
								onChange={handleNewPasswordChange}
								placeholder="***********"
							/>
						</div>
						<div>
							<img
								className="change-type-icon"
								style={{ width: '25px' }}
								src={showNewPassword ? closeEye : openEye}
								alt=""
								onClick={toggleShowNewPassword}
							/>
						</div>
					</div>

					<div className="input-block-pass">
						<div className="input-text">
							<span>Повторите новый пароль</span>
							<input
								type={showConfirmPassword ? 'text' : 'password'}
								id="confirmPassword"
								value={confirmPassword}
								onChange={handleConfirmPasswordChange}
								placeholder="***********"
							/>
						</div>
						<div>
							<img
								className="change-type-icon"
								style={{ width: '25px' }}
								src={showConfirmPassword ? closeEye : openEye}
								alt=""
								onClick={toggleShowConfirmPassword}
							/>
						</div>
					</div>
				</div>

				<span className="pass-message-hide">{messages.tooSimple}</span>

				<button className="pink-button-change-pass">Сохранить изменения</button>
			</div>
		</>
	);
}

export default ChangePass;
