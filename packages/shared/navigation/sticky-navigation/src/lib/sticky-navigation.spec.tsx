import StickyNavigation from './sticky-navigation';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('StickyNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<StickyNavigation />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
