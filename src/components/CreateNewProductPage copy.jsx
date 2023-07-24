import React, { useState } from 'react';
import Header from './Header/Header';
import Step1 from '../components/create-steps/Step1';
import Step2 from '../components/create-steps/Step2';
import Step3 from '../components/create-steps/Step3';
import Step4 from '../components/create-steps/Step4';
import Step5 from '../components/create-steps/Step5';

function CreateNewProductPage() {
	const [img1, setImg1] = useState('')
	const [img2, setImg2] = useState('')
	const [img3, setImg3] = useState('')
	const [img4, setImg4] = useState('')
	const imgDataTaker = () => {
		
	};


	const [picked_category_name, set_picked_category_name] = useState('');
	const [picked_category, set_picked_category] = useState('');
	const handleCategoryPicker = (id, name) => {
		set_picked_category(id);
		set_picked_category_name(name);
	};




	return (
		<>
			<Header />
			<div className="content-wrapper">
				<div className="sidebar">
					<h4 className="sidebar__title-name sidebar__title-name-paged">
						Добавление товара
					</h4>
				</div>

				<Step1
					title1={'Загрузите фотографии'}
					title2={'Выберите категорию и добавьте описание'}
					categoryPicker = {handleCategoryPicker}
				/>

				{/* <Step2 /> */}
				{/* <Step3 /> */}
				{/* <Step4 /> */}

			</div>
		</>
	);

	const data = {
		category_id : '',
		description : '',
		color : '',
		compound : '',
		length : '',
		width : '',
		density : '',
		country : '',
		currency : '',
		price_for : '',
		price : '',
		can_i_order : '',
		time_to_deliver : '',
		pre_pay : '',
		discount : '',
		sale_start : '',
		sale_end : '',
		photo1 : '',
		photo2 : '',
		photo3 : '',
		photo4 : '',
	};
}

export default CreateNewProductPage;
