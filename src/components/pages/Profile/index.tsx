import React, { Fragment, useState } from "react";
import { ProfileListItem } from "./components/widget";
import ChangePhoneNumberModal from "./components/ChangePhoneNumberModal";
import { ProfileItems } from "./constants";
import { ReactComponent as EditIcon } from "../../../assets/svgs/edit-bg.svg";
import { useDialogHook } from "../../../hooks";
import ChangePasswordModal from "./components/ChangePasswordModal";
import ChangeProfilePhoto from "./components/ChangeProfilePhoto";
import { fetchUserProfile } from "../../../routes/api";
import { useQuery } from "react-query";
import { CustomCard, Preloader } from "../../../reusables";
import useGlobalStoreProvider from "../../../context";
import UserAvatar from "./components/UserAvatar";
import ChangeEmailModal from "./components/ChangeEmailModal";

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
  const { open: openChangeEmailModal, toggleDialog: toggleChangeEmailModal } =
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
    if (action === "Change Email") {
      toggleChangeEmailModal();
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
      <CustomCard header="PROFILE SETTINGS">
        <div className="profile__content--details flex">
          <div className="left--content">
            <div className="image--container">
              {image ? <img src={image} alt="user-avater" /> : <UserAvatar />}
              <div className="icon">
                <EditIcon />
              </div>
            </div>
            <button onClick={toggleChangePhotoModal}>Change Photo</button>
          </div>
          <div className="right--content">
            {ProfileItems.map((item) => (
              <Fragment key={item.label}>
                <ProfileListItem detail={item} handleAction={handleAction} />
              </Fragment>
            ))}
          </div>
        </div>
      </CustomCard>

      <ChangePhoneNumberModal
        openModal={open}
        closeModal={togglePhoneNumberModal}
      />
      <ChangeEmailModal
        openModal={openChangeEmailModal}
        closeModal={toggleChangeEmailModal}
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
