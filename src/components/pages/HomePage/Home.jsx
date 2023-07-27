import React, {useState} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import HomeContent from '../../HomeContent/HomeContent';
import { categories } from '../../../data/data.js';

function Home() {

	return (
		<>
			<Header />
            <div className="content-wrapper">
                <Sidebar list={categories} title={"Категории"} toPath={"/categories"}/>
				<HomeContent/>
            </div>
			<Footer />
		</>
	);
}

export default Home;
