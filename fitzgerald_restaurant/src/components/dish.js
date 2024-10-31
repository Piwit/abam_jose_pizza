import * as React from "react";
import { useTranslation } from "react-i18next";
import { Allergen } from "./allergen";

const DishPrice = ({ price, currency }) => (
  <>
    {price ? (
      <p style={{ whiteSpace: "nowrap" }}>
        {Number(price).toFixed(2).replace(/\.0+$/, "")} {currency}
      </p>
    ) : (
      <p style={{ whiteSpace: "nowrap" }}></p>
    )}
  </>
);

const DishAllergen = ({ allergens }) => (
  <div>
    {allergens.map((a) => (
      <Allergen key={a.type} type={a.type} />
    ))}
  </div>
);

export const Dish = ({
  name,
  description,
  price,
  currency,
  picture,
  type,
  isUnavailable,
  allergens,
}) => {
  const { t } = useTranslation();
  return (
    <div className="columns is-mobile is-multiline">
      <div className="column is-8">
        <h4 className={isUnavailable ? "is-line-through" : ""}>
          {t([name, "Plat Inconnu"])}
        </h4>
      </div>
      <div className="column is-4" span={4} style={{ textAlign: "right" }}>
        <DishPrice price={price} currency={currency} />
      </div>
      <div className="column is-12 py-0">
        <p>{t([description, ""])}</p>
        <DishAllergen allergens={allergens} />
      </div>
      <div className="column is-12">
        <hr className="m-0 has-background-black" style={{ height: "1px" }} />
      </div>
    </div>
  );
};

export const DishWithSeparator = ({ dish, isUnavailable }) => {
  return (
    <>
      <Dish {...dish} isUnavailable={isUnavailable} />
    </>
  );
};
