import React, { createContext, useState} from 'react';

localStorage.setItem('userData', JSON.stringify({"id":"4","user_name":"sadf","user_phone":"+79965914513","user_address":null,"user_avatar":null,"user_role":"buyer","fav_prods":null,"fav_shops":null,"shop_name":"1","shop_desc":"1","shop_address":"1","my_prods":null,"orders":null,"rating":null,"reg_date":"2023-07-24","user_password":"$2y$10$xjyTjHowoxoIMyn8Gbi7nOTSOX7pAGAyd3U4en2NuLQncUDbbLpbK"}));

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0IiwicGhvbmUiOiIrNzk5NjU5MTQ1MTMiLCJleHAiOjE2OTAzNzMzNjF9.yD_SFwTu4OaOLFTAo0LGwcL_nbKxX-TRUxgK-w4-O9M');

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [isAuth, setIsAuth] = useState(false)
	const [userdata, setUserdata] = useState({});
	const [products, setProducts] = useState({});

	const saveToken = (userToken) => {
		setToken(userToken);
		localStorage.setItem('token', userToken);
	};

	const removeToken = () => {
		setToken(null);
		localStorage.removeItem('token');
	};

	useState(() => {
		const savedToken = localStorage.getItem('token');
		if (savedToken) {
			setIsAuth(true);
			setToken(savedToken);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				isAuth,
				setIsAuth,
				userdata,
				setUserdata,
				products,
				setProducts,
				saveToken,
				removeToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
