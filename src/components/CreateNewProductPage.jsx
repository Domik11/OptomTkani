import React, { useState } from 'react';
import Header from './Header/Header';
import Step1 from '../components/create-steps/Step1';
import Step2 from '../components/create-steps/Step2';
import Step3 from '../components/create-steps/Step3';
import Step4 from '../components/create-steps/Step4';
import Step5 from '../components/create-steps/Step5';
import axios from 'axios';


function CreateNewProductPage() {
	const [picked_category_name, set_picked_category_name] = useState('');
	const [picked_category, set_picked_category] = useState('');
	const handleCategoryPicker = (id, name) => {
		set_picked_category(id);
		set_picked_category_name(name);
	};

	const [loaded1, setLoaded1] = useState('');
	const [loaded2, setLoaded2] = useState('');
	const [loaded3, setLoaded3] = useState('');
	const [loaded4, setLoaded4] = useState('');
	const handleFileChange1 = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setLoaded1(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setLoaded1('');
		}
	};
	const handleFileChange2 = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setLoaded2(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setLoaded2('');
		}
	};
	const handleFileChange3 = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setLoaded3(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setLoaded3('');
		}
	};
	const handleFileChange4 = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setLoaded4(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setLoaded4('');
		}
	};

	const [text, setText] = useState('');
	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	// step2
	const [color, setColor] = useState('');
	const colorChanger = (e) => {
		setColor(e.target.value);
	};
	const [compound, setCompound] = useState('');
	const compoundChanger = (e) => {
		setCompound(e.target.value);
	};
	const [length, setLength] = useState('');
	const lengthChanger = (e) => {
		setLength(e.target.value);
	};
	const [width, setWidth] = useState('');
	const widthChanger = (e) => {
		setWidth(e.target.value);
	};
	const [density, setDensity] = useState('');
	const densityChanger = (e) => {
		setDensity(e.target.value);
	};
	const [country, setCountry] = useState('');
	const countryChanger = (e) => {
		setCountry(e.target.value);
	};

	// step 3
	const [currency, setCurrency] = useState('');
	const handleCurrencyPicker = (e) => {
		setCurrency(e);
	};
	const [price, setPrice] = useState('');
	const handlePriceChanger = (e) => {
		setPrice(e.target.value);
	};
	const [price_for, setPrice_for] = useState('');
	const handlePrice_forChanger = (e) => {
		setPrice_for(e.target.value);
	};

	const [step, setStep] = useState(1);
	const nextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};
	const prevStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const formSubmit = () => {
		axios.post('https://optom-tkani.kg/back/create_product.php', data)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error);
		});
	};

	const data = {
		category_id: picked_category,
		category_name: picked_category_name,
		description: text,
		color: color,
		compound: compound,
		length: length,
		width: width,
		density: density,
		country: country,
		currency: currency,
		price_for: price_for,
		price: price,
		can_i_order: '',
		time_to_deliver: '',
		pre_pay: '',
		discount: '',
		sale_start: '',
		sale_end: '',
		photo1: loaded1,
		photo2: loaded2,
		photo3: loaded3,
		photo4: loaded4,
	};

	return (
		<>
			<Header />
			<div className="content-wrapper">
				<div className="sidebar">
					<h4
						className="sidebar__title-name sidebar__title-name-paged"
					>
						Добавление товара
					</h4>
				</div>

				{step === 1 && (
					<Step1
						title1={'Загрузите фотографии'}
						title2={'Выберите категорию и добавьте описание'}
						handleCategoryPicker={handleCategoryPicker}
						picked_category_name={picked_category_name}
						loaded1={loaded1}
						loaded2={loaded2}
						loaded3={loaded3}
						loaded4={loaded4}
						handleFileChange1={handleFileChange1}
						handleFileChange2={handleFileChange2}
						handleFileChange3={handleFileChange3}
						handleFileChange4={handleFileChange4}
						text={text}
						handleTextChange={handleTextChange}
						nextStep={nextStep}
					/>
				)}

				{step === 2 && (
					<Step2
						nextStep={nextStep}
						prevStep={prevStep}
						colorChanger={colorChanger}
						color={color}
						compound={compound}
						compoundChanger={compoundChanger}
						length={length}
						lengthChanger={lengthChanger}
						width={width}
						widthChanger={widthChanger}
						density={density}
						densityChanger={densityChanger}
						country={country}
						countryChanger={countryChanger}
					/>
				)}
				{step === 3 && (
					<Step3
						price={price}
						price_for={price_for}
						handlePriceChanger={handlePriceChanger}
						handlePrice_forChanger={handlePrice_forChanger}
						currency={currency}
						handleCurrencyPicker={handleCurrencyPicker}
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				)}
				{step === 4 && (
					<Step4
						formSubmit={formSubmit}
						nextStep={nextStep}
						prevStep={prevStep}
						data={data}
					/>
				)}
				{step === 5 && <Step5 />}
			</div>
		</>
	);
}

export default CreateNewProductPage;
