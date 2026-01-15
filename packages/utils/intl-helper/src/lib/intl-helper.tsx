import { IntlProvider } from "react-intl";
import { render } from "@testing-library/react";

export const IntlHelper = (component: any, locale: any, messages: any) => {
  return render(
    <IntlProvider locale={locale} messages={messages}>
      {component}
    </IntlProvider>
  );
};

export default IntlHelper;
