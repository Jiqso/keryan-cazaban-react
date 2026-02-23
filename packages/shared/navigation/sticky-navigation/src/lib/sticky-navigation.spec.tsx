import StickyNavigation from './sticky-navigation';
import { BrowserRouter } from 'react-router-dom';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('StickyNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(
      <BrowserRouter>
        <StickyNavigation />
      </BrowserRouter>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
