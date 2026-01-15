import { StrictMode, useContext } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { LanguageContext, LanguageProvider } from "@utils/language-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const AppWrapper: React.FC = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <StrictMode>
      <BrowserRouter>
        <LanguageProvider
          language={language}
          handleLanguageChange={handleLanguageChange}
        >
          {/* <ThemeProvider theme={mhpTheme}> */}
          <App />
          {/* </ThemeProvider> */}
        </LanguageProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

root.render(<AppWrapper />);
