import { englishTranslations } from "./../translations/eng";
import { spanishTranslation } from "./../translations/esp";
const getText = (key, language) => {
  if (language == "esp") {
    return spanishTranslation[key];
  } else if (language == "eng") {
    return englishTranslations[key];
  }
};
export { getText };
