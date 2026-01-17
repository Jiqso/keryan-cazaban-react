import { IntlHelper } from '@utils/intl-helper';
import { IntlMessages } from '@utils/translation';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = IntlHelper(<App />, 'en', IntlMessages('en'));
    expect(baseElement).toBeTruthy();
  });
});
