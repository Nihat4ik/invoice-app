import React, { useState, memo, useEffect } from "react";
import {
  Wrapper,
  FilterTitle,
  Arrow,
  TemporaryText,
} from "./InvoiceFilterStyles";

import InvoiceFilterMenu from "./InvoiceFilterMenu";

const İnvoiceFilter = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (menu && (e.key === "Escape" || e.keyCode === 27)) {
        setMenu(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menu]);

  return (
    <React.Fragment>
      <Wrapper
        onClick={() => setMenu(!menu)}
        role="listbox"
        aria-expanded={menu}
      >
        <FilterTitle>
          Filter <TemporaryText>by status</TemporaryText>
        </FilterTitle>
        <Arrow $menu={menu} />
      </Wrapper>
      <InvoiceFilterMenu setMenu={setMenu} menu={menu} />
    </React.Fragment>
  );
};

export default memo(İnvoiceFilter);
