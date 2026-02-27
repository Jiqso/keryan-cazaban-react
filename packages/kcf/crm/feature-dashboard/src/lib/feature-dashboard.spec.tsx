import FeatureDashboard from './feature-dashboard';
import { BrowserRouter } from 'react-router-dom';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('FeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(
      <BrowserRouter>
        <FeatureDashboard />
      </BrowserRouter>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
