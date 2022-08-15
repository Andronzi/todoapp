import React from "react";
import { placeholder, styles } from "./constants";

const Search: React.FC = () => (
  <input
    className={styles}
    placeholder={placeholder}
  />
);

export default Search;
