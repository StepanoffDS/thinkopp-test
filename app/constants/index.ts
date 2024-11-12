import { Step1, Step2 } from '../components/form/form';

export const genres = [
	{
		id: 0,
		value: 'Жанр',
	},
	{
		id: 1,
		value: 'Драма',
	},
	{
		id: 2,
		value: 'Комедия',
	},
	{
		id: 3,
		value: 'Ужасы',
	},
	{
		id: 4,
		value: 'Фантастика',
	},
	{
		id: 5,
		value: 'Другое',
	},
];

export const formats = [
	{
		id: 0,
		value: 'Формат',
	},
	{
		id: 1,
		value: 'Онлайн-платформа',
	},
	{
		id: 2,
		value: 'Большой экран',
	},
	{
		id: 3,
		value: 'Интернет',
	},
	{
		id: 4,
		value: 'Другое',
	},
];

export const countries = [
	{
		id: 0,
		value: 'Страна',
	},
	{
		id: 1,
		value: 'Россия',
	},
	{
		id: 2,
		value: 'США',
	},
	{
		id: 3,
		value: 'Великобритания',
	},
	{
		id: 4,
		value: 'Канада',
	},
];

export const steps = [
	{
		component: Step1,
		title: 'Шаг 1',
	},
	{
		component: Step2,
		title: 'Шаг 2',
	},
];
