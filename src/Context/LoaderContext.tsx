import React, { useContext, useState, createContext, useEffect } from 'react';

interface Props {
	children: React.ReactNode;
}

/* eslint-disable */
const LoaderContext = createContext({
	loading: false,
	setLoading: (loading: any) => console.log({ loading }),
});
export const useSetLoader = () => useContext(LoaderContext);

export const LoaderProvider: React.FC<Props> = ({ children }) => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		console.log({ loading });
	}, [loading]);
	return (
		<LoaderContext.Provider value={{ loading, setLoading }}>
			{children}
		</LoaderContext.Provider>
	);
};
