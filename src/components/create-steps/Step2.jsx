import React, { useState } from 'react';
import '../../assets/styles/global.scss';
import imgIcon from '../../assets/images/img.png';
import imgPlusIcon from '../../assets/images/plus.png';
import { Link } from 'react-router-dom';

function Step1({
	nextStep,
	prevStep,
	step,
	colorChanger,
	color,
	compound,
	length,
	width,
	density,
	country,
	compoundChanger,
	lengthChanger,
	widthChanger,
	densityChanger,
	countryChanger,


}) {
	return (
		<div className="content">
			<div className="content__title">Заполните характеристики</div>
			<div className="inputs">
				<div className="input-block-448">
					<div className="input-text">
						<span>Цвет</span>
						<input
							type="text"
							placeholder="Атлас"
							value={color}
							onChange={colorChanger}
						/>
					</div>
				</div>
				<div className="input-block-448">
					<div className="input-text">
						<span>Состав</span>
						<input
							type="text"
							placeholder="80% флис, 20% хлопок"
							value={compound}
							onChange={compoundChanger}
						/>
					</div>
				</div>
				<div className="input-block-448">
					<div className="input-text">
						<span>Длина рулона</span>
						<input
							type="text"
							placeholder="Введите значение в метрах"
							value={length}
							onChange={lengthChanger}
						/>
					</div>
				</div>
				<div className="input-block-448">
					<div className="input-text">
						<span>Ширина ткани</span>
						<input
							type="text"
							placeholder="Введите значение в см"
							value={width}
							onChange={widthChanger}
						/>
					</div>
				</div>
				<div className="input-block-448">
					<div className="input-text">
						<span>Плотность</span>
						<input
							type="text"
							placeholder="140 г/м"
							value={density}
							onChange={densityChanger}
						/>
					</div>
				</div>
				<div className="input-block-448">
					<div className="input-text">
						<span>Страна производителя</span>
						<input
							type="text"
							placeholder="Аргентина"
							value={country}
							onChange={countryChanger}
						/>
					</div>
				</div>
			</div>

			{step < 3 && (
				<>
					<button className="pink-button-448" onClick={nextStep}>
						Следующий шаг
					</button>
					<button className="back-btn" onClick={prevStep}>
						Вернуться назад
					</button>
				</>
			)}

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
