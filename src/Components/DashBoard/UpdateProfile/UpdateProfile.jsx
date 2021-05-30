import React, { useState } from 'react';
import './UpdateProfile.css';
import Avatar from '@material-ui/core/Avatar';
import { Button, Dialog, DialogContent } from '@material-ui/core';

const UpdateProfile = ({ user, open, setOpen }) => {
	const [name, setName] = useState(user?.username);
	const [bio, setBio] = useState(user?.bio);
	const [image, setImage] = useState(
		user && `http://localhost:5000/${user.image}`
	);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='UpdateProfile'>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<div className='ProfilePopUp'>
						<h1>Update Your Details</h1>
						<form className='edit-profile'>
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
						</form>
						<div className='uploadimg'>
							Image
							<Avatar
								src={image}
								variant='square'
								style={{
									width: 380,
									height: 300,
									borderRadius: 5,
								}}
							>
								<div className='uploadbtn'>
									<Button>Upload Image</Button>
								</div>
							</Avatar>
						</div>
						<div className='updatebtn'>
							<Button>Update Profile</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
export default UpdateProfile;
