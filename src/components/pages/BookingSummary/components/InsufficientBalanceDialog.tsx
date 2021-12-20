import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../../../reusables'
import BaseModal from '../../../../reusables/BaseModal'
import { APP_ROUTES } from '../../../../routes/path'

const InsufficientBalanceDialog = ({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
}) => {
    return (
       <BaseModal maxWidth="sm" open={open} onClose={handleClose}>
            <div className="booking-summary__dialog">
                    <h3
                        className="primary-color h3"
                    >You have insufficient balance  in your wallet</h3>
                    <p
                    className="ash-color"
                    >Fund your wallet to continue with this charter</p>
                  
                      
                       <Link to={APP_ROUTES.wallet}>
                    <PrimaryButton label="go to wallet" />
                     </Link>
               </div>
                
        </BaseModal>
    )
}

export default InsufficientBalanceDialog
