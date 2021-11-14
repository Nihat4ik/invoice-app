type monthVariantType = "numeric" | "2-digit" | "long" | "short" | "narrow";

interface dateFormatterReturnValues {
  month: string;
  day: string;
  year: string;
}

/**
 * Breaks down string date to formatted month day and year .
 * @param stringDate Parameter that contains string date, which needs to be formatted.
 * @param monthVariant String, that indicates the format of month which is going to be returned. Standard value is "long".
 * @param localeType String, that indicates the local type of month. Standard value is "en-US"
 */
const dateFormatter = (
  stringDate: string,
  monthVariant: monthVariantType = "long",
  localeType: string = "en-US"
): dateFormatterReturnValues => {
  const date = new window.Date(stringDate);
  const month = date.toLocaleString(localeType, { month: monthVariant });
  const day = String(date.getDate());
  const year = String(date.getFullYear());

  return { month, day, year };
};

export default dateFormatter;
