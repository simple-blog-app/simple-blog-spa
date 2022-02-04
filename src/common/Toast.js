import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const displayToast = (message) => {
  toast.info(message, {
    position: "bottom-left",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};
