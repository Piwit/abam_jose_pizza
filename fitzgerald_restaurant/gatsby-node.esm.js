import fetch from "node-fetch";
import fs from "fs";
import { restaurant } from "./src/data/restaurant";

// Fetch ABAM API
const createI18N = (data, datatype, i18nData) => {
  /*
  {
    "lang": {
      "objtype": {
        "id": {
          "attr": "value"
        }
      }
    }
  }
  */
  if ("translations" in data) {
    Object.keys(data.translations).map((lang) => {
      if (!(lang in i18nData)) {
        i18nData[lang] = {};
        i18nData[lang]["translation"] = {};
      }
      if (!(datatype in i18nData[lang]["translation"])) {
        i18nData[lang]["translation"][datatype] = {};
      }

      const i18nObj = {};
      Object.keys(data.translations[lang]).map((attr) => {
        data[attr] = `${datatype}.${data.uuid}.${attr}`;
        const translation = data.translations[lang][attr];
        if (translation.length > 0) i18nObj[attr] = translation;
      });

      i18nData[lang]["translation"][datatype][data.uuid] = i18nObj;
    });
    return i18nData;
  }
  return i18nData;
};

const processI18N = (data, datatype, i18nData) => {
  createI18N(data, datatype, i18nData);
  Object.keys(data).map((key) => {
    if (data[key] === Object(data[key])) {
      processI18N(data[key], key, i18nData);
    }
  });
};

const processFitzgeraldData = (
  data,
  datatype,
  createNode,
  createContentDigest,
  i18nData,
) => {
  processI18N(data, datatype, i18nData);
  const nodeMetadata = {
    id: data.uuid,
    parent: null, // this is used if nodes are derived from other nodes, a little different than a foreign key relationship, more fitting for a transformer plugin that is changing the node
    children: [],
    internal: {
      type: datatype,
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data),
    },
  };
  const node = Object.assign({}, data, nodeMetadata);
  createNode(node);
};

const fetchFitzgerald = async (
  url,
  datatype,
  createNode,
  createContentDigest,
  i18nData,
) => {
  const token = process.env.GATSBY_ABAM_API_TOKEN;
  const headers = { Authorization: `Token ${token}` };
  const request = await fetch(url, { headers });
  const data = await request.json();
  data.forEach((d) =>
    processFitzgeraldData(
      d,
      datatype,
      createNode,
      createContentDigest,
      i18nData,
    ),
  );
};

const processRestaurant = async (
  createNode,
  createContentDigest,
  i18nData,
) => {
  processFitzgeraldData(restaurant, "restaurant", createNode, createContentDigest, i18nData);

}

export const sourceNodes = async (
  { actions, createContentDigest },
  pluginOptions,
) => {
  const { createNode } = actions;
  const i18nData = {};

  await fetchFitzgerald(
    process.env.GATSBY_ABAM_API_MENU_URL,
    "menu",
    createNode,
    createContentDigest,
    i18nData,
  );
  await fetchFitzgerald(
    process.env.GATSBY_ABAM_API_DISH_URL,
    "dish",
    createNode,
    createContentDigest,
    i18nData,
  );
  await fetchFitzgerald(
    process.env.GATSBY_ABAM_API_DISHTYPE_URL,
    "dishtype",
    createNode,
    createContentDigest,
    i18nData,
  );
  await processRestaurant(
    createNode,
    createContentDigest,
    i18nData
  );
  const theme = {
    fr: {
      show: "Ouvrir",
      hide: "Fermer",
    },
    en: {
      show: "Show",
      hide: "Hide",
    },
  };
  Object.keys(i18nData).forEach((key) => {
    i18nData[key]["theme"] = key in theme ? theme[key] : theme["en"];
  });
  fs.writeFileSync("src/data/locales.json", JSON.stringify(i18nData));
  /*
  Object.keys(i18nData).map((lang) => {
    fs.writeFileSync(`src/data/locales/${lang}.json`, JSON.stringify(i18nData[lang]));
  })
  */
  return;
};

export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Allergen {
      type: String
    }

    type dish implements Node {
      name: String!
      handle: String!
      description: String
      price: Float
      allergens: [Allergen]
      currency: String
      picture: String
      type: String
      uuid: String
    }

    type MenuType {
      name: String
      note: String
      uuid: String
    }

    type menu implements Node {
      id: ID!
      handle: String!
      name: String!
      types: [MenuType]
      note: String
      dishes: [dish]
    }

    type Phone {
      value: String!
      text: String!
    }

    type Address {
      value: String!
      text: String!
    }

    type Contact {
      value: String!
      text: String!
    }

    type SocialMedia {
      url: String!
      code: String!
    }

    type Language {
      code: String!
      name: String!
    }

    type Navigation {
      url: String!
      uuid: String!
      text: String
    }

    type Meta {
      uuid: String!
      title: String
      description: String
    }

    type Logo {
      uuid: String!
      url: String!
      alt: String!
    }

    type Theme {
      code: String!
      meta: Meta!
      logo: Logo!
    }

    type Image {
      uuid: String!
      url: String!
      alt: String!
    }

    type Action {
      uuid: String!
      type: String!
      text: String
      to: String
    }

    type SectionHero {
      uuid: String!
      type: String!
      title: String
      text: String
      image: Image!
      action: Action!
    }

    type SectionHistory {
      uuid: String!
      type: String!
      title: String
      text: String
      image: Image!
      action: Action!
    }

    type SectionRestaurant {
      uuid: String!
      type: String!
      title: String
      text: String
      image: Image!
    }

    type SectionCuisine {
      uuid: String!
      type: String!
      title: String
      text: String
      images: [Image!]!
      action: Action!
    }

    type SectionContact {
      uuid: String!
      title: String
      text: String
    }

    type Sections {
      hero: SectionHero!
      history: SectionHistory!
      restaurant: SectionRestaurant!
      cuisine: SectionCuisine!
      contact: SectionContact!
    }

    type Restaurant implements Node {
      uuid: String!
      id: ID!
      name: String!
      motto: String!
      hours: String!
      phone: Phone!
      address: Address!
      contact: Contact!
      socialMedias: [SocialMedia!]!
      languages: [Language!]!
      navigation: [Navigation!]!
      theme: Theme!
      sections: Sections!
    }

  `;
  createTypes(typeDefs);
};
