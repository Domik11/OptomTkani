import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__block">
					<h4 className="footer__block-title">Покупателям</h4>

					<ul className="footer__block-list">
						<a className="footer-list-link" href="">
							<li className="footer-list-item">О нас</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Способ оплаты</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Доставка</li>
						</a>
					</ul>
				</div>

				<div className="footer__block">
					<h4 className="footer__block-title">Партнёрам</h4>
					<ul className="footer__block-list">
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Продавайте на OptomTkani</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Как активировать аккаунт продавца</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Частые вопросы</li>
						</a>
					</ul>
				</div>

				<div className="footer__block">
					<h4 className="footer__block-title">О компании</h4>

					<ul className="footer__block-list">
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Контакты</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Телефон</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Адрес</li>
						</a>
					</ul>
				</div>

				<div className="footer__block docs">
					<h4 className="footer__block-title">Документы</h4>

					<ul className="footer__block-list">
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Политика конфиденциальности</li>
						</a>
						<a className="footer-list-link" href="">
							<li className="footer-list-item">Пользовательское соглашение</li>
						</a>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
