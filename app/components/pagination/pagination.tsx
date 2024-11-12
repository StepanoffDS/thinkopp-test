import React from 'react';
import styles from './pagination.module.css';

interface Props {
	stepIndex: number;
	handleNext: () => void;
	handleBack: () => void;
	isValid: boolean;
	maxNum: number;
}

export const Pagination = ({
	stepIndex,
	handleNext,
	handleBack,
	isValid,
	maxNum,
}: Props) => {
	const isCurrentPage = (index: number) => {
		return stepIndex === index;
	};

	return (
		<div className={styles.pagination}>
			<button
				className={`${styles['item']} ${styles['prev']}`}
				disabled={stepIndex === 0}
				onClick={handleBack}
			>
				<svg
					width='19'
					height='16'
					viewBox='0 0 19 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.13385 7.99999L17.2294 7.99999M17.2294 7.99999L10.3313 1.11252M17.2294 7.99999L10.3313 14.8875'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
			<button className={`${styles['item']} ${isCurrentPage(0) && styles['active']}`}>
				1
			</button>
			<button className={`${styles['item']} ${isCurrentPage(1) && styles['active']}`}>
				2
			</button>
			<button className={`${styles['item']} ${isCurrentPage(2) && styles['active']}`}>
				...
			</button>
			<button className={`${styles['item']} ${isCurrentPage(3) && styles['active']}`}>
				4
			</button>
			<button
				className={`${styles['item']} ${styles['next']}`}
				disabled={stepIndex === maxNum || !isValid}
				onClick={handleNext}
			>
				<svg
					width='19'
					height='16'
					viewBox='0 0 19 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.13385 7.99999L17.2294 7.99999M17.2294 7.99999L10.3313 1.11252M17.2294 7.99999L10.3313 14.8875'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
		</div>
	);
};
