import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getAuthStatus } from "../store/Auth/selectors";

export default function PublicRoute({ children }) {
  const authorized = useSelector(getAuthStatus);
  return !authorized ? children : <Navigate to="/chats" replace />;
}