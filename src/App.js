import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './assets/styles/global.scss?v=pre_deploy_version';
import NavMobile from './components/NavMobile/NavMobile';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Home from './components/pages/HomePage/Home';
import Categories from './components/pages/Categories/Categories';
import ProfileSeller from './components/pages/ProfilePage/ProfileSeller';
import ProfileBuyer from './components/pages/ProfilePage/ProfileBuyer';
import ProfileNav from './components/pages/ProfilePage/ProfileNav';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';
import AuthorizationPage from './components/pages/RegistrationPage/AuthorizationPage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import UpgradeAccPage from './components/pages/ProfilePage/ProfilePageClones/UpgradeAccPage';
import { AuthContext } from './auth';
import CreateNewProductPage from './components/CreateNewProductPage';

const App = () => {
	const auth = useContext(AuthContext);

	useEffect(() => {
		const JsonFromLocal = localStorage.getItem('userData')
		const data = JSON.parse(JsonFromLocal)
		auth.setUserdata(data)
	}, []);

	useEffect(() => {

	}, [auth.userdata]);

	return (
		<>
			<BrowserRouter>
				{window.innerWidth < 1439 ? <NavMobile /> : null}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/profile-seller" element={<ProfileSeller />} />
					<Route path="/profile-buyer" element={<ProfileBuyer />} />
					<Route path="/profile" element={<ProfileNav />} />
					<Route path="/registration" element={<RegistrationPage />} />
					<Route path="/login" element={<AuthorizationPage />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/upgrade-account" element={<UpgradeAccPage />} />

					<Route path="/create" element={<CreateNewProductPage />} />
					<Route />
					<Route />
					<Route />
					<Route />
					<Route />
					<Route />
					<Route />

					{/* <Route path="/test" element={<Test />} /> */}
					{/* Роутинг на страницу 404 */}
					{/* <Route path="*" element={<Page404 />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
