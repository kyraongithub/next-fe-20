import FoodPage from '@/pages/food';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
      isReady: true,
    };
  },
}));

describe('Food Page', () => {
  beforeEach(async () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');

    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
      isReady: true,
    }));
  });
  it('should render food page', () => {
    const { container } = render(<FoodPage />);
    expect(container).toMatchSnapshot();
  });
});
