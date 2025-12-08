import { useEffect } from "react";

export function useFocusTrap(containerRef: React.RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    containerRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      containerRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, [containerRef, isActive]);
}
