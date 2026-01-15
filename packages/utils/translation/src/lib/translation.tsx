import frenchMessages from "../locales/fr.json";
import englishMessages from "../locales/en.json";

export function IntlMessages(locale: "fr" | "en"): any {
  switch (locale) {
    case "fr":
      return flattenMessages(frenchMessages);
    case "en":
      return flattenMessages(englishMessages);
    default:
      return flattenMessages(englishMessages);
  }
}

const flattenMessages = (nestedMessages: any, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};
