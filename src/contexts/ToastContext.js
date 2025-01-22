import React, { createContext, useContext } from 'react';
import { toast, Bounce } from "react-toastify";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      style: {
        backgroundColor: "var(--highlight-color)",
        color: "var(--main-color)",
        backgroundSize:"200%",
        backgroundPosition: "center",
        fontFamily:'var(--main-font-family)',
        fontSize:'large'
      },
      closeButton: (
        <button style={{
          color: "var(--main-color)", // Change this to your desired color
          background: "transparent",
          border: "none",
          fontSize: "1.2rem",
          cursor: "pointer"
        }}>
          ✖
        </button>
      )
  });

  const notifyError = (message) =>
    toast.warn(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        style: {
          backgroundColor: "var(--highlight-color)",
          color: "var(--main-color)",
          backgroundSize:"200%",
          backgroundPosition: "center",
          fontFamily:'var(--main-font-family)',
          fontSize:'large'
        },
        closeButton: (
          <button style={{
            color: "var(--main-color)", // Change this to your desired color
            background: "transparent",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer"
          }}>
            ✖
          </button>
        )
  });

  return (
    <ToastContext.Provider value={{
        notifySuccess,
        notifyError,
      }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToasts = () => useContext(ToastContext);
