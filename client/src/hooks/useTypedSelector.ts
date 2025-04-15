import { TypedUseSelectorHook } from "react-redux";
import { TRootState } from "../store/reducers";
import { useSelector } from "react-redux";

export const useTypedSelector:TypedUseSelectorHook<TRootState> = useSelector