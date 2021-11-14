import { useEffect } from "react";

/**
 * Detects if the modal is opened and prevents scrolling.
 * @param modal State of modal. Can be created by using useState() hook.
 */

const PreventScrolling = (modal) => {
  useEffect(() => {
    if (modal) return (document.body.style.overflow = "hidden");
    document.body.style.overflow = "";
  }, [modal]);
};

export default PreventScrolling;
