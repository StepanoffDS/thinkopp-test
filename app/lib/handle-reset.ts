import { UseFormReturn } from 'react-hook-form';

export const handleReset = (methods: UseFormReturn) => {
	methods.reset({
		projectName: '',
		genre: '',
		format: '',
		projectUNF: '',
		countryProduction: '',
		estimatedCost: '',
		Synopsis: '',
	});

	localStorage.removeItem('formData');
};
