import React, { useState } from 'react';
import '../../assets/styles/global.scss';

function Step4({ prevStep, data, nextStep, formSubmit }) {
	return (
		<div className="content step4">
			<div className="content__title">Проверьте объявление</div>
			<div className="photos-grid">
				<div className="image-wrapper image-wrapper-download">
					<img src={data.photo1} alt="img1" className={'loaded'} />
				</div>

				{data.photo3 && (
					<div className="image-wrapper">
						<img src={data.photo2} alt="img1" className={'loaded'} />
					</div>
				)}

				{data.photo3 && (
					<div className="image-wrapper">
						<img src={data.photo3} alt="img1" className={'loaded'} />
					</div>
				)}

				{data.photo4 && (
					<div className="image-wrapper">
						<img src={data.photo4} alt="img1" className={'loaded'} />
					</div>
				)}
			</div>
			<div className="input-block-pass input-block-448" style={{marginTop: '20px'}}>
				<div className="input-text">
					<span>Категория</span>
					<input type="text" disabled value={data.category_name} />
				</div>
			</div>

			<div className="input-block-448 input-block-big">
				<span>Описание для товара</span>
				<textarea
					disabled
					name="description"
					type="text"
					placeholder="Длина рулона, вес, плотность, тип ткани..."
					value={data.description}
				/>
			</div>

			<div className="input-block-448">
				<div className="input-text">
					<span>Цвет</span>
					<input disabled type="text" value={data.color} placeholder="Атлас" />
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Состав</span>
					<input
						disabled
						type="text"
						value={data.compound}
						placeholder="80% флис, 20% хлопок"
					/>
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Длина рулона</span>
					<input disabled type="text" value={data.length} placeholder="150 метров" />
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Ширина ткани</span>
					<input disabled type="text" value={data.width} placeholder="250см" />
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Плотность</span>
					<input disabled type="text" value={data.density} placeholder="140 г/м" />
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Страна производителя</span>
					<input disabled type="text" value={data.country} placeholder="Аргентина" />
				</div>
			</div>

			<div className="input-block-448">
				<div className="input-text">
					<span>Валюта</span>
					<input disabled type="text" value={data.currency} placeholder="KGS" />
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Расчет за</span>
					<input disabled type="text" value={data.price_for} placeholder="Метр\Рулон" />
				</div>
			</div>
			<div className="input-block-448">
				<div className="input-text">
					<span>Стоимость</span>
					<input disabled type="text" value={data.price} placeholder="Стоимость" />
				</div>
			</div>

			<button className="pink-button-448" onClick={next_step_and_send_form}>
				Опубликовать
			</button>
			<button className="back-btn" onClick={prevStep}>
				Вернуться
			</button>
		</div>
	);

	function next_step_and_send_form() {
		nextStep();
		formSubmit();
	}
}

export default Step4;
