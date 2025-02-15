import React from "react";
import useKeyDown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const handleKeyDown = React.useCallback( () => {setToasts([])}, []);

  useKeyDown("Escape" , handleKeyDown);

  const [toasts, setToasts] = React.useState([]);

  function removeToast(toastId) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== toastId;
    });
    setToasts(nextToasts);
  }

  function newToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        newToast,
        removeToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
