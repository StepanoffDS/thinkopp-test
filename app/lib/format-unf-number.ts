export const formatUNFNumber = (value: string) => {
	// Удаляем все, кроме чисел
	const cleaned = value.replace(/\D/g, '');

	// Форматируем вводимые данные
	const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,3})$/);
	if (match) {
		const formatted = [match[1], match[2], match[3], match[4], match[5]]
			.filter(Boolean)
			.join('-');

		return formatted;
	}
	return value;
};
