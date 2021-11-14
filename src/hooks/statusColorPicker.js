import { useContext } from "react";
import { ThemeContext } from "styled-components";
/**
 * Returns color according to status of invoice .
 * @param status String that indicates the status of invoice.
 */
const StatusColorPicker = (status) => {
  const theme = useContext(ThemeContext);
  const backgroundColor =
    status === "paid"
      ? theme.colors.lightSuccess
      : status === "draft"
      ? theme.colors.lightOxfordBlue
      : theme.colors.lightPending;

  const textColor =
    status === "paid"
      ? theme.colors.success
      : status === "draft"
      ? theme.colors.oxfordBlue
      : theme.colors.pending;

  return { backgroundColor, textColor };
};

export default StatusColorPicker;
