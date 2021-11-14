export const initialValues = {
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  createdAt: new Date(),
  description: "",
  items: [
    {
      name: "",
      quantity: 1,
      price: 0,
    },
  ],
  paymentTerms: 30,
};
