

import React, { useState } from 'react';
import '../../assets/styles/global.scss';
import all_good from '../../assets/images/all_good_png.png'

function Step5({ prevStep, data, nextStep,formSubmit }) {
	return (
		<div className="content step4">
            <img style={{width:'350px'}} src={all_good} alt="" />
			<button className="pink-button" style={{marginTop: '20px'}} onClick={''}>
				Посмотреть карточку
			</button>
		</div>
	);
}

export default Step5;
