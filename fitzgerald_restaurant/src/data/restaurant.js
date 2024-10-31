const restaurant = {
  "uuid": "unicorn",
  "id": "unicorn",
  "name": "Unicorn Restaurant",
  "motto": "Chill vibes, great food, and good times.",
  "hours": "Ouvert tous les jours de 12h à 22h",
  "translations": {
    "fr": {
      "hours": "Ouvert tous les jours de 12h à 22h",
      "motto": "Ambiance chill, cuisine savoureuse et moments inoubliables.",
      "name": "Restaurant Unicorn",
    },
    "en": {
      "hours": "Open every day from 12pm to 10pm",
      "motto": "Chill vibes, great food, and good times.",
      "name": "Unicorn Restaurant",
    }
  },
  "phone": { value: "+33495650862", text: "04 95 65 08 62" },
  "address": {
    value: "https://goo.gl/maps/BbKaJZx3Ka321uYd9",
    text: "Route de la plage, 20260 Calvi",
  },
  "contact": { value: "pro@lucas.corsica", text: "unicorn@abam.fr" },
  "socialMedias": [
    { url: "https://instagram.com/lalicornecalvi", code: "instagram" },
    { url: "https://facebook.com/lalicornecalvi", code: "facebook" },
    { url: "https://x.com/lalicornecalvi", code: "x" },
  ],
  "languages": [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
  ],
  "navigation": [
    { url: "/#history", uuid: "hisotry", text: "", translations: { fr: { text: "L'Histoire" } , en: { text: "History" } } },
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
          "title": "Restaurant Unicorn Theme",
          "description": "Unicorn Restaurant Description - Chill vibes, great food, and good times.",
        },
        "en": {
          "title": "Restaurant Unicorn Theme",
          "description": "Unicorn Restaurant Description - Chill vibes, great food, and good times.",
        }
      }
    },
    "logo": {
      "uuid": "logo",
      "url": "/images/logo.png",
      "alt": "",
      "translations": {
        "fr": {
          "alt": "Unicorn Logo"
        },
        "en": {
          "alt": "Unicorn Logo"
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
              "alt": "Unicorn"
            },
            "en": {
              "alt": "Unicorn"
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
            "title": "Unicorn",
            "text": "Chill vibes, great food, and good times.",
          },
          "en": {
            "title": "Unicorn",
            "text": "Chill vibes, great food, and good times.",
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
              "alt": "Le restaurant"
            },
            "en": {
              "alt": "The restaurant"
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
            "text": "Depuis 2019, le restaurant Unicorn à Calvi incarne l'esprit de Bali, où se rencontrent détente et convivialité. Fondé par Lucas, Unicorn est né d'une passion pour les voyages et la fusion culinaire, combinant l'essence de la Méditerranée avec des saveurs asiatiques uniques. Avec son ambiance cozy et moderne, ce lieu est rapidement devenu un incontournable pour ceux qui recherchent une expérience gustative inoubliable dans un cadre chaleureux.",
          },
          "en": {
            "title": "History",
            "text": "Since 2019, the Unicorn restaurant in Calvi embodies the spirit of Bali, where relaxation and conviviality meet. Founded by Lucas, Unicorn was born out of a passion for travel and culinary fusion, combining the essence of the Mediterranean with unique Asian flavors. With its cozy and modern atmosphere, this place quickly became a must-visit for those looking for an unforgettable taste experience in a warm setting.",
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
              "alt": "Le restaurant"
            },
            "en": {
              "alt": "The restaurant"
            }
          }
        },
        "translations": {
          "fr": {
            "title": "Le Restaurant",
            "text": "Unicorn est plus qu'un simple restaurant à Calvi ; c’est un lieu où l’on vient pour décompresser et savourer de bons moments. Avec un design inspiré de l’atmosphère relaxante de Bali, des chaises en rotin aux éclairages tamisés, tout est conçu pour offrir une expérience chill et accueillante. Que ce soit pour un dîner entre amis ou un repas en amoureux, chaque visite promet des 'Chill vibes, great food, and good times.'",
          },
          "en": {
            "title": "Restaurant",
            "text": "Unicorn is more than just a restaurant in Calvi; it is a place to unwind and enjoy good times. With a design inspired by the relaxing atmosphere of Bali, from rattan chairs to soft lighting, everything is designed to offer a chill and welcoming experience. Whether for a dinner with friends or a meal with your loved one, each visit promises 'Chill vibes, great food, and good times.'",
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
                "alt": "Plat 1"
              },
              "en": {
                "alt": "Dish 1"
              }
            }
          },
          {
            "uuid": "cuisine_image_2",
            "url": "/images/plat_2.png",
            "alt": "",
            "translations": {
              "fr": {
                "alt": "Plat 2"
              },
              "en": {
                "alt": "Dish 2"
              }
            }
          },
          {
            "uuid": "cuisine_image_3",
            "url": "/images/plat_3.png",
            "alt": "",
            "translations": {
              "fr": {
                "alt": "Plat 3"
              },
              "en": {
                "alt": "Dish 3"
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
            "text": "Chez Unicorn, la cuisine fusion est reine. Notre chef mêle habilement les influences méditerranéennes avec des touches asiatiques pour créer des plats aussi visuellement saisissants que savoureux. De la fraîcheur des produits locaux aux épices exotiques, chaque bouchée raconte une histoire de voyage et de découverte. Découvrez une carte créative où poissons grillés côtoient des sushis réinventés et des mezzés parfumés, pour une expérience gustative unique à Calvi.",
          },
          "en": {
            "title": "Cuisine",
            "text": "At Unicorn, fusion cuisine is king. Our chef skillfully blends Mediterranean influences with Asian touches to create dishes that are as visually stunning as they are tasty. From the freshness of local products to exotic spices, each bite tells a story of travel and discovery. Discover a creative menu where grilled fish rubs shoulders with reinvented sushi and fragrant mezzes, for a unique taste experience in Calvi.",
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
            "text": "Pour toute réservation, question ou demande spéciale, n’hésitez pas à nous contacter. L’équipe d’Unicorn se fera un plaisir de vous répondre rapidement pour vous garantir une expérience unique dans notre restaurant à Calvi. Remplissez simplement le formulaire ci-dessous et laissez-nous nous occuper du reste !"
          },
          "en": {
            "title": "Reservation",
            "text": "For any reservation, question or special request, do not hesitate to contact us. The Unicorn team will be happy to respond quickly to ensure you have a unique experience in our restaurant in Calvi. Simply fill out the form below and let us take care of the rest!"
          }
        }
      },
    }
  }
}

export { restaurant }