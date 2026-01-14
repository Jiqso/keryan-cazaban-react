// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from "./nx-welcome";
import { FeatureLayout } from "@layout/feature-layout";

export function App() {
  return (
    <div>
      <FeatureLayout />
      {/* <NxWelcome title="kcf" /> */}
    </div>
  );
}

export default App;
