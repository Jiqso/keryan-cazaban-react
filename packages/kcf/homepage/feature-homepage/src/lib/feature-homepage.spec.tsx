import FeatureHomepage from './feature-homepage';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';

describe('FeatureHomepage', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<FeatureHomepage />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
