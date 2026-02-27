import CrmNavigation from './crm-navigation';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';
import { BrowserRouter } from 'react-router-dom';

describe('CrmNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(
      <BrowserRouter>
        <CrmNavigation />
      </BrowserRouter>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
