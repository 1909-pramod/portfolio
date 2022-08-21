import React from 'react';
import { useSetLoader } from '../../Context/LoaderContext';

const Content: React.FC = () => {
	const { setLoading } = useSetLoader();
	return (
		<button onClick={() => setLoading((prev: any) => !prev)}>button</button>
	);
};

export default Content;
