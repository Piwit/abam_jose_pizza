import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Columns, Col, SocialMedias } from "@piwit/fitzgerald/components";
import { useTranslation } from "react-i18next";

const FooterSection = ({name, motto, hours, address, phone, contact, socialMedias}) => {
  const { t } = useTranslation();
  return (
    <footer className="footer has-background-primary p-5">
      <Columns>
        <Col className="is-offset-1 is-5">
          <div className="content has-text-left has-text-light">
            <h3 className="title is-3 has-text-light">{name}</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <a href={address.value} className="has-text-light link-underline">
                {address.text}
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a
                href={`tel:${phone.value}`}
                className="has-text-light link-underline"
              >
                {phone.text}
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a
                href={`mailto:${contact.value}`}
                className="has-text-light link-underline"
              >
                {contact.text}
              </a>
            </p>
          </div>
        </Col>
        <Col className="is-5">
          <div className="content has-text-right has-text-centered-mobile has-text-light">
            <SocialMedias
              className="has-text-light"
              socialMedias={socialMedias}
            />
            <p>{t(motto)}</p>
            <p>{t(hours)}</p>
          </div>
        </Col>
      </Columns>
      <Columns>
        <Col>
          <div className="content has-text-centered has-text-light">
            <p>{t(name)} - 2024</p>
          </div>
        </Col>
      </Columns>
    </footer>
  );
};

export { FooterSection };
