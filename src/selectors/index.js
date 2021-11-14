import { createSelector } from "reselect";
export const getInvoicesListAndFilter = createSelector(
  (state) => state.invoices.invoices,
  (state) => state.invoices.appliedFilter,
  (invoices, appliedFilter) => {
    const initialInvoices = [...invoices];

    if (appliedFilter)
      return initialInvoices.filter(
        (invoice) => invoice.status === appliedFilter
      );

    return invoices;
  }
);

export const getInvoiceById = createSelector(
  (state) => state.invoices.invoices,
  (state) => state.invoices.selectedId,
  (invoices, id) => {
    return id ? invoices.find((invoice) => invoice.id === id) : {};
  }
);
