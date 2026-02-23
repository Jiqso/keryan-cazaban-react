import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';
import { BrowserRouter } from 'react-router-dom';
import FeatureProduct from './feature-product';

describe('FeatureProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(
      <BrowserRouter>
        <FeatureProduct />
      </BrowserRouter>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
