import FeatureLayout from './feature-layout';
import { IntlHelper } from '@utils/intl-helper';
import { IntlMessages } from '@utils/translation';

describe('FeatureLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<FeatureLayout />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
