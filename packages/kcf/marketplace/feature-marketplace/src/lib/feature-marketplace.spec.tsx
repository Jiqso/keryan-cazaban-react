import FeatureMarketplace from './feature-marketplace';
import { IntlMessages } from '@packages/shared/utils/translation';
import { BrowserRouter } from 'react-router-dom';
import { IntlHelper } from '@packages/shared/utils/intl-helper';

describe('FeatureMarketplace', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(
      <BrowserRouter>
        <FeatureMarketplace />
      </BrowserRouter>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
