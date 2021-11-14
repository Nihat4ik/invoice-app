type amountType = string | number;

/**
 * Returns formatted number with currency sign .
 * @param amount Number or String that indicates the amount of money.
 * @param currencyType String, that indicates type of currency. Standard value is "USD".
 * @param localeFormat String, that indicates the local format of amount. Standard value is "en-US"
 */
const currencyFormatter = (
  amount: amountType,
  currencyType: string = "USD",
  localeFormat: string = "en-US"
): string => {
  const formattedTotal = amount.toLocaleString(localeFormat, {
    currency: currencyType,
    style: "currency",
  });

  return formattedTotal;
};

export default currencyFormatter;
