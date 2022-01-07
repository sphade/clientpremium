import React from 'react'
import { CustomPhoneInput, PrimaryButton } from '../../../../reusables'
import BaseModal from '../../../../reusables/BaseModal'

const ChangePhoneNumberModal = ({
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
                <h3>Change Phone Number</h3>
                <CustomPhoneInput name="New Phone Number" />
                <PrimaryButton
                    style={{backgroundColor:"black"}}
                    label="change phone number"
                />
            </div>
        </BaseModal>
    )
}

export default ChangePhoneNumberModal
