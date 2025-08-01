import { toast } from "react-hot-toast";

export function showErrorToast(message = "Something went wrong. Please try again.") {
  const toastId = "error-toast";

  toast.error(message, {
    id: toastId,
    duration: 3000,
    position: "top-center",
  });
}
