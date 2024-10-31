import * as React from "react";

export const Allergen = ({ type }) => {
  const url = `/images/allergens/${type}.png`;
  return <img src={url} alt={type} width={20} className="mr-1" />;
};

export const AllergenList = () => (
  <>
    <p>
      Cacahuètes <Allergen type="peanuts" />
    </p>
    <p>
      Celeri <Allergen type="celery" />
    </p>
    <p>
      Champignon <Allergen type="mushroom" />
    </p>
    <p>
      Crustacée <Allergen type="shellfish" />
    </p>
    <p>
      Gluten <Allergen type="gluten" />
    </p>
    <p>
      Lait <Allergen type="milk" />
    </p>
    <p>
      Lupins <Allergen type="lupins" />
    </p>
    <p>
      Maïs <Allergen type="corn" />
    </p>
    <p>
      Mollusque <Allergen type="mollusc" />
    </p>
    <p>
      Moutarde <Allergen type="mustard" />
    </p>
    <p>
      Noix <Allergen type="nuts" />
    </p>
    <p>
      Oeuf <Allergen type="egg" />
    </p>
    <p>
      Poisson <Allergen type="fish" />
    </p>
    <p>
      Sésame <Allergen type="sesame" />
    </p>
    <p>
      Soja <Allergen type="soy" />
    </p>
    <p>
      Sulfites <Allergen type="sulphites" />
    </p>
  </>
);
