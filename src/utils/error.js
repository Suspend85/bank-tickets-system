const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден',
	INVALID_ARGUMENT: 'Неправильный аргумент',
	INVALID_PASSWORD: 'Неправильный пароль',
	auth: 'Пожалуйста войдите в систему',

	// API key not valid. Please pass a valid API key:
}

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unhandled error'
}