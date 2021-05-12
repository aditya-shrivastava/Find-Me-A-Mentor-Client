import { useState, useCallback, useEffect, useRef } from 'react';
import axios from '../api/axios';
import { default as ax } from 'axios';

export const useAuth = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	let cancelTokenSource = useRef();

	const authenticate = useCallback(async (isLogin, data) => {
		setIsLoading(true);
		cancelTokenSource.current = ax.CancelToken.source();

		try {
			let response;
			if (isLogin) {
				response = await axios.post('/auth/login', data, {
					cancelToken: cancelTokenSource.current.token,
				});
			} else {
				response = await axios.post('/auth/register', data, {
					cancelToken: cancelTokenSource.current.token,
				});
			}

			const { user } = response.data;

			setIsLoading(false);
			return user;
		} catch (err) {
			const { error } = err.response.data;
			setError(error);
			setIsLoading(false);
			throw error;
		}
	}, []);

	useEffect(() => {
		return () => {
			cancelTokenSource.current?.cancel();
		};
	}, [cancelTokenSource]);

	return { isLoading, error, authenticate };
};
