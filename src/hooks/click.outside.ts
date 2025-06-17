import { useEffect, type RefObject } from "react";

export const useClickOutSite = (
  ref: RefObject<HTMLDivElement | null>,
  onClose: () => void
) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref]);
};
