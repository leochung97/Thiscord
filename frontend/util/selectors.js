import { useSelector } from "react-redux";

export const useCurrentUser = () => {
  return useSelector((state) => state.session.id);
}