import React, { useState } from "react";
import { graphql } from "gatsby";
import Menu from "../components/menu";
import { FooterSection } from "../components/footer";
import { NavSection } from "../components/navbar";
import { useTranslation } from "react-i18next";

const MenuPage = ({ data }) => {
  const menuHandle = process.env.GATSBY_ABAM_MENU;
  const menus = data.allMenu.edges;
  const selectedMenus = menus.filter((menu) => menu.menu.handle === menuHandle);
  const [unavailableDish, setUnavailableDish] = useState(new Set());
  return (
    <>
      <NavSection
        links={data.restaurant.navigation}
        languages={data.restaurant.languages}
        logo={data.restaurant.theme.logo}
        phone={data.restaurant.phone}
        address={data.restaurant.address.value}
      />
      <section className="section has-background-primary p-0 py-1">
        <div className="container is-fullhd ">
          {selectedMenus.map(({ menu }, index) => (
            <div key={index}>
              <Menu menu={menu} unavailableDish={unavailableDish} />
              <hr className="has-background-primary" />
            </div>
          ))}
        </div>
      </section>
      <FooterSection
        name={data.restaurant.name}
        phone={data.restaurant.phone}
        address={data.restaurant.address}
        contact={data.restaurant.contact}
        hours={data.restaurant.hours}
        motto={data.restaurant.motto}
        socialMedias={data.restaurant.socialMedias} />
    </>
  );
};

export default MenuPage;

export const Head = ({data}) => {
  const { t } = useTranslation();
  return (
  <>
    <html data-theme="light" />
    <body className="has-navbar-fixed-top" />
    <title>{t(data.restaurant.theme.meta.title)}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta
      name="description"
      content={t(data.restaurant.theme.meta.description)}
    />
  </>
  );
}

export const query = graphql`
  {
    restaurant {
      name
      hours
      motto
      socialMedias {
        url
        code
      }
      contact {
        value
        text
      }
      navigation {
        url
        text
      }
      languages {
        code
        name
      }
      phone {
        value
        text
      }
      address {
        value
        text
      }
      theme {
        meta {
          title
          description
        }
        logo {
          url
          alt
        }
      }
    }
    allMenu {
      edges {
        menu: node {
          id
          handle
          name
          types {
            name
            note
            uuid
          }
          note
          dishes {
            name
            handle
            description
            price
            allergens {
              type
            }
            currency
            picture
            type
            uuid
          }
        }
      }
    }
  }
`;
