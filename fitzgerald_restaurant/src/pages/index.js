import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import { RichText, Columns, Col, Section, Article, SocialMedias, LinkButton } from "@piwit/fitzgerald/components";
import {
  ImageWithText,
  Hero,
  ThreePictures,
  Text,
  ContactForm,
} from "@piwit/fitzgerald/sections";
import { FooterSection } from "../components/footer";
import { NavSection } from "../components/navbar";
import clsx from "clsx";
import { restaurant } from "../data/restaurant";

import "../../style/index.scss";
import { useTranslation } from "react-i18next";

const Action = ({ action, data }) => {
  const { t } = useTranslation();
  let component = null;
  if (!action) {
    component = null;
  } else if (action.type === "socials") {
    component = <SocialMedias socialMedias={data.socialMedias} />
  } else if (action.type === "link_button") {
    component = <LinkButton url={action.to} text={t(action.text)} className="is-primary" />
  }
  return (
    component
  )
}

const HistorySection = ({ history, data }) => {
  const { t } = useTranslation();
  const historyAction = <Action action={history.action} data={data} />;
  const historyContent = (
    <Article
      title={t(history.title)}
      text={t(history.text)}
      action={historyAction}
      className="has-text-justified"
      titleClassName="has-text-primary"
    />
  );
  return (
    <Section id="history">
      <ImageWithText
        textSize={5}
        hasTextLeft
        textPosition="left"
        text={historyContent}
        img={history.image.url}
        alt={t(history.image.alt)}
        imageRatio="is-square"
      />
    </Section>
  )
}

const RestaurantSection = ({ restaurant, data }) => {
  const { t } = useTranslation();
  const restaurantAction = <Action action={restaurant.action} data={data} />;
  const restaurantContent = (
    <Article
      title={t(restaurant.title)}
      text={t(restaurant.text)}
      action={restaurantAction}
      className="has-text-justified"
      titleClassName="has-text-primary"
    />
  );
  return (
    <Section id="restaurant">
      <ImageWithText
        textSize={5}
        hasTextLeft
        textPosition="right"
        text={restaurantContent}
        img={restaurant.image.url}
        alt={t(restaurant.image.alt)}
        imageRatio="is-square"
      />
    </Section>
  )
}

const CuisineSection = ({ cuisine, data }) => {
  const { t } = useTranslation();
  const cuisineAction = <Action action={cuisine.action} data={data} />;
  const cuisineContent = (
    <Article
      title={t(cuisine.title)}
      text={t(cuisine.text)}
      action={cuisineAction}
      className="has-text-justified"
      titleClassName="has-text-primary"
    />
  );
  return (
    <Section id="cuisine">
      <Text text={cuisineContent} />
      <ThreePictures
        objectFit="cover"
        ratio="is-square"
        img1={cuisine.images[0].url}
        alt1={t(cuisine.images[0].alt)}
        img2={cuisine.images[1].url}
        alt2={t(cuisine.images[1].alt)}
        img3={cuisine.images[2].url}
        alt3={t(cuisine.images[2].alt)}
      />
    </Section>
  )
}

const HeroContent = ({ content, action, data }) => {
  const { t } = useTranslation();
  const heroAction = <Action action={action} data={data} />;
  return (
    <div
      className="content subtitle has-text-light"
      style={{ fontWeight: 500 }}
    >
      <p>{t(content)}</p>
      {heroAction}
    </div>
  );
};

const HeroTitle = ({ title }) => (
  <h1 className="title is-1 has-text-light">{title}</h1>
);

const HeroSection = ({hero, data}) => {
  const { t } = useTranslation()
  const title = <HeroTitle title={t(hero.title)} />;
  const content = <HeroContent content={t(hero.text)} action={hero.action} data={data} />;
  return (
    <Hero
      title={title}
      content={content}
      size="is-fullheight-with-navbar"
      image={hero.image.url}
      alt={t(hero.image.alt)}
    />
  );
}

const ContactSection = ({ contact }) => {
  const { t } = useTranslation();
  return (
    <ContactForm
      title={t(contact.title)}
      titleClassName="has-text-primary"
      text={t(contact.text)}
      id="reserve"
    />
  )
}

const IndexPage = ({ data }) => {
  const allowedData = {
    socialMedias: data.restaurant.socialMedias,
  }
  return (
    <>
      <NavSection
        links={data.restaurant.navigation}
        languages={data.restaurant.languages}
        logo={data.restaurant.theme.logo}
        phone={data.restaurant.phone}
        address={data.restaurant.address.value} />
      <HeroSection
        hero={data.restaurant.theme.sections.hero}
        data={allowedData}
      />
      <HistorySection
        history={data.restaurant.theme.sections.history}
        data={allowedData}
      />
      <RestaurantSection
        restaurant={data.restaurant.theme.sections.restaurant}
        data={allowedData}
       />
      <CuisineSection
        cuisine={data.restaurant.theme.sections.cuisine}
        data={allowedData}
      />
      <ContactSection
        contact={data.restaurant.theme.sections.contact}
      />
      <FooterSection
        name={data.restaurant.name}
        phone={data.restaurant.phone}
        address={data.restaurant.address}
        contact={data.restaurant.contact}
        hours={data.restaurant.hours}
        motto={data.restaurant.motto}
        socialMedias={data.restaurant.socialMedias}
      />
    </>
  );
};

export default IndexPage;

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
        sections {
          hero {
            title
            text
            image {
              url
              alt
            }
            action {
              type
              text
              to
            }
          }
          history {
            title
            text
            image {
              url
              alt
            }
            action {
              type
            }
          }
          restaurant {
            title
            text
            image {
              url
              alt
            }
          }
          cuisine {
            title
            text
            action {
              type
              text
              to
            }
            images {
              url
              alt
            }
          }
          contact {
            title
            text
          }
        }
      }
    }
  }
`;

