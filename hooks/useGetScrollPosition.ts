import { useEffect, useState } from "react";
import { debounce } from "lodash";

// maxScroll: Adjust based on how much scroll you want to fully transition (optional)
const useGetScrollPosition = ({
  maxScroll = 0,
  smooth = false,
}: {
  maxScroll?: number;
  smooth?: boolean;
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = smooth
      ? () => {
          console.log("🚀 ~ handleScroll ~ maxScroll:", maxScroll);
          if (maxScroll > 0) {
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / maxScroll, 1); // Clamp progress to 1
            setScrollY(progress);
          } else {
            setScrollY(window.scrollY);
          }
        }
      : debounce(() => {
          console.log("🚀 ~ handleScroll ~ maxScroll:", maxScroll);
          if (maxScroll > 0) {
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / maxScroll, 1); // Clamp progress to 1
            setScrollY(progress);
          } else {
            setScrollY(window.scrollY);
          }
        });

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollY;
};

export default useGetScrollPosition;
