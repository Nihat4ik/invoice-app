import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required("Can’t be empty"),
    postCode: Yup.mixed().required("can’t be empty"),
    city: Yup.string().required("can’t be empty"),
    country: Yup.string().required("can’t be empty"),
  }),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("Can’t be empty"),
    postCode: Yup.mixed().required("can’t be empty"),
    city: Yup.string().required("can’t be empty"),
    country: Yup.string().required("can’t be empty"),
  }),
  clientName: Yup.string().required("can’t be empty"),
  clientEmail: Yup.string()
    .email("must be an email")
    .required("can't be empty"),
  createdAt: Yup.date().required("Please indicate date"),
  description: Yup.string().required("can't be empty"),
  items: Yup.array()
    .min(1, "An item must be added")
    .of(
      Yup.object().shape({
        name: Yup.string().required("Please indicate name of the item"),
        quantity: Yup.number()
          .min(1, "Quantity must be at least 1")
          .required("Indicate Quantity"),
        price: Yup.number()
          .min(1, "Price must be at least 1")
          .required("Indicate Price!"),
      })
    ),
});
