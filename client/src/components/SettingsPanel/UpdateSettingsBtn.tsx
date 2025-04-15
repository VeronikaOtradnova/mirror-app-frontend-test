import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchSettings } from "../../store/action-creators/settings";
import { Btn } from "../ui/Btn/Btn";

export function UpdateSettingsBtn() {
  const dispatch = useAppDispatch();

  const btnHandler = () => dispatch(fetchSettings());

  return (
    <Btn 
      handler={btnHandler}
    >Обновить</Btn>
  )
}