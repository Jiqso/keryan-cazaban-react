import FadedNavigation from './faded-navigation';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('FadedNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<FadedNavigation items={[]} />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
