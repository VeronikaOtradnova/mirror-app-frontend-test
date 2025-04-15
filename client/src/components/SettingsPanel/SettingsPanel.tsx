import { useEffect } from "react";
import { SettingsList } from "./SettingsList";
import { UpdateSettingsBtn } from "./UpdateSettingsBtn";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchSettings } from "../../store/action-creators/settings";
import { Loader } from "../ui/Loader/Loader";
import { ErrorMessage } from "../ui/ErrorMessage/ErrorMessage";

export function SettingsPanel() {
  const { loading, error } = useTypedSelector(state => state.settings);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSettings());
  }, [])

  return (
    <aside className="w-64 h-full bg-gray-800 text-white flex flex-col gap-6 p-4">
      {error && <ErrorMessage message={error} />}

      {
        loading ?
          <Loader /> :
          <>
            <UpdateSettingsBtn />
            <SettingsList />
          </>
      }
    </aside>
  )
}