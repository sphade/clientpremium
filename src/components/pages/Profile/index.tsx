import React, { Fragment, useState } from "react";
import { ProfileListItem } from "./components/widget";
import ChangePhoneNumberModal from "./components/ChangePhoneNumberModal";
import { ProfileItems } from "./constants";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit-bg.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/svgs/arrow-left-bg.svg";
import Avatar from "../../../assets/svgs/user-avatar.png";
import { useDialogHook } from "../../../hooks";
import ChangePasswordModal from "./components/ChangePasswordModal";
import ChangeProfilePhoto from "./components/ChangeProfilePhoto";

const Profile = () => {
  const [image, setImage] = useState("");

  const { open, toggleDialog: togglePhoneNumberModal } = useDialogHook();
  const { open: openPasswordModal, toggleDialog: togglePasswordModal } =
    useDialogHook();
  const { open: openChangePhotoModal, toggleDialog: toggleChangePhotoModal } =
    useDialogHook();

  // Handle Action
  const handleAction = (action: string) => {
    console.log(action);
    // Actions
    if (action === "Change PhoneNumber") {
      togglePhoneNumberModal();
    }
    if (action === "Change Password") {
      togglePasswordModal();
    }
  };

  return (
    <>
      <div className="profile booking-summary">
        <div className="center">
          <div className="profile__card">
            <div className="profile__card--header">
              <ArrowLeft />
              <h3>PROFILE SETTINGS</h3>
            </div>
            <div className="profile__content--details flex">
              <div className="left--content">
                <div className="image--container">
                  <img src={image ? image : Avatar} alt="user-avater" />
                  <div className="icon">
                    <EditIcon />
                  </div>
                </div>
                <button onClick={toggleChangePhotoModal}>Change Photo</button>
              </div>
              <div className="right--content">
                {ProfileItems.map((item) => (
                  <Fragment key={item.label}>
                    <ProfileListItem
                      detail={item}
                      handleAction={handleAction}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePhoneNumberModal
        openModal={open}
        closeModal={togglePhoneNumberModal}
      />
      <ChangePasswordModal
        openModal={openPasswordModal}
        closeModal={togglePasswordModal}
      />
      <ChangeProfilePhoto
        saveImage={(image) => setImage(image)}
        openModal={openChangePhotoModal}
        closeModal={toggleChangePhotoModal}
      />
    </>
  );
};

export default Profile;
