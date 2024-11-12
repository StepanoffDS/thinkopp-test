import React from 'react';
import styles from './nav-button.module.css';

interface Props {
	type: 'prev' | 'next';
	isValid?: boolean;
	stepIndex: number;
	handleBack?: () => void;
	handleNext?: () => void;
	maxNum?: number;
}

export const NavButton = ({
	type,
	isValid,
	stepIndex,
	handleBack,
	handleNext,
	maxNum,
}: Props) => {
	if (type === 'prev') {
		return (
			<button
				disabled={stepIndex === 0}
				type='submit'
				className={`button ${styles['button-prev']}`}
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
				Предыдущий шаг
			</button>
		);
	}

	if (type === 'next') {
		return (
			<button
				disabled={!isValid || stepIndex === maxNum}
				type='submit'
				className={`button ${styles['button-next']}`}
				onClick={handleNext}
			>
				Следующий шаг
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
		);
	}
};
