
import { Dialog, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';

import Login from './Login/login';
import SignUp from './SignUp/signup';


const Popup = ({ openPopup, setOpenPopup }) => {
    const [isLogin, setIsLogin] = useState(true);
    
    const handleClose = () => {
        setOpenPopup(false);
        setIsLogin(true);
    }

    return (
        <Dialog open={openPopup} onClose={handleClose}>
            <DialogContent>
                {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
            </DialogContent>
        </Dialog>
    )
    
}
export default Popup
