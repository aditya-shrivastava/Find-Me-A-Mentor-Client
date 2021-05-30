import React, { useState } from 'react';
import './UpdateProfile.css';
import Avatar from '@material-ui/core/Avatar';
import { Button, Badge, Dialog, DialogContent } from '@material-ui/core';

const UpdateProfile = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='UpdateProfile'>
            <button onClick={handleClickOpen}>
                Update Profile
            </button>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <div className='ProfilePopUp'>
                        <h1>Update Your Details</h1>
                        <form className='edit-profile'>
                            <div className='input-field'>
                                Username
                                <input type='text' />
                            </div>
                            <div className='input-field'>
                                Bio
                                <input type='text' />
                            </div>
                        </form>
                        <div className='uploadimg'>
                            Image
                            <Avatar variant='square' style={{ width: 380, height: 300, borderRadius: 5 }}>
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
    )
}
export default UpdateProfile