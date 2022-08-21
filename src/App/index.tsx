import React from 'react';
import Content from '../components/Content';
import DesktopLayout from '../components/Layouts/DesktopLayout';
import MobileLayout from '../components/Layouts/MobileLayout';
import { LoaderProvider } from '../Context/LoaderContext';
import styles from './App.module.scss';

const App: React.FC = () => {
	return (
		<LoaderProvider>
			<div className={styles['app']}>
				<DesktopLayout>
					<Content />
				</DesktopLayout>
				<MobileLayout>
					<Content />
				</MobileLayout>
			</div>
		</LoaderProvider>
	);
};

export default App;
