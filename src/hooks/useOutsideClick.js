import { useEffect } from "react";
import { useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef("");

  useEffect(() => {
    function handleClick(e) {
      // ref present and ref elem don't contain target then close the modal
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    // listen to event in capturing phase instead of bubbling
    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
