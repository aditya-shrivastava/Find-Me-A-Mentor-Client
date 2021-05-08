import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';


const Popup = (props) => {
    
    const {children, openPopup, setOpenPopup} = props;
    
    return (
        <Dialog open={openPopup}>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
    
}
export default Popup
