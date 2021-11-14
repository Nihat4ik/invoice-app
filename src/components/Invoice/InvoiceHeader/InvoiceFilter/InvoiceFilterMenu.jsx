import React, { useRef, useEffect, useState } from "react";
import {
  MenuItem,
  CheckBox,
  Label,
  Menu,
  CheckboxButton,
} from "./InvoiceFilterStyles";
import { data } from "../../data/filter";
import detectOutsideClick from "../../../../hooks/detectOutsideClick";
import { filterInvoices } from "../../../../actions";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { menuVariants } from "../InvoiceHeaderAnimations";

const InvoiceMenu = ({ menu, setMenu }) => {
  const menuRef = useRef();
  const [filter, setFilter] = useState("");
  const clickedOutside = detectOutsideClick(menuRef, menu);
  const dispatch = useDispatch();
  const onFilterClick = (filterName) => {
    if (filter !== filterName) setFilter(filterName);
    else setFilter("");
  };

  useEffect(() => {
    if (clickedOutside) setMenu(false);
  }, [clickedOutside, setMenu]);

  useEffect(() => {
    dispatch(filterInvoices(filter));
  }, [dispatch, filter]);

  const renderMenu = data.map((item) => {
    const checked = item.filterName === filter;
    return (
      <MenuItem key={item.id} role="option" aria-checked={checked}>
        <CheckboxButton onClick={() => onFilterClick(item.filterName)}>
          <Label htmlFor={item.filterName}>{item.filterName}</Label>
          <CheckBox $checked={checked}></CheckBox>
        </CheckboxButton>
      </MenuItem>
    );
  });

  return (
    <AnimatePresence>
      {menu && (
        <Menu
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          role="listbox"
          className="filtermenu"
          exit="exit"
          ref={menuRef}
        >
          {renderMenu}
        </Menu>
      )}
    </AnimatePresence>
  );
};

export default InvoiceMenu;
