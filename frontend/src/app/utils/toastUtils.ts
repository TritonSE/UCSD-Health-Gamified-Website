import toast from "react-hot-toast";

export function showErrorToast(message = "Something went wrong. Please try again.") {
  toast.error(message, {
    duration: 3000,
    position: "top-center",
  });
}
