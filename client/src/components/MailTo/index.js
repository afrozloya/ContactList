import React from "react";
import { MAIL_BODY, MAIL_SUBJECT } from "../../constants/AppConstants";

export default function Mailto({ email, subject, body }) {
  return (
    <a href={`mailto:${email}?subject=${subject || MAIL_SUBJECT}&body=${body || MAIL_BODY}`}>
      {email}
    </a>
  );
}