import FeatureMarketplace from './feature-marketplace';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('FeatureMarketplace', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<FeatureMarketplace />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
