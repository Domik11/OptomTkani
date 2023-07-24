import React, { useState, useEffect } from 'react';
import Banner1 from '../Banner1';
import Banner2 from '../Banner2';
import Card from '../Card';

// data
import products from '../../data/products copy';

const viewPort = window.innerWidth;

const discountedProducts = products.filter((discounted) => {
	return discounted.discount > 0;
});
const couldOrderProducts = products.filter((order) => {
	return order.availableOnOrder == true;
});
const mostPopularProducts = products
	.slice()
	.sort((a, b) => b.popularityCounter - a.popularityCounter)
	.slice(-12);

const fourRandomDiscountedCards = [];
const fourRandomAvailableOnOrderCards = [];

//   Функция отбирает рандомные элементы из массива (array)
//   и записывает их в новый массив (newArray) в количестве равном numberOf
function RandomCards(array, newArray, numberOf) {
	if (array.length < numberOf) {
		numberOf = array.length;
	}
	while (newArray.length < numberOf) {
		const randomIndex = Math.floor(Math.random() * array.length);
		if (!newArray.includes(randomIndex)) {
			newArray.push(array[randomIndex]);
		}
	}
}

const mostRecentProducts = products.slice(-16);
RandomCards(discountedProducts, fourRandomDiscountedCards, 4);
RandomCards(couldOrderProducts, fourRandomAvailableOnOrderCards, 4);

function HomePage() {
	return (
		<div className="content">
			{window.innerWidth < 1439 ? null : <Banner1 />}

			<div className="content__grid">
				{/* Здесь рендерится 16 самых свежих товаров на сайте */}
				{Object.keys(mostRecentProducts).map((key) => {
					const sale = mostRecentProducts[key];
					return <Card {...sale} key={sale.id} />;
				})}
			</div>
			<Banner2 />

			<div className="content__grid">
				<div className="content__title">Распродажа</div>
				{Object.keys(fourRandomDiscountedCards).map((key, index) => {
					const sale = fourRandomDiscountedCards[key];
					return <Card {...sale} key={index} />;
				})}
			</div>

			<div className="content__grid">
				<div className="content__title">Ткань на заказ</div>
				{Object.keys(fourRandomAvailableOnOrderCards).map((key, index) => {
					const sale = fourRandomAvailableOnOrderCards[key];
					return <Card {...sale} key={index} />;
				})}
			</div>

			<div className="content__grid">
				<div className="content__title">Популярные</div>
				{Object.keys(mostPopularProducts).map((key, index) => {
					const sale = mostPopularProducts[key];
					return <Card {...sale} key={index} />;
				})}
			</div>
		</div>
	);
}

export default HomePage;
