import AboutPage from '@/pages/about';
import { render } from '@testing-library/react';

describe('About Page', () => {
  it('should render about page', () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
