import React, { useState } from 'react';
import '../../assets/styles/global.scss';
import imgIcon from '../../assets/images/img.png';
import imgPlusIcon from '../../assets/images/plus.png';
import { Link } from 'react-router-dom';

function Step1({
	currency,
	nextStep,
	prevStep,
	handleCurrencyPicker,
	price,
	price_for,
	handlePriceChanger,
	handlePrice_forChanger,
}) {
	const [list, setList] = useState('');
	const handleBlockClick = () => {
		setList(!list);
	};

	const currencies = ['KGS', 'RUB', 'USD'];

	return (
		<div className="content">
			<div className="content__title">Укажите стоимость</div>
			<div className="inputs">
				<label onClick={handleBlockClick}>
					<div className="input-block-448">
						<div className="input-text">
							<span>Валюта</span>
							<input
								type="text"
								placeholder="Выберите валюту"
								disabled
								value={currency}
							/>
							{list && (
								<ul className="categories-list currency-list">
									{currencies.map((item) => {
										return (
											<li
												onClick={() => {
													handleCurrencyPicker(item);
												}}
												key={item}
											>
												{item}
											</li>
										);
									})}
								</ul>
							)}
						</div>
					</div>
				</label>

				<div className="input-block-448">
					<div className="input-text">
						<span>Расчет за</span>
						<input type="text" placeholder="Метр\Рулон" value={price_for} onChange={handlePrice_forChanger}/>
					</div>
				</div>
				<div className="input-block-448">
					<div className="input-text">
						<span>Стоимость</span>
						<input type="text" placeholder="Стоимость" value={price} onChange={handlePriceChanger} />
					</div>
				</div>
			</div>

			<button className="pink-button-448" onClick={nextStep}>
				Следующий шаг
			</button>
			<button className="back-btn" onClick={prevStep}>
				Вернуться назад
			</button>
		</div>
	);
}

export default Step1;
