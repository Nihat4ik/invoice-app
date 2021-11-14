import data from "../components/Invoice/data/invoices";

/**
 * Returns the list of invoices .
 */
export const initializeInvoices = () => {
  return {
    type: "INITIALIZE_INVOICES",
    payload: data,
  };
};

/**
 * Returns the filtered list of invoices .
 * @param filter String that indicates which filter will be applied.
 */
export const filterInvoices = (filter) => {
  return {
    type: "FILTER_INVOICES",
    payload: filter,
  };
};

export const createInvoice = (invoiceData) => {
  return {
    type: "CREATE_INVOICE",
    payload: invoiceData,
  };
};

export const selectInvoice = (id) => {
  return {
    type: "SELECT_INVOICE",
    payload: id,
  };
};

export const deleteInvoice = (id) => {
  return {
    type: "DELETE_INVOICE",
    payload: id,
  };
};

export const editInvoice = (invoice, updatedValues) => {
  return {
    type: "EDIT_INVOICE",
    payload: { invoice, updatedValues },
  };
};

export const markPaidInvoice = (id) => {
  return { type: "MARK_PAID_INVOICE", payload: id };
};

export const setDarkMode = () => {
  return {
    type: "SET_DARK_MODE",
  };
};
