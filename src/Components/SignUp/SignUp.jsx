import React, { useState } from 'react';
import './SignUp.css';

import { useAuth } from '../../hooks/auth-hook';

import { Button, CircularProgress } from '@material-ui/core';

const SignUp = ({ setIsLogin, setOpenPopup }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const { isLoading, error, authenticate } = useAuth();

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			await authenticate(false, {
				username,
				email,
				password,
			});

			setUsername('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
			setOpenPopup(false);
		} catch (error) {}
	};

	return (
		<React.Fragment>
			{error && (
				<h1 className='text-red-500 text-center text-lg'>{error}</h1>
			)}
			<div className='signup'>
				<div className='head'>
					<h3>Find Me A Mentor</h3>
					<h1>New Here?</h1>
					Create an account to get started.
				</div>
				<form onSubmit={handleSignup} className='signup-form'>
					<div className='input-field'>
						Username
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className='input-field'>
						Email
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='input-field'>
						Password
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='input-field'>
						ConfirmPassword
						<input
							type='password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<Button
						variant='contained'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <CircularProgress /> : 'Create Account'}
					</Button>
				</form>

				<div className='lower'>
					<span>Already Have An Account? </span>
					<div className='create' onClick={() => setIsLogin(true)}>
						{' '}
						Login{' '}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default SignUp;
