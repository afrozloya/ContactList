import React from "react";
import emailSvg from "../../assets/images/email.svg";
import locationSvg from "../../assets/images/location.svg";
import phoneSvg from "../../assets/images/phone.svg";
import { ICON_EMAIL, ICON_LOCATION, ICON_PHONE } from "../../constants/AppConstants";
import "./index.scss"

export default function AppIcon(props) {
  const {iconType} =props;
  let selSvg = emailSvg;
  switch (iconType) {
    case ICON_EMAIL:
      selSvg = emailSvg
      break;  
    case ICON_LOCATION:
      selSvg = locationSvg
      break;  
    case ICON_PHONE:
      selSvg = phoneSvg
      break;  
  }
  return ( 
    <img src={selSvg} alt="" className=" icon" />
  );
}
