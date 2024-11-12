import { UseFormReturn } from 'react-hook-form';

export const handleBlur = async (methods: UseFormReturn, field: string) => {
	await methods.trigger(field);
};
