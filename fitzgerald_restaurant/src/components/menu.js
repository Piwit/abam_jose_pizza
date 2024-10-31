import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DishWithSeparator } from "./dish";
import { AllergenList } from "./allergen";

const MenuSection = ({ type, dishes, unavailableDish }) => {
  const { t } = useTranslation(["translation", "theme"]);

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)")
      : { matches: true };

  const [show, setShow] = useState(!isMobile.matches);
  useEffect(() => {
    setShow(!isMobile.matches);
  }, [isMobile.matches]);

  return (
    <div>
      <div className="content columns is-mobile" onClick={() => setShow(!show)}>
        <div className="column">
          <h3 className="has-text-weight-bold mb-1 is-clickable">
            {t([type.name, ""])}
          </h3>
          <span>{t([type.note, ""])}</span>
        </div>
        <div className="column has-text-right">
          <button
            className="button is-text px-0"
            onClick={() => setShow(!show)}
          >
            {!show ? t("show", { ns: "theme" }) : t("hide", { ns: "theme" })}
          </button>
        </div>
      </div>
      {!show && (
        <hr className="m-0 has-background-black" style={{ height: "1px" }} />
      )}
      <div className={!show ? "is-hidden" : ""}>
        {dishes.map((dish) => (
          <DishWithSeparator
            dish={dish}
            isUnavailable={unavailableDish.has(dish.uuid)}
          />
        ))}
      </div>
    </div>
  );
};

const MenuLine = ({ allDishes, type, allUnavailableDish }) => {
  const dishes = allDishes.filter((dish) => dish.type === type.uuid);
  return (
    <div className="column is-4">
      <div className="is-hidden-desktop mt-6"></div>
      <MenuSection
        type={type}
        dishes={dishes}
        unavailableDish={allUnavailableDish}
      />
    </div>
  );
};

const Menu = ({ menu, unavailableDish }) => {
  const { t } = useTranslation();
  return (
    <div className="card has-background-sand">
      <header className="card-header">
        <div className="p-4">
          <h2 className="title">{t([menu.name, "Menu"])}</h2>
          <p className="subtitle">{t([menu.note, ""])}</p>
        </div>
      </header>
      <div className="card-content">
        <div className="columns is-multiline">
          {menu.types.map((type) => (
            <MenuLine
              key={type.uuid}
              allDishes={menu.dishes}
              type={type}
              allUnavailableDish={unavailableDish}
            />
          ))}
        </div>
        <h4 className="has-text-weight-bold mb-1 is-clickable">Allergènes</h4>
        <AllergenList />
      </div>
    </div>
  );
};

export default Menu;
