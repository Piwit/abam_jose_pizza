import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { PhoneButton, AddressButton } from "@piwit/fitzgerald/components";
import {
  Nav,
  NavBrand,
  NavStart,
  NavEnd,
  NavMenu,
  NavItem,
  NavItemDropdown,
} from "@piwit/fitzgerald/sections";
import { useTranslation } from "react-i18next";

const Logo = ({ src, alt }) => <img src={src} alt={alt} height={200} />;


const NavSection = ({links, languages, phone, address, logo}) => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = isMenuOpen ? "is-active" : "";
  return (
    <Nav className="is-primary" isFixedTop>
      <NavBrand onChange={() => setIsMenuOpen(!isMenuOpen)} isActive={isActive}>
        <Logo src={logo.url} alt={logo.alt} />
      </NavBrand>
      <NavMenu isActive={isActive} className="has-background-primary">
        <NavStart>
          {links.map((link, index) => (
            <NavItem
              className="has-text-light no-hover-mobile"
              key={index}
              to={link.url}
              onClick={() => console.log("heho")}
            >
              {t([link.text])}
            </NavItem>
          ))}
        </NavStart>
        <NavEnd>
          <NavItem className="no-hover-mobile">
            <AddressButton addressUrl={address} addressText="Y-aller" />
          </NavItem>
          <NavItem className="no-hover-mobile">
            <PhoneButton phone={phone.value} text={phone.text} />
          </NavItem>
          <NavItemDropdown
            className="has-text-light"
            value={<FontAwesomeIcon icon={faLanguage} />}
            dropdownClassName="has-background-primary" isRight isBoxed>
            {
              languages.map((language, index) => (
                <a
                  onClick={() => {
                    i18n.changeLanguage(language.code);
                  }}
                  className="navbar-item has-background-primary has-text-light no-hover-mobile"
                  key={index}>
                  {language.code.toUpperCase()} - {language.name}
                </a>
              ))}
          </NavItemDropdown>
        </NavEnd>
      </NavMenu>
    </Nav>
  );
};

export { NavSection };
