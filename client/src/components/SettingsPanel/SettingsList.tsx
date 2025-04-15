import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { currentLayoutNames, navigationNames, templateNames } from "../../types/settings";

export function SettingsList() {
  const [curLayoutVal, setCurLayoutVal] = useState('');
  const [templateVal, setTemplateVal] = useState('');
  const [navigationVal, setNavigationVal] = useState('');
  const [colsVal, setColsVal] = useState(0);
  const [rowsVal, setRowsVal] = useState(0);

  const { settings } = useTypedSelector(state => state.settings);

  if (!settings) return;

  useEffect(() => {
    setCurLayoutVal(currentLayoutNames[settings.layout.current]);
    setTemplateVal(templateNames[settings.template]);
    setNavigationVal(navigationNames[settings.navigation]);
    setColsVal(settings.layout.columns);
    setRowsVal(settings.layout.rows)
  }, [settings]);

  return (
    <ul className="space-y-2">
      <li className="p-2 bg-gray-700 rounded">Шаблон: {curLayoutVal}</li>
      <li className="p-2 bg-gray-700 rounded">Карточка: {templateVal}</li>
      <li className="p-2 bg-gray-700 rounded">Навигация: {navigationVal}</li>
      <li className="p-2 bg-gray-700 rounded">Колонок: {colsVal}</li>
      <li className="p-2 bg-gray-700 rounded">Рядов: {rowsVal}</li>
    </ul>
  );
}