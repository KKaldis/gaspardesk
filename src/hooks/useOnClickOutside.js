import { useEffect } from "react";

const useOnClickOutside = (ref, handler, show) => {
  useEffect(() => {
    const listener = (event) => {
      // console.log(event.target.id); // log the id of the clicked item
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target) |
          (event.target.id === "btn-more-tags")
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
