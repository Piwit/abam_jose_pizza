<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Fitzgerald Restaurant
</h1>

## 🚀 Quick start

1.  **Run a fitzgerald site.**

    ```shell
    nvm use 18
    gatsby develop
    ```

2.  **Build a fitzgerald site.**

    ```shell
    gatsby build
    ```


## 🚀 Environment Variables

    ```shell
    GATSBY_ABAM_API_AVAILABLEDISH_URL='hhtps://app.aboireetamanger.fr/abam/apiavailabledish'
    GATSBY_ABAM_API_CONTACT_URL='hhtps://app.aboireetamanger.fr/abam/apicontact'
    GATSBY_ABAM_API_DISHTYPE_URL='hhtps://app.aboireetamanger.fr/abam/apidishtype'
    GATSBY_ABAM_API_DISH_URL='hhtps://app.aboireetamanger.fr/abam/apidish'
    GATSBY_ABAM_API_MENU_URL='hhtps://app.aboireetamanger.fr/abam/apimenu'
    GATSBY_ABAM_API_REFRESH_INTERVAL='60'
    GATSBY_GTAG='ko'
    GATSBY_ABAM_API_TOKEN=''
    GATSBY_ABAM_MENU=''
    ```

## 🚀 Necessary data

`data/restaurant.js` file is necessary to run the site. It should be like this:

```js
const restaurant = {
  "uuid": "",
  "id": "",
  "name": "",
  "motto": "",
  "hours": "",
  "translations": {
    "fr": {
      "hours": "",
      "motto": "",
      "name": "",
    },
    "en": {
      "hours": "",
      "motto": "",
      "name": "",
    }
  },
  "phone": { value: "", text: "" },
  "address": {
    value: "",
    text: "",
  },
  "contact": { value: "", text: "" },
  "socialMedias": [
    { url: "", code: "instagram" },
    { url: "", code: "facebook" },
    { url: "", code: "x" },
  ],
  "languages": [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
  ],
  "navigation": [
    { url: "/#history", uuid: "history", text: "", translations: { fr: { text: "L'Histoire" } , en: { text: "History" } } },
    { url: "/#restaurant", uuid: "restaurant", text: "", translations: { fr: { text: "Le Restaurant" }, en: { text: "Restaurant" } } },
    { url: "/#cuisine", uuid: "cuisine", text: "", translations: { fr: { text: "La Cuisine" }, en: { text: "Cuisine" } } },
    { url: "/menu", uuid: "menu", text: "", translations: { fr: {text: "La Carte"}, en: {text: "Menu" } } },
  ],
  "theme": {
    "code": "unicorn",
    "meta": {
      "uuid": "meta",
      "title": "",
      "description": "",
      "translations": {
        "fr": {
          "title": "",
          "description": "",
        },
        "en": {
          "title": "",
          "description": "",
        }
      }
    },
    "logo": {
      "uuid": "logo",
      "url": "/images/logo.png",
      "alt": "",
      "translations": {
        "fr": {
          "alt": ""
        },
        "en": {
          "alt": ""
        }
      }
    },
    "sections": {
      "hero": {
        "uuid": "hero",
        "type": "hero",
        "title": "",
        "text": "",
        "image": {
          "uuid": "hero_image",
          "url": "/images/hero.png",
          "alt": "",
          "translations": {
            "fr": {
              "alt": ""
            },
            "en": {
              "alt": ""
            }
          }
        },
        "action": {
          "uuid": "hero_action",
          "type": "link_button",
          "text": "",
          "to": "#reserve",
          "translations": {
            "fr": {
              "text": "Réserver"
            },
            "en": {
              "text": "Book"
            }
          }
        },
        "translations": {
          "fr": {
            "title": "",
            "text": "",
          },
          "en": {
            "title": "",
            "text": "",
          }
        }
      },
      "history": {
        "uuid": "history",
        "type": "image_with_text",
        "title": "",
        "text": "",
        "image": {
          "uuid": "history_image",
          "url": "/images/restaurant_1.png",
          "alt": "",
          "translations": {
            "fr": {
              "alt": ""
            },
            "en": {
              "alt": ""
            }
          }
        },
        "action": {
          "uuid": "history_action",
          "type": "socials"
        },
        "translations": {
          "fr": {
            "title": "L'Histoire",
            "text": "",
          },
          "en": {
            "title": "History",
            "text": "",
          }
        }
      },
      "restaurant": {
        "uuid": "restaurant",
        "type": "image_with_text",
        "title": "",
        "text": "",
        "image": {
          "url": "/images/indoor_1.png",
          "alt": "",
          "translations": {
            "fr": {
              "alt": ""
            },
            "en": {
              "alt": ""
            }
          }
        },
        "translations": {
          "fr": {
            "title": "Le Restaurant",
            "text": "",
          },
          "en": {
            "title": "Restaurant",
            "text": "",
          },
        }
      },
      "cuisine": {
        "uuid": "cuisine",
        "type": "three_pictures",
        "title": "",
        "text": "",
        "images": [
          {
            "uuid": "cuisine_image_1",
            "url": "/images/plat_1.png",
            "alt": "",
            "translations": {
              "fr": {
                "alt": ""
              },
              "en": {
                "alt": ""
              }
            }
          },
          {
            "uuid": "cuisine_image_2",
            "url": "/images/plat_2.png",
            "alt": "",
            "translations": {
              "fr": {
                "alt": ""
              },
              "en": {
                "alt": ""
              }
            }
          },
          {
            "uuid": "cuisine_image_3",
            "url": "/images/plat_3.png",
            "alt": "",
            "translations": {
              "fr": {
                "alt": ""
              },
              "en": {
                "alt": ""
              }
            }
          },
        ],
        "action": {
          "uuid": "cuisine_action",
          "type": "link_button",
          "text": "",
          "to": "/menu",
          "translations": {
            "fr": {
              "text": "Découvrir la carte"
            },
            "en": {
              "text": "Discover the menu"
            }
          }
        },
        "translations": {
          "fr": {
            "title": "La Cuisine",
            "text": "",
          },
          "en": {
            "title": "Cuisine",
            "text": "",
          }
        }
      },
      "contact": {
        "uuid": "contact",
        "title": "",
        "text": "",
        "translations": {
          "fr": {
            "title": "La Réservation",
            "text": ""
          },
          "en": {
            "title": "Reservation",
            "text": ""
          }
        }
      },
    }
  }
}

```