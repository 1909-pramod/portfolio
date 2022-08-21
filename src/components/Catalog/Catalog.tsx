import React from 'react';
import { useSetLoader } from '../../Context/LoaderContext';
import styles from './Catalog.module.scss';

// interface Props {}

const catalogItems = [
	{ display: 'Profile', key: 'profile' },
	{ display: 'About Me', key: 'aboutme' },
	{ display: 'Skills', key: 'skills' },
	{ display: 'Projects', key: 'projects' },
];

const Catalog: React.FC = () => {
	const { loading, setLoading } = useSetLoader();
	const listClickHandler = (key: string) => {
		console.log({ key });
		setLoading(() => true);
		setTimeout(() => setLoading(() => false), 500);
	};
	return (
		<div
			className={`${styles['catalog-container']} ${
				loading ? styles['catalog-container-loading'] : ''
			}`}
		>
			<h1>Catalog</h1>
			<div className={styles['catalog-list']}>
				{catalogItems.map(item => (
					<div
						className={styles['catalog-list-item']}
						onClick={() => listClickHandler(item.key)}
						key={item.key}
					>
						{item.display}
					</div>
				))}
			</div>
		</div>
	);
};

export default Catalog;
