import CrmNavigation from './crm-navigation';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('CrmNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<CrmNavigation />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
