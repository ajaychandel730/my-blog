"use client";

import { ToastContainer, Bounce, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface ToastProviderProps {
//   children: React.ReactNode;
// }

const defaultOptions:ToastContainerProps = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "light",
  transition: Bounce,
};

interface Props extends ToastContainerProps {};

export default function ToastProvider(options: Props) {
  const {
    position,
    autoClose,
    hideProgressBar,
    newestOnTop,
    closeOnClick,
    rtl,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
    theme
  } = {
    ...defaultOptions,
    ...options,
  };

  return (
    <>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        closeOnClick = {closeOnClick}
        rtl = {rtl}
        pauseOnFocusLoss = {pauseOnFocusLoss}
        draggable = {draggable}
        pauseOnHover = {pauseOnHover}
        theme = {theme}
        transition={Bounce}
      />
    </>
  );
}
