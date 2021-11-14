import generateId from "../utilities/generateId";
import { add } from "date-fns";
import update from "immutability-helper";
import invoices from "../components/Invoice/data/invoices.json";
import { itemsWithTotal, total } from "../utilities/invoiceTotalCalculator";

const initialState = {
  invoices: invoices,
  appliedFilter: "",
  selectedId: "",
};

const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_INVOICES": {
      return {
        ...state,
        invoices: action.payload,
      };
    }
    case "FILTER_INVOICES": {
      return {
        ...state,
        appliedFilter: action.payload,
      };
    }
    case "CREATE_INVOICE": {
      const { values, isDraft } = action.payload;
      const { createdAt, items, paymentTerms } = action.payload.values;
      const ids = state.invoices ? state.invoices.map((el) => el.id) : [];

      const newInvoice = {
        id: generateId(ids),
        ...values,
        paymentDue: add(createdAt, { days: paymentTerms }),
        status: isDraft ? "draft" : "pending",
        items: itemsWithTotal(items),
        total: total(items),
      };
      return { ...state, invoices: [...state.invoices, newInvoice] };
    }
    case "SELECT_INVOICE": {
      return { ...state, selectedId: action.payload };
    }
    case "DELETE_INVOICE": {
      return {
        ...state,
        invoices: state.invoices.filter(
          (invoice) => invoice.id !== action.payload
        ),
      };
    }
    case "EDIT_INVOICE": {
      const indexOfInvoice = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.invoice.id
      );
      const { items, paymentTerms, createdAt, ...updatedValues } =
        action.payload.updatedValues;
      return update(state, {
        invoices: {
          [indexOfInvoice]: {
            status: { $set: "pending" },
            items: { $set: itemsWithTotal(items) },
            total: { $set: total(items) },
            paymentDue: { $set: add(createdAt, { days: paymentTerms }) },
            createdAt: { $set: createdAt },
            paymentTerms: { $set: paymentTerms },
            $merge: updatedValues,
          },
        },
      });
    }
    case "MARK_PAID_INVOICE": {
      const indexOfInvoice = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload
      );

      return update(state, {
        invoices: {
          [indexOfInvoice]: {
            status: { $set: "paid" },
          },
        },
      });
    }
    default:
      return state;
  }
};

export default invoicesReducer;
