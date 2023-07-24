import React, { useState, useEffect } from 'react';
import { categories } from '../../data/data';
import '../../assets/styles/global.scss';
import imgIcon from '../../assets/images/img.png';
import imgPlusIcon from '../../assets/images/plus.png';

function Step1({
	title1,
	title2,
	handleCategoryPicker,
	picked_category_name,
	loaded1,
	loaded2,
	loaded3,
	loaded4,
	handleFileChange1,
	handleFileChange2,
	handleFileChange3,
	handleFileChange4,
	text,
	handleTextChange,
	nextStep,
}) {
	const [list, setList] = useState(false);
	const handleBlockClick = () => {
		setList(!list);
	};

	useEffect(() => {
		
	}, []);

	return (
		<div className="content">
			<div className="content__title">{title1}</div>
			<div className="photos-grid">
				<label>
					<div className="image-wrapper image-wrapper-download">
						{loaded1 ? (
							<img src={loaded1} alt="img1" className={'loaded'} />
						) : (
							<img src={imgPlusIcon} alt="img1" className={''} />
						)}
						<input type="file" accept="image/*" onChange={handleFileChange1} />
					</div>
				</label>

				<label>
					<div className="image-wrapper">
						{loaded2 ? (
							<img src={loaded2} alt="img1" className={'loaded'} />
						) : (
							<img src={imgIcon} alt="img1" className={''} />
						)}
						<input type="file" accept="image/*" onChange={handleFileChange2} />
					</div>
				</label>

				<label>
					<div className="image-wrapper">
						{loaded3 ? (
							<img src={loaded3} alt="img1" className={'loaded'} />
						) : (
							<img src={imgIcon} alt="img1" className={''} />
						)}
						<input type="file" accept="image/*" onChange={handleFileChange3} />
					</div>
				</label>
				<label>
					<div className="image-wrapper">
						{loaded4 ? (
							<img src={loaded4} alt="img1" className={'loaded'} />
						) : (
							<img src={imgIcon} alt="img1" className={''} />
						)}
						<input type="file" accept="image/*" onChange={handleFileChange4} />
					</div>
				</label>
			</div>

			<div className="content__title">{title2}</div>
			<div className="inputs">
				<label
					style={{ width: 'fit-content', cursor: 'pointer' }}
					onClick={handleBlockClick}
				>
					<div className="input-block-pass input-block-448">
						<div className="input-text">
							<span>Категория</span>
							<input type="text" disabled value={picked_category_name} />
							{list && (
								<ul className="categories-list">
									{categories.map((item) => {
										return (
											<li
												onClick={() => {
													handleCategoryPicker(item.id, item.name);
												}}
												key={item.id}
											>
												{item.name}
											</li>
										);
									})}
								</ul>
							)}
						</div>

						<div className="input-icon">
							<svg
								width="9"
								height="23"
								viewBox="0 0 9 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.6346 16.5187L0.160645 17.9917L4.58044 22.4114L9.00023 17.9917L7.52627 16.5187L4.58044 19.4656L1.6346 16.5187ZM7.52627 6.48124L9.00023 5.00832L4.58044 0.588531L0.160645 5.00832L1.6346 6.48124L4.58044 3.53541L7.52627 6.48124Z"
									fill="#696262"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.58057 8.375C5.40937 8.375 6.20422 8.70424 6.79028 9.29029C7.37633 9.87634 7.70557 10.6712 7.70557 11.5C7.70557 12.3288 7.37633 13.1237 6.79028 13.7097C6.20422 14.2958 5.40937 14.625 4.58057 14.625C3.75176 14.625 2.95691 14.2958 2.37086 13.7097C1.78481 13.1237 1.45557 12.3288 1.45557 11.5C1.45557 10.6712 1.78481 9.87634 2.37086 9.29029C2.95691 8.70424 3.75176 8.375 4.58057 8.375ZM4.58057 10.4583C4.85683 10.4583 5.12179 10.5681 5.31714 10.7634C5.51249 10.9588 5.62223 11.2237 5.62223 11.5C5.62223 11.7763 5.51249 12.0412 5.31714 12.2366C5.12179 12.4319 4.85683 12.5417 4.58057 12.5417C4.3043 12.5417 4.03935 12.4319 3.844 12.2366C3.64865 12.0412 3.5389 11.7763 3.5389 11.5C3.5389 11.2237 3.64865 10.9588 3.844 10.7634C4.03935 10.5681 4.3043 10.4583 4.58057 10.4583Z"
									fill="#696262"
								/>
							</svg>
						</div>
					</div>
				</label>

				<div className="input-block-448 input-block-big">
					<span>Описание для товара</span>
					<textarea
						name="description"
						type="text"
						placeholder="Длина рулона, вес, плотность, тип ткани..."
						value={text}
						onChange={handleTextChange}
					/>
				</div>
			</div>

			<button className="pink-button-448" onClick={nextStep}>Следующий шаг</button>
		</div>
	);
}

export default Step1;
