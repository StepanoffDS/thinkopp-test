'use client';

import React from 'react';
import styles from './page.module.css';
import { Form, NavButton, Pagination } from './components';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { handleReset } from './lib';
import { steps } from './constants';

export interface IFormData {
	projectName: string;
	genre: string;
	format: string;
	projectUNF: string;
	countryProduction: string;
	estimatedCost: string;
	Synopsis: string;
}

export default function Home() {
	const isMounted = React.useRef(false);
	const [stepIndex, setStepIndex] = React.useState(0);

	const handleNext = () => {
		setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
	};
	const handleBack = () => {
		setStepIndex((prev) => Math.max(prev - 1, 0));
	};

	const methods = useForm();
	const {
		setValue,
		formState: { isValid },
		trigger,
		handleSubmit,
	} = methods;

	// Отправка данных в localStorage
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const formData: IFormData = data as IFormData;
		localStorage.setItem('formData', JSON.stringify(formData));
		console.log('Данные сохранены в localStorage:', formData);

		handleNext();
	};

	const handleFormSubmit = async () => {
		const isValid = await trigger(); // Запускаем валидацию
		if (isValid) {
			handleSubmit(onSubmit)(); // Если форма валидна, вызываем onSubmit
		}
	};

	// Проверка валидности формы
	React.useEffect(() => {
		const checkValidity = async () => {
			const isOk = await trigger();
			console.log('checkValidity');
			if (!isOk) {
				setStepIndex(0);
				localStorage.setItem('currentStep', stepIndex.toString());
			}
		};

		if (!!localStorage.getItem('formData')) {
			checkValidity();
		} else {
			isMounted.current = true;
		}
	}, [trigger, stepIndex]);

	// Загрузка данных из localStorage
	React.useEffect(() => {
		const savedData = localStorage.getItem('formData');
		if (savedData) {
			const parsedData = JSON.parse(savedData);

			for (const key in parsedData) {
				setValue(key, parsedData[key]);
			}
		}
	}, [setValue]);

	return (
		<div className={styles.home}>
			<div className='container'>
				<div className={styles.inner}>
					<header className={styles.header}>
						<h1 className={styles.title}>Производственные параметры фильма</h1>
						<button onClick={() => handleReset(methods)} className={'button'}>
							Отменить заполнение
						</button>
					</header>
					<main className={styles.content}>
						<Form methods={methods} stepIndex={stepIndex} setStepIndex={setStepIndex} />
					</main>
					<footer className={styles.footer}>
						<NavButton
							type='prev'
							isValid={isValid}
							stepIndex={stepIndex}
							handleBack={handleBack}
						/>
						<Pagination
							stepIndex={stepIndex}
							handleNext={handleNext}
							handleBack={handleBack}
							isValid={isValid}
							maxNum={steps.length - 1}
						/>
						<NavButton
							type='next'
							isValid={isValid}
							stepIndex={stepIndex}
							handleNext={handleFormSubmit}
							maxNum={steps.length - 1}
						/>
					</footer>
				</div>
			</div>
		</div>
	);
}
