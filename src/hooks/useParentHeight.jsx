import { useEffect } from "react";

const useParentHeight = (parentRef, childRef) => {
  useEffect(() => {
    const updateHeight = () => {
      if (parentRef.current && childRef.current) {
        const parentHeight = parentRef.current.clientHeight;
        childRef.current.style.height = `${parentHeight}px`;
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [parentRef, childRef]);
};

export default useParentHeight;
