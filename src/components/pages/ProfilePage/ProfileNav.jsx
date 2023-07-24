import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import avatar from '../../../assets/images/avatar.png';
import './Profile.scss';
import { seller, buyer } from '../../../data/data';
import { AuthContext } from '../../../auth';



function Profile() {
	const auth = useContext(AuthContext)
	const renderNav = auth.userdata.user_role == 'seller' ? seller : buyer;
	console.log(auth.userdata)
	if (window.innerWidth > 1439 && auth.userdata.user_role == 'seller') {
		return <Navigate to="/profile-seller" />;
	} else if (window.innerWidth > 1439 && auth.userdata.user_role == 'buyer') {
		return <Navigate to="/profile-buyer" />;
	} else if (!auth.userdata) {
		return <Navigate to="/registration" />;
	} else {
		return (
			<div className="profile-page">
				{window.innerWidth < 1439 ? null : <Header />}

				<div className="content-wrapper">
					<div
						className={
							auth.userdata.user_role == 'seller'
								? 'profile-content profile-content-s'
								: 'profile-content profile-content-b'
						}
					>
						<div className="avatar">
							<img src={avatar} alt="" />
							<div className="change-avatar">
								<svg
									className="img"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.45 6.05L14.825 9.425M2 14.825V18.875H6.05L18.875 6.05L14.825 2L2 14.825Z"
										stroke="white"
										strokeWidth="2.025"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div className="title">Покупатель</div>
						<div className="personal-nav-list">
							<Link to={auth.userdata.user_role == 'seller' ? '/profile-seller' : '/profile-buyer'}>
								<div className="personal-nav-list-item">
									<div className="content">
										<div className="img-container">
											<img src="https://i.ibb.co/74v0HDn/man.png" alt="" />
										</div>
										<h3 className="personal-nav-list-title">
											Редактировать профиль
										</h3>
									</div>
									<svg
										width="8"
										height="15"
										viewBox="0 0 24 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0.42424 36.4242L4.0202 40L24 20L4 -1.74846e-06L0.424243 3.57575L16.8485 20L0.42424 36.4242Z"
											fill="#1D5259"
										/>
									</svg>
								</div>
							</Link>

							{renderNav.map((item, index) => {
								return (
									<Link key={index} to={item.path} >
										<div className="personal-nav-list-item">
											<div className="content">
												<div className="img-container">
													<img src={item.icon} alt="" />
												</div>
												<h3 className="personal-nav-list-title">
													{item.name}
												</h3>
											</div>
											<svg
												width="8"
												height="15"
												viewBox="0 0 24 40"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0.42424 36.4242L4.0202 40L24 20L4 -1.74846e-06L0.424243 3.57575L16.8485 20L0.42424 36.4242Z"
													fill="#1D5259"
												/>
											</svg>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
				{window.innerWidth < 1439 ? null : <Footer />}
			</div>
		);
	}
}

export default Profile;
