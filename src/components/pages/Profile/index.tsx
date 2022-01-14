import React, { Fragment, useState } from "react";
import { ProfileListItem } from "./components/widget";
import ChangePhoneNumberModal from "./components/ChangePhoneNumberModal";
import { ProfileItems } from "./constants";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit-bg.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/svgs/arrow-left-bg.svg";
import { useDialogHook } from "../../../hooks";
import ChangePasswordModal from "./components/ChangePasswordModal";
import ChangeProfilePhoto from "./components/ChangeProfilePhoto";
import { fetchUserProfile } from "../../../routes/api";
import { useQuery } from "react-query";
import { Preloader } from "../../../reusables";
import useGlobalStoreProvider from "../../../context";

const Profile = () => {
  const { state } = useGlobalStoreProvider();

  const { user } = state;

  const {
    isLoading,
    error,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data = [],
  } = useQuery("fetcUserProfile", fetchUserProfile);

  const [image, setImage] = useState(user?.photo || "");

  const { open, toggleDialog: togglePhoneNumberModal } = useDialogHook();
  const { open: openPasswordModal, toggleDialog: togglePasswordModal } =
    useDialogHook();
  const { open: openChangePhotoModal, toggleDialog: toggleChangePhotoModal } =
    useDialogHook();

  // Handle Action
  const handleAction = (action: string) => {
    // Actions
    if (action === "Change PhoneNumber") {
      togglePhoneNumberModal();
    }
    if (action === "Change Password") {
      togglePasswordModal();
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <h3>Error Fetching</h3>;
  }

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
                  <img
                    src={image ? image : "https://via.placeholder.com/150"}
                    alt="user-avater"
                  />
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
