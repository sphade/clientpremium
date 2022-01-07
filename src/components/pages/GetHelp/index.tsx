import { Divider } from "@mui/material";
import React from "react";
import {
  CustomPhoneInput,
  PrimaryButton,
  PrimaryInput,
} from "../../../reusables";
import { helpInfo } from "./constant";

const GetHelp = () => {
  return (
    <div className="help">
      <div className="center">
        <div className="help__left help__card">
          {helpInfo.map(({ header, content, hasDivider }) => (
            <div className="help__left--info" key={header}>
              <h4>{header}</h4>
              {content.map(({ text, icon: Icon }, index) => (
                <div key={index}>
                  <div className="help__left--infoCard">
                    <Icon />
                    <p>{text}</p>
                  </div>
                </div>
              ))}
              {hasDivider && <Divider className="help__left--divider" />}
            </div>
          ))}
        </div>
        <div className="help__right help__card">
          <div className="help__right--header card">
            <h3 className="h3">HOW CAN WE HELP?</h3>
            <h5>We are always eager to attend to your need.</h5>
            <p>
              Fill the below contact form and we make sure to get back to you as
              soon as possible.
            </p>
          </div>
          <div className="help__right--form">
            <PrimaryInput
              placeholder="Full Name"
              name="fullName"
              label="Full Name"
            />
            <PrimaryInput placeholder="Email" name="email" label="Email" />
            <CustomPhoneInput name="Phone Number" />
            <PrimaryInput
              placeholder="Message"
              name="message"
              label="Message"
              multiline
              rows={4}
            />
            <PrimaryButton
              label="Submit"
              style={{ backgroundColor: "black" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
