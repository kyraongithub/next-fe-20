import LoginPage from '@/pages/login';
import { fireEvent, render } from '@testing-library/react';

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

describe('Login Page', () => {
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
  it('should render login page', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });

  it('should click login button', () => {
    const { getByText, container } = render(<LoginPage />);
    const button = getByText('Login');
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
  it('should change input email value', () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const input = getByPlaceholderText('email');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
  it('should change input password value', () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const input = getByPlaceholderText('password');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});
