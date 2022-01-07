import React from 'react'
import { PrimaryButton, PrimaryInput } from '../../../../reusables'
import BaseModal from '../../../../reusables/BaseModal'

const ChangePasswordEmail = ({
    openModal,
    closeModal,
}: {
    openModal: boolean;
    closeModal: () => void;
}) => {
    return (
       <BaseModal
       maxWidth="sm"
       open={openModal} onClose={closeModal}>
            <div className="phoneNumber__modal">
                <h3>Change Password</h3>
                <div>

                 <PrimaryInput
                    placeholder="Old Password"
                    name="oldPassword"
                    type="password"
                    label="Old Password"
                />
                 <PrimaryInput
                    placeholder="New Password"
                    name="password"
                    type="password"
                    label="New Password"
                />
                 <PrimaryInput
                    placeholder="Confirm Password"
                    name="password"
                    type="password"
                    label="Confirm Password"
                />
                <PrimaryButton
                    style={{backgroundColor:"black"}}
                    label="change phone number"
                />
                </div>
            </div>
        </BaseModal>
    )
}

export default ChangePasswordEmail
