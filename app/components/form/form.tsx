'use client';

import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import styles from './form.module.css';
import { Input } from '..';
import { countries, formats, genres, steps } from '@/app/constants';
import { formatUNFNumber, handleBlur } from '@/app/lib';

interface Props {
	methods: UseFormReturn;
	stepIndex: number;
	setStepIndex: (stepIndex: number) => void;
}

export const Form = ({ methods, stepIndex }: Props) => {
	const StepComponent = steps[stepIndex].component;

	return (
		<div>
			<StepComponent methods={methods} />
		</div>
	);
};

export function Step1({ methods }: Pick<Props, 'methods'>) {
	// Обновление localStorage при изменении данных в форме
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
		savedData[name] = value;
		localStorage.setItem('formData', JSON.stringify(savedData));
	};

	return (
		<FormProvider {...methods}>
			<div className={styles.form}>
				<div className={styles.column}>
					{/* Название проекта */}
					<Input
						className={styles.item}
						id={'projectName'}
						nameLabel={'Название проекта'}
						placeholder={'Название'}
						handleBlur={() => handleBlur(methods, 'projectName')}
						{...methods.register('projectName', {
							required: {
								value: true,
								message: 'Заполните поле',
							},
							onChange: handleChange,
						})}
					/>

					{/* Жанр */}
					<Input
						className={styles.item}
						id={'genre'}
						nameLabel={'Жанр'}
						htmlType={'select'}
						options={genres}
						handleBlur={() => handleBlur(methods, 'genre')}
						{...methods.register('genre', {
							required: {
								value: true,
								message: 'Выберите жанр',
							},
							onChange: handleChange,
						})}
					/>

					{/* Формат */}
					<Input
						className={styles.item}
						id={'format'}
						nameLabel={'Формат (для онлайн-платформ, большого экрана, интернета, другое)'}
						htmlType={'select'}
						options={formats}
						handleBlur={() => handleBlur(methods, 'format')}
						{...methods.register('format', {
							required: {
								value: true,
								message: 'Выберите формат',
							},
							onChange: handleChange,
						})}
					/>

					<Input
						className={styles.item}
						id={'projectUNF'}
						nameLabel={'№ УНФ или отсутствует'}
						placeholder={'890-000-000-00-000'}
						handleBlur={() => handleBlur(methods, 'projectUNF')}
						{...methods.register('projectUNF', {
							minLength: {
								value: 18,
								message: 'Введите 14 цифр',
							},
							maxLength: {
								value: 18,
								message: 'Введите 14 цифр',
							},
							onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
								const formattedValue = formatUNFNumber(event.target.value);
								methods.setValue('projectUNF', formattedValue);
								handleChange(event);
							},
						})}
						maxLength={18}
					/>
				</div>
				<div className={styles.column}>
					{/* Страна-производитель */}
					<Input
						className={styles.item}
						id={'countryProduction'}
						nameLabel={'Страна-производитель (копродукция)'}
						htmlType={'select'}
						options={countries}
						handleBlur={() => handleBlur(methods, 'countryProduction')}
						{...methods.register('countryProduction', {
							required: {
								value: true,
								message: 'Выберите страну',
							},
							onChange: handleChange,
						})}
					/>

					{/* Сметная стоимость */}
					<Input
						className={styles.item}
						id={'estimatedCost'}
						nameLabel={
							'Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть'
						}
						placeholder={'Сметная стоимость'}
						type='number'
						options={countries}
						handleBlur={() => handleBlur(methods, 'estimatedCost')}
						{...methods.register('estimatedCost', {
							onChange: handleChange,
							validate: (value) => {
								if (value < 0) {
									return 'Значение должно быть больше или равно нулю';
								}
								return true;
							},
						})}
					/>

					{/* Синопсис */}
					<Input
						className={styles.item}
						id={'Synopsis'}
						htmlType='textarea'
						nameLabel={'Синопсис'}
						placeholder={'Напишите краткое изложение'}
						handleBlur={() => handleBlur(methods, 'Synopsis')}
						{...methods.register('Synopsis', {
							onChange: handleChange,
						})}
					/>
				</div>
			</div>
		</FormProvider>
	);
}

export function Step2() {
	return <p>Страница 2</p>;
}
