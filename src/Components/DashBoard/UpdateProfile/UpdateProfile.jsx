import React, { useState } from 'react';
import './UpdateProfile.css';
import api from '../../../api';

import { useDispatch } from 'react-redux';
import { update } from '../../../features/userSlice';

import Avatar from '@material-ui/core/Avatar';
import { Button, Dialog, DialogContent } from '@material-ui/core';

const UpdateProfile = ({ user, open, setOpen }) => {
	const dispatch = useDispatch();
	const { token } = JSON.parse(localStorage.getItem('userData'));

	const [name, setName] = useState(user?.username);
	const [bio, setBio] = useState(user?.bio);
	const [image, setImage] = useState(
		user && `http://localhost:5000/${user.image}`
	);

	const handleClose = () => {
		setOpen(false);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		let editedData = {};

		if (user.username !== name) editedData.username = name;
		if (user.bio !== bio) editedData.bio = bio;

		if (Object.keys(editedData).length === 0) {
			return;
		}

		try {
			const response = await api.patch(`/user/${user.uid}`, editedData, {
				headers: {
					Authorization: token,
				},
			});

			const updatedUser = response.data.user;

			dispatch(update(updatedUser));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='UpdateProfile'>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<div className='ProfilePopUp'>
						<h1>Update Your Details</h1>
						<form
							onSubmit={handleFormSubmit}
							className='edit-profile'
						>
							<div className='input-field'>
								Username
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type='text'
								/>
							</div>
							<div className='input-field'>
								Bio
								<input
									type='text'
									value={bio}
									onChange={(e) => setBio(e.target.value)}
								/>
							</div>
							<div className='uploadimg'>
								Image
								<img src={image} alt='user' />
								<div className='uploadbtn'>
									<Button>Upload Image</Button>
								</div>
							</div>
							<div className='updatebtn'>
								<Button type='submit'>Update Profile</Button>
							</div>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
export default UpdateProfile;
