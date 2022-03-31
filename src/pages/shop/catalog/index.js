import PropTypes from "prop-types";
import React from "react";
import CatalogProduct from "./catalog-product";

export default function Catalog({ catalog }) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {(catalog || []).map((product) => (
        <CatalogProduct key={product._id} product={product} />
      ))}
    </ul>
  );
}
Catalog.propTypes = {
  catalog: PropTypes.array.isRequired,
};
