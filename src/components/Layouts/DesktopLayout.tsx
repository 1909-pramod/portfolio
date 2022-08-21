import React from 'react';
import { useSetLoader } from '../../Context/LoaderContext';
import Catalog from '../Catalog/Catalog';
import styles from './Layout.module.scss';

interface Props {
	children: React.ReactNode;
}

const DesktopLayout: React.FC<Props> = ({ children }) => {
	const { loading } = useSetLoader();
	return (
		<div className={`${styles['container-ds']}`}>
			<div
				className={`${styles['scroll-container-ds']}  ${
					loading ? styles['scroll-loading-ds'] : ''
				}`}
			>
				<div className={styles['curve-ds']}></div>
				<div className={styles['content-ds']}>{children}</div>
			</div>
			<div className={styles['catalog-ds']}>
				<Catalog />
			</div>
		</div>
	);
};

export default DesktopLayout;
