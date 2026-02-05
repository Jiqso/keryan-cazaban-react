import { IntlHelper } from '@utils/intl-helper';
import { IntlMessages } from '@utils/translation';

import { PortfolioCard } from './cards';

describe('Cards', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(
      <PortfolioCard companyName={'Company Test'} />,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
