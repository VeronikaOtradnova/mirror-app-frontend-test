import "normalize.css";
import { SettingsPanel } from "./components/SettingsPanel/SettingsPanel";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Posts } from "./components/Posts/Posts";

function App() {
  const { settings } = useTypedSelector(state => state.settings);

  return (
    <div className="h-full flex flex-row">
      <SettingsPanel />
      <main id="main" className="w-full bg-zinc-100 overflow-y-auto">
        {
          settings &&
          <Posts settings={settings} />
        }
      </main>
    </div>
  );
}

export default App;
