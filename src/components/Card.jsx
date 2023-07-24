import React from 'react';
import { Link } from 'react-router-dom';

function Card({
	id,
	title,
	cost,
	purchaseCounter,
	rating,
	discount,
	category,
	popularityCounter,
	availableOnOrder,
	photos,
	data,
}) {return (
		<Link to={`/products/${id}`} state={{ data: data }} >
			<div className="content__card">
				<div className="card-img">
					<img src={photos} alt="Фото Ткани" />
					{/* <img src={photos[1]} alt="Фото Ткани" />
				<img src={photos[2]} alt="Фото Ткани" />
				<img src={photos[3]} alt="Фото Ткани" /> */}
					<div className="dots"></div>
				</div>
				<h3 className="card-title">{title}</h3>
				<div className="card-review">
					<div className="stars">
						<svg
							id="star"
							width="18"
							height="17"
							viewBox="0 0 18 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.87078 14.2173L12.9305 16.6727C13.6739 17.1227 14.5837 16.4575 14.3881 15.6162L13.312 10.9989L16.9021 7.88808C17.5576 7.3207 17.2054 6.24463 16.3445 6.17615L11.6196 5.77507L9.77076 1.41209C9.43816 0.619715 8.30339 0.619715 7.97079 1.41209L6.12191 5.76529L1.39701 6.16637C0.536153 6.23484 0.183986 7.31091 0.839408 7.8783L4.42956 10.9891L3.35349 15.6064C3.15784 16.4477 4.06761 17.1129 4.81107 16.6629L8.87078 14.2173Z"
								fill="black"
							/>
						</svg>
						<span>{rating}</span>
					</div>
					<span className="buyed"> {purchaseCounter} купили</span>
				</div>

				{discount ? (
					<div className="discount-cost">
						<span className="discount-cost-old">{Math.round(cost)} c</span>
						<span className="discount-cost-percent">-{Math.round(discount * 100)}%</span>
					</div>
				) : ""}

				<div className="cost">{Math.round(cost - (cost * discount))} сом</div>
			</div>
		</Link>
	);
}

export default Card;
