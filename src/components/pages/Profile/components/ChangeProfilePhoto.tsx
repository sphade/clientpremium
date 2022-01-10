import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

import { PrimaryButton } from "../../../../reusables";
import BaseModal from "../../../../reusables/BaseModal";
import Avatar from "../../../../assets/svgs/user-avatar.png";

const styles = {
  uploadedBtn: {
    backgroundColor: "transparent",
    color: "black",
    margin: 0,
    border: "1px solid black",
  },
  notUploadedBtn: {
    backgroundColor: "black",
  },
};

const { uploadedBtn, notUploadedBtn } = styles;

const ChangeProfilePhoto = ({
  openModal,
  closeModal,
  saveImage,
}: {
  openModal: boolean;
  closeModal: () => void;
  // eslint-disable-next-line
  saveImage: (image: any) => void;
}) => {
  // eslint-disable-next-line
  const [images, setImages] = React.useState<any[]>([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const addImage = () => {
    if (images.length > 0) {
      saveImage(images[0].data_url);
      closeModal();
    }
  };

  return (
    <BaseModal maxWidth="sm" open={openModal} onClose={closeModal}>
      <div className="changePhoto__modal">
        <h3>UPDATE PROFILE PHOTO</h3>
        <div>
          <ImageUploading
            multiple={false}
            value={images}
            onChange={onChange}
            // maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, isDragging, dragProps }) => {
              const hasUploadedImage = imageList.length > 0;
              return (
                // write your building UI
                <div className="upload__image-wrapper">
                  <div className="changePhoto__modal--content">
                    <p>Add a clear picture of you.</p>
                    {!hasUploadedImage && (
                      <div
                        {...dragProps}
                        onChange={onImageUpload}
                        className="image--container"
                      >
                        {isDragging ? (
                          "Uploading"
                        ) : (
                          <img src={Avatar} alt="user-avater" />
                        )}
                        <div className="icon"></div>
                      </div>
                    )}
                    {imageList.map((image, index) => (
                      <div key={index} className="image--container">
                        <img
                          {...dragProps}
                          onChange={onImageUpload}
                          src={image.data_url}
                          alt="user-avater"
                        />
                        <div className="icon"></div>
                      </div>
                    ))}
                    <p>Max file size 2MB</p>
                  </div>
                  <div
                    className="flex"
                    style={{ gap: "1rem", justifyContent: "center" }}
                  >
                    <PrimaryButton
                      small
                      {...dragProps}
                      onClick={onImageUpload}
                      style={hasUploadedImage ? uploadedBtn : notUploadedBtn}
                      label={
                        imageList.length > 0 ? "Change Photo" : "upload photo"
                      }
                    />
                    {hasUploadedImage && (
                      <PrimaryButton
                        style={{
                          backgroundColor: "black",
                          minWidth: "120px",
                          margin: "0",
                        }}
                        onClick={addImage}
                        label={"Save"}
                      />
                    )}
                  </div>
                </div>
              );
            }}
          </ImageUploading>
        </div>
      </div>
    </BaseModal>
  );
};

export default ChangeProfilePhoto;
