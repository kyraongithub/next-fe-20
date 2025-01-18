import Authorization from '@/components/Layout/Authorization';
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

describe('Authorization Component', () => {
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
  it('should render authorization', () => {
    const { container } = render(
      <Authorization>
        <h1>test</h1>
      </Authorization>
    );
    expect(container).toMatchSnapshot();
  });
});
