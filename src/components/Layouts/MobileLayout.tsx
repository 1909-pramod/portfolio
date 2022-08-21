import React from 'react';
import { useSetLoader } from '../../Context/LoaderContext';
import Catalog from '../Catalog/Catalog';
import styles from './Layout.module.scss';

interface Props {
	children: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }) => {
	const { loading } = useSetLoader();
	return (
		<div className={`${styles['container-mb']}`}>
			<div
				className={`${styles['scroll-container-mb']}  ${
					loading ? styles['scroll-loading-mb'] : ''
				}`}
			>
				<div className={styles['curve-mb']}></div>
				<div className={styles['content-mb']}>{children}</div>
			</div>
			<div className={styles['catalog-mb']}>
				<Catalog />
			</div>
		</div>
	);
};

export default MobileLayout;
