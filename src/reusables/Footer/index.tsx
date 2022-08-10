import React from "react";
import FullLogo from "../../assets/images/logo-premium.png";
import { ReactComponent as LocationIcon } from "../../assets/svgs/location.svg";
import { ReactComponent as CallIcon } from "../../assets/svgs/Call.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp.svg";
import { ReactComponent as MessageIcon } from "../../assets/svgs/message-icon.svg";
import { ReactComponent as ChevronRight } from "../../assets/svgs/chevron-right.svg";
import { socialMediaLinks } from "./constants";
import NewsLetterInput from "../Input/NewsLetterInput";

export const contactLinks = [
  {
    icon: <LocationIcon />,
    text: `Chartered Institute of Logistics and Transport 
        4th Floor, 15b Awolowo Road, Ikoyi, Lagos.`,
  },
  {
    icon: <LocationIcon />,
    text: `No. 4, Mike Akhigbe Street, Jabi, Abuja`,
  },
  {
    icon: <CallIcon />,
    text: `+234 906 203 2000
       `,
  },
  {
    icon: <CallIcon />,
    text: `
        +234 906 203 4000
       `,
  },
  {
    icon: <WhatsappIcon />,
    text: `
        Whatsapp Message
        `,
  },
  {
    icon: <MessageIcon />,
    text: `
        hello@bossbusworld.com`,
  },
 // link:'mailto:hello@bossbusworld.com'
];

export const pageLinks = [
  [
    { text: "Home", link: "www.bossbusworld.com" },
    { text: "Services", link: "" },
    { text: "About Us", link: "about" },
    { text: "Careers", link: "" },
    { text: "Partnership", link: "" },
  ],
  [
    { text: "Blog", link: "" },
    { text: "New", link: "" },
    { text: "Developers", link: "" },
  ],
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center">
        <div className="footer__top">
          <div className="footer__top--left">
            <img src={FullLogo} alt="logo" className="full-logo" />
            <p>
              Bossbus is owned and managed by Founders and Innovators Limited
            </p>
          </div>
          <div className="footer__top--right">
            <h5>Stay Updated, Subscribe to our Newsletter.</h5>
            <NewsLetterInput />
          </div>
        </div>
      </div>
      <div className="horizontal-divider"></div>
      <div className="center">
        <div className="footer__bottom">
          <div className="footer__bottom--left">
            <h5>Contact</h5>
            <ul className="content">
              {contactLinks.map(({ icon: Icon, text }, id) => (
                <li key={id}>
                  {Icon}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__bottom--left right">
            <h5>Pages</h5>
            <div className="content flex content--secondary">
              {pageLinks.map((link, id) => (
                <div key={id}>
                  {link.map(({ text, link }, index) => (
                      <a href={link} key={index} className="text-white">
                    <p >
                        <ChevronRight />
                        <span>{text} </span>
                    </p>
                      </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__copyrights">
          <h3>Copyright 2022 Founders and Innovators</h3>
          <div className="footer__copyrights--links">
            {socialMediaLinks.map(({ icon: Icon, id, link }) => (
              <div key={id}>
                <a href={link}>
                  <Icon />
                </a>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
