import React from 'react'
import { PrimaryButton } from '../../../../reusables'
import BaseModal from '../../../../reusables/BaseModal'
import Avatar from '../../../../assets/svgs/user-avatar.png';


const ChangeProfilePhoto = ({
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
            <div className="changePhoto__modal">
                <h3>UPDATE PROFILE PHOTO</h3>
                <div>

                <div className="changePhoto__modal--content">
                    <p>Add a clear picture of you.</p>
                      <div className="image--container">
                                <img src={Avatar} alt="user-avater" />
                                <div className="icon">
                                </div>
                            </div>
                        <p>Max file size 2MB</p>
                </div>
                
                <PrimaryButton
                    fullWidth
                    style={{backgroundColor:"black",}}
                    label="upload photo"
                />
                </div>
            </div>
        </BaseModal>
    )
}

export default ChangeProfilePhoto
