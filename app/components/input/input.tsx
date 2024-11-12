'use client';

import React from 'react';
import styles from './input.module.css';
import { useFormContext } from 'react-hook-form';

type option = {
	id: number;
	value: string;
};

interface Props {
	className?: string;
	id: string;
	nameLabel: string;
	placeholder?: string;
	type?: 'text' | 'number';
	htmlType?: 'input' | 'select' | 'textarea';
	options?: option[];
	maxLength?: number;

	handleBlur: () => void;
}

export const Input = React.forwardRef<
	HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
	Props
>(
	(
		{
			className,
			id,
			nameLabel,
			placeholder,
			type = 'text',
			htmlType = 'input',
			options = [],
			handleBlur,
			maxLength,
		},
		ref
	) => {
		const {
			register,
			watch,
			formState: { errors },
		} = useFormContext();

		const value = watch(id);
		const errorText = errors[id]?.message as string;

		return (
			<div className={`${styles['input-container']} ${className}`}>
				<label htmlFor={id} className={styles['input-label']}>
					{nameLabel}
				</label>
				<div className={`${styles['input-wrapper']} ${className}`}>
					{htmlType === 'input' && (
						<input
							type={type}
							id={id}
							placeholder={placeholder}
							{...register(id)}
							onBlur={handleBlur}
							defaultValue={
								typeof value === 'string' || typeof value === 'number' ? value : ''
							}
							className={`${styles.input} ${errorText && styles['input-error']}`}
							maxLength={maxLength}
							ref={ref as React.Ref<HTMLInputElement>}
						/>
					)}

					{htmlType === 'select' && (
						<select
							id={id}
							{...register(id)}
							onBlur={handleBlur}
							className={`${styles.input} ${
								errorText && styles['input-error']
							} ${className}`}
							defaultValue={''}
							ref={ref as React.Ref<HTMLSelectElement>}
						>
							{options.map((option) => (
								<option key={option.id} value={option.id !== 0 ? option.value : ''}>
									{option.value}
								</option>
							))}
						</select>
					)}

					{htmlType === 'textarea' && (
						<textarea
							id={id}
							placeholder={placeholder}
							{...register(id)}
							className={`${styles.input} ${styles.textarea} ${className}`}
							defaultValue={''}
							ref={ref as React.Ref<HTMLTextAreaElement>}
						></textarea>
					)}

					{errorText && <span className={styles['error-message']}>{errorText}</span>}
				</div>
			</div>
		);
	}
);

Input.displayName = 'Input';
