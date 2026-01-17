import FadedNavigation from './faded-navigation';
import { IntlHelper } from '@utils/intl-helper';
import { IntlMessages } from '@utils/translation';

describe('FadedNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<FadedNavigation items={[]} />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
