import { useState, useCallback, useEffect, useRef } from 'react';
import api from '../api';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

export const useAuth = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	let cancelTokenSource = useRef();

	const authenticate = useCallback(
		async (isLogin, data) => {
			setIsLoading(true);
			cancelTokenSource.current = axios.CancelToken.source();

			try {
				let response;
				if (isLogin) {
					response = await api.post('/auth/login', data, {
						cancelToken: cancelTokenSource.current.token,
					});
				} else {
					response = await api.post('/auth/register', data, {
						cancelToken: cancelTokenSource.current.token,
					});
				}

				const { user, token } = response.data;
				dispatch(login({ user, token }));

				setIsLoading(false);
			} catch (err) {
				const { error } = err.response.data;
				setError(error);
				setIsLoading(false);
				throw error;
			}
		},
		[dispatch]
	);

	useEffect(() => {
		return () => {
			cancelTokenSource.current?.cancel();
		};
	}, [cancelTokenSource]);

	return { isLoading, error, authenticate };
};
