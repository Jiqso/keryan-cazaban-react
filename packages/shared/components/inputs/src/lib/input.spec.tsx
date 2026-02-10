import { render } from '@testing-library/react';
import { MarketplaceLoginInput } from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MarketplaceLoginInput
        type={'name'}
        value={''}
        setValue={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
