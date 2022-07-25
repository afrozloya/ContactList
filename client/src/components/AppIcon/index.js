import React from "react";
import emailSvg from "../../assets/images/email.svg";
import { ICON_MAP, IMG_ALT } from "../../constants/AppConstants";
import "./index.css"

export default function AppIcon(props) {
  const {iconType} =props;
  let selSvg = ICON_MAP[iconType] || emailSvg;
  return ( 
    <img src={selSvg} alt={IMG_ALT} className=" icon" />
  );
}
