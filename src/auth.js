import React, { createContext, useState} from 'react';

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
