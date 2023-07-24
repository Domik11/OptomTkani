import React from 'react';
import Header from '../../Header/Header';
import './product.scss';
import shop_img from '../../../assets/images/profile.png';
import Card from '../../Card';
import Footer from '../../Footer/Footer';


const tovar = 'алеут'
function ProductPage() {
	if (window.innerWidth > 1439) {
		return (
			<div className="prod-page">
				<Header />

				<div className="content-wrapper">
					<div className="top-content">
						<div className="product">
							<div className="photo-wrapper">
								<img
									src="https://i.ibb.co/5RRWTD1/image.png"
									alt="фотография ткани"
								/>
							</div>

							<div className="prod-description">
								<div className="prod-title">
									<h2>Бордово красный атлас из Китая по низкой цене</h2>
									<div className="prod-stats">
										<span>20 купили</span>
										<div className="rate">
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
											<span>5</span>
										</div>

										<span>12 отзывов</span>
									</div>
								</div>
								<div className="prod-chracts">
									<div className="l-side">
										<div>
											<span>Артикул</span>
											<p>56191981</p>
										</div>

										<div>
											<span>Плотность</span>
											<p>140г\м</p>
										</div>

										<div>
											<span>Тип ткани</span>
											<p>Флис</p>
										</div>

										<div>
											<span>Состав</span>
											<p>asdfasdf</p>
										</div>
									</div>

									<div className="l-side">
										<div>
											<span>В рулоне</span>
											<p>60 метров</p>
										</div>

										<div>
											<span>Ширина материала</span>
											<p>200 см</p>
										</div>

										<div>
											<span>Цвет</span>
											<p>Фиолетовый</p>
										</div>

										<div>
											<span>Страна производителя</span>
											<p>Турция</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="cost">
							<div className="block">
								<h2>120 сом за метр</h2>
								<p>
									<b>240 c</b>
									<span>-50%</span>
								</p>

								<div className="btns">
									<button>В корзину</button>
									<a href={"https://wa.me/79965914513?text=Я бы хотел купить" + tovar + "в размере" + 30 + "штук"}>
										<button>Купить</button>
									</a>
								</div>
							</div>

							<div className="block">
								<>
									<img src={shop_img} alt="" />
								</>
								<h3>Магазин текстиля #1</h3>
							</div>
						</div>
					</div>

					<div className="reviews-block">
						<h2 className="title">Отзывы</h2>
						<p>
							Уже совсем скоро вы сможете оценивать отдельные товары и делиться
							впечатлениями!
						</p>
					</div>

					<div className="any-products">
						<h2 className="title">Другие товары продавца</h2>
						<div className="products-list">
							<Card
								photos="https://i.ibb.co/54gjNv3/20.png"
								title="Ткань рубашечная кайфовая ваще мамой отвечаю"
								cost={300}
								discount="0.1"
							/>
							<Card
								photos="https://i.ibb.co/54gjNv3/20.png"
								title="Ткань рубашечная кайфовая ваще мамой отвечаю"
								cost={300}
								discount="0.1"
							/>
							<Card
								photos="https://i.ibb.co/54gjNv3/20.png"
								title="Ткань рубашечная кайфовая ваще мамой отвечаю"
								cost={300}
								discount="0.1"
							/>
							<Card
								photos="https://i.ibb.co/54gjNv3/20.png"
								title="Ткань рубашечная кайфовая ваще мамой отвечаю"
								cost={300}
								discount="0.1"
							/>
							<Card
								photos="https://i.ibb.co/54gjNv3/20.png"
								title="Ткань рубашечная кайфовая ваще мамой отвечаю"
								cost={300}
								discount="0.1"
							/>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	} else {
		return (
			<div className="prod-page-mob">
				<div className="b-crumbs">
					<button>Главная</button>
					<p> / </p>

					<button>Категории</button>
					<p> / </p>
					<button>Флис</button>
				</div>

				<div className="mag-name">
					<svg
						width="18"
						height="20"
						viewBox="0 0 43 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.92 0.933333C8.17036 0.640626 8.48117 0.405629 8.83102 0.24451C9.18088 0.0833909 9.56149 -2.53351e-05 9.94667 5.77196e-09H32.72C33.1052 -2.53351e-05 33.4858 0.0833909 33.8356 0.24451C34.1855 0.405629 34.4963 0.640626 34.7467 0.933333L41.704 9.05067C42.3252 9.77555 42.6666 10.6987 42.6667 11.6533V12.3333C42.6668 13.6533 42.2546 14.9403 41.4875 16.0145C40.7205 17.0886 39.637 17.8963 38.3885 18.3247C37.14 18.753 35.7888 18.7805 34.5239 18.4034C33.259 18.0263 32.1435 17.2634 31.3333 16.2213C30.7417 16.9834 29.9835 17.5999 29.1169 18.0238C28.2502 18.4476 27.2981 18.6675 26.3333 18.6667C25.3685 18.6677 24.4163 18.4479 23.5496 18.0241C22.683 17.6002 21.9248 16.9835 21.3333 16.2213C20.7418 16.9835 19.9837 17.6002 19.117 18.0241C18.2503 18.4479 17.2981 18.6677 16.3333 18.6667C15.3686 18.6677 14.4163 18.4479 13.5496 18.0241C12.683 17.6002 11.9248 16.9835 11.3333 16.2213C10.5232 17.2634 9.40769 18.0263 8.14277 18.4034C6.87784 18.7805 5.52671 18.753 4.2782 18.3247C3.02969 17.8963 1.94619 17.0886 1.17915 16.0145C0.412111 14.9403 -0.000145596 13.6533 3.85721e-08 12.3333V11.6533C3.36201e-05 10.6987 0.341484 9.77555 0.962667 9.05067L7.92267 0.930667L7.92 0.933333ZM12.6667 12.3333C12.6667 13.3058 13.053 14.2384 13.7406 14.9261C14.4282 15.6137 15.3609 16 16.3333 16C17.3058 16 18.2384 15.6137 18.9261 14.9261C19.6137 14.2384 20 13.3058 20 12.3333C20 11.9797 20.1405 11.6406 20.3905 11.3905C20.6406 11.1405 20.9797 11 21.3333 11C21.687 11 22.0261 11.1405 22.2761 11.3905C22.5262 11.6406 22.6667 11.9797 22.6667 12.3333C22.6667 13.3058 23.053 14.2384 23.7406 14.9261C24.4282 15.6137 25.3609 16 26.3333 16C27.3058 16 28.2384 15.6137 28.9261 14.9261C29.6137 14.2384 30 13.3058 30 12.3333C30 11.9797 30.1405 11.6406 30.3905 11.3905C30.6406 11.1405 30.9797 11 31.3333 11C31.687 11 32.0261 11.1405 32.2761 11.3905C32.5262 11.6406 32.6667 11.9797 32.6667 12.3333C32.6667 13.3058 33.053 14.2384 33.7406 14.9261C34.4282 15.6137 35.3609 16 36.3333 16C37.3058 16 38.2384 15.6137 38.9261 14.9261C39.6137 14.2384 40 13.3058 40 12.3333V11.6533C40 11.3355 39.8865 11.0282 39.68 10.7867L32.72 2.66667H9.94667L2.98667 10.7867C2.78013 11.0282 2.66664 11.3355 2.66667 11.6533V12.3333C2.66667 13.3058 3.05297 14.2384 3.74061 14.9261C4.42824 15.6137 5.36087 16 6.33333 16C7.30579 16 8.23842 15.6137 8.92606 14.9261C9.61369 14.2384 10 13.3058 10 12.3333C10 11.9797 10.1405 11.6406 10.3905 11.3905C10.6406 11.1405 10.9797 11 11.3333 11C11.687 11 12.0261 11.1405 12.2761 11.3905C12.5262 11.6406 12.6667 11.9797 12.6667 12.3333ZM4 20C4.35362 20 4.69276 20.1405 4.94281 20.3905C5.19286 20.6406 5.33333 20.9797 5.33333 21.3333V37.3333H8V24C8 23.2928 8.28095 22.6145 8.78105 22.1144C9.28115 21.6143 9.95942 21.3333 10.6667 21.3333H18.6667C19.3739 21.3333 20.0522 21.6143 20.5523 22.1144C21.0524 22.6145 21.3333 23.2928 21.3333 24V37.3333H37.3333V21.3333C37.3333 20.9797 37.4738 20.6406 37.7239 20.3905C37.9739 20.1405 38.313 20 38.6667 20C39.0203 20 39.3594 20.1405 39.6095 20.3905C39.8595 20.6406 40 20.9797 40 21.3333V37.3333H41.3333C41.687 37.3333 42.0261 37.4738 42.2761 37.7239C42.5262 37.9739 42.6667 38.313 42.6667 38.6667C42.6667 39.0203 42.5262 39.3594 42.2761 39.6095C42.0261 39.8595 41.687 40 41.3333 40H1.33333C0.979711 40 0.640573 39.8595 0.390524 39.6095C0.140476 39.3594 3.85721e-08 39.0203 3.85721e-08 38.6667C3.85721e-08 38.313 0.140476 37.9739 0.390524 37.7239C0.640573 37.4738 0.979711 37.3333 1.33333 37.3333H2.66667V21.3333C2.66667 20.9797 2.80714 20.6406 3.05719 20.3905C3.30724 20.1405 3.64638 20 4 20ZM10.6667 37.3333H18.6667V24H10.6667V37.3333ZM24 24C24 23.2928 24.281 22.6145 24.781 22.1144C25.2811 21.6143 25.9594 21.3333 26.6667 21.3333H32C32.7072 21.3333 33.3855 21.6143 33.8856 22.1144C34.3857 22.6145 34.6667 23.2928 34.6667 24V32C34.6667 32.7072 34.3857 33.3855 33.8856 33.8856C33.3855 34.3857 32.7072 34.6667 32 34.6667H26.6667C25.9594 34.6667 25.2811 34.3857 24.781 33.8856C24.281 33.3855 24 32.7072 24 32V24ZM32 24H26.6667V32H32V24Z"
							fill="black"
						/>
					</svg>
					<button>Название магазина</button>
				</div>

				<div className="title">Флисовая ткань кайфовая, костюм сделай огонь будет ваще</div>
				<div className="stats">
					<p>{star(5)} 5</p>

					<p className="slash">|</p>
					<p>125 отзывов</p>
					<p className="slash">|</p>
					<p>1258 купили</p>
				</div>

				<div className="photo-wrapper-mob">
					<img src="https://i.ibb.co/5RRWTD1/image.png" alt="фотография ткани" />
				</div>

				{/* <div className='colors'>
                    <span>Доступные цвета</span>

                </div> */}

				<div className="mob-cost-block">
					<div className="discounted">
						<span className="price-w-discount">1200 с</span>
						<span className="discount-percent">- 50 %</span>
					</div>
					<h2 className="price-without">600 сом</h2>
				</div>
				<span>Бесплатная доставка при покупке от 3-х рулонов</span>

				<div className="characters">
					<div className="title">Характеристики</div>
					<div className="prod-chracts">
						<div className="l-side">
							<div>
								<span>Артикул</span>
								<p>56191981</p>
							</div>

							<div>
								<span>Плотность</span>
								<p>140г\м</p>
							</div>

							<div>
								<span>Тип ткани</span>
								<p>Флис</p>
							</div>

							<div>
								<span>Состав</span>
								<p>asdfasdf</p>
							</div>
						</div>

						<div className="l-side">
							<div>
								<span>В рулоне</span>
								<p>60 метров</p>
							</div>

							<div>
								<span>Ширина материала</span>
								<p>200 см</p>
							</div>

							<div>
								<span>Цвет</span>
								<p>Фиолетовый</p>
							</div>

							<div>
								<span>Страна производителя</span>
								<p>Турция</p>
							</div>
						</div>
					</div>
				</div>

				<div className="reviews-block">
					<h2 className="title">Отзывы</h2>
					<p>
						Уже совсем скоро вы сможете оценивать отдельные товары, делиться
						впечатлениями и смотреть отзывы других польхователей
					</p>
				</div>

				<div className="red-btns">
					<button></button>
					<button></button>
				</div>

				<div className="any-products">
					<h2 className="title">Другие товары продавца</h2>
					<div className="products-list">
						<Card
							photos="https://i.ibb.co/54gjNv3/20.png"
							title="Ткань рубашечная кайфовая ваще мамой отвечаю"
							cost={300}
							discount="0.1"
						/>
						<Card
							photos="https://i.ibb.co/54gjNv3/20.png"
							title="Ткань рубашечная кайфовая ваще мамой отвечаю"
							cost={300}
							discount="0.1"
						/>
						<Card
							photos="https://i.ibb.co/54gjNv3/20.png"
							title="Ткань рубашечная кайфовая ваще мамой отвечаю"
							cost={300}
							discount="0.1"
						/>
						<Card
							photos="https://i.ibb.co/54gjNv3/20.png"
							title="Ткань рубашечная кайфовая ваще мамой отвечаю"
							cost={300}
							discount="0.1"
						/>
						<Card
							photos="https://i.ibb.co/54gjNv3/20.png"
							title="Ткань рубашечная кайфовая ваще мамой отвечаю"
							cost={300}
							discount="0.1"
						/>
					</div>
				</div>

				<div className="main-mob-btns">
					<button className="cart-btn">{BasketIcon()}Корзина</button>
					<button className="buy-btn">
						{WhatsAppIcon()}
						<div style={{ textAlign: 'left' }}>
							<div>
								<p>Купить сейчас </p>
								<p>1200 сом</p>
							</div>
						</div>
					</button>
				</div>
			</div>
		);
	}

	function BasketIcon() {
		return (
			<svg
				width="34"
				height="30"
				viewBox="0 0 72 70"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M71.532 18.9153C71.325 18.6212 71.0503 18.3812 70.7311 18.2154C70.4119 18.0497 70.0576 17.963 69.698 17.9628H21.7874L18.1608 5.45633C16.7386 0.531637 13.359 0 11.973 0H2.30303C1.0636 0 0.0612793 1.00345 0.0612793 2.24168C0.0612793 3.47991 1.06473 4.48329 2.30296 4.48329H11.9718C12.2776 4.48329 13.2111 4.48329 13.8478 6.68321L26.3238 52.5338C26.5947 53.5011 27.4762 54.1693 28.4818 54.1693H58.9556C59.9015 54.1693 60.7458 53.5767 61.0653 52.6861L71.8064 20.9628C72.0536 20.2754 71.9509 19.5101 71.5321 18.9153H71.532ZM57.378 49.6872H30.1834L23.0475 22.4473H66.5107L57.378 49.6872ZM52.932 58.7126C49.8144 58.7126 47.2883 61.2387 47.2883 64.3563C47.2883 67.4739 49.8144 70 52.932 70C56.0496 70 58.5757 67.4739 58.5757 64.3563C58.5757 61.2387 56.0496 58.7126 52.932 58.7126ZM32.6147 58.7126C29.4971 58.7126 26.971 61.2387 26.971 64.3563C26.971 67.4739 29.4971 70 32.6147 70C35.7322 70 38.2584 67.4739 38.2584 64.3563C38.2584 61.2387 35.7322 58.7126 32.6147 58.7126Z"
					fill="white"
				/>
			</svg>
		);
	}
	function WhatsAppIcon() {
		return (
			<svg
				width="34"
				height="34"
				viewBox="0 0 64 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M54.56 9.31216C51.6263 6.34873 48.1318 3.99912 44.2805 2.40035C40.4292 0.801578 36.298 -0.0143363 32.1281 0.000190622C14.6561 0.000190622 0.416156 14.2401 0.416156 31.7121C0.416156 37.3121 1.88815 42.7521 4.64014 47.5521L0.160156 64L16.9601 59.584C21.6001 62.112 26.8161 63.456 32.1281 63.456C49.6 63.456 63.84 49.216 63.84 31.7441C63.84 23.2641 60.544 15.2961 54.56 9.31216ZM32.1281 58.08C27.3921 58.08 22.7521 56.8 18.6881 54.4L17.7281 53.824L7.74414 56.448L10.4001 46.7201L9.76013 45.7281C7.12893 41.5264 5.73179 36.6697 5.72814 31.7121C5.72814 17.1841 17.5681 5.34418 32.0961 5.34418C39.1361 5.34418 45.76 8.09617 50.72 13.0882C53.176 15.5328 55.1222 18.4407 56.4461 21.6431C57.7699 24.8455 58.4449 28.2789 58.432 31.7441C58.496 46.2721 46.656 58.08 32.1281 58.08ZM46.592 38.3681C45.792 37.9841 41.888 36.0641 41.184 35.7761C40.4481 35.5201 39.9361 35.3921 39.3921 36.1601C38.8481 36.9601 37.3441 38.7521 36.8961 39.2641C36.4481 39.8081 35.9681 39.8721 35.1681 39.4561C34.3681 39.0721 31.8081 38.2081 28.8001 35.5201C26.4321 33.4081 24.8641 30.8161 24.3841 30.0161C23.9361 29.2161 24.3201 28.8001 24.7361 28.3841C25.0881 28.0321 25.5361 27.4561 25.9201 27.0081C26.3041 26.5601 26.4641 26.2081 26.7201 25.6961C26.9761 25.1521 26.8481 24.7041 26.6561 24.3201C26.4641 23.9361 24.8641 20.0321 24.2241 18.4321C23.5841 16.8961 22.9121 17.0881 22.4321 17.0561H20.8961C20.3521 17.0561 19.5201 17.2481 18.7841 18.0481C18.0801 18.8481 16.0321 20.7681 16.0321 24.6721C16.0321 28.5761 18.8801 32.3521 19.2641 32.8641C19.6481 33.4081 24.8641 41.4081 32.8001 44.8321C34.6881 45.6641 36.1601 46.1441 37.3121 46.4961C39.2001 47.1041 40.9281 47.008 42.304 46.816C43.84 46.592 47.008 44.8961 47.648 43.0401C48.32 41.1841 48.32 39.6161 48.096 39.2641C47.872 38.9121 47.392 38.7521 46.592 38.3681Z"
					fill="white"
				/>
			</svg>
		);
	}

	function star(e) {
		const stars = [];

		for (let i = 0; i < e; i++) {
			stars.push(
				<svg
					key={i}
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
				</svg>,
			);
		}

		return stars;
	}
}
export default ProductPage;
