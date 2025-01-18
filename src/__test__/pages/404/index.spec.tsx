import _404 from '@/pages/404';
import { render } from '@testing-library/react';

describe('404 Page', () => {
  it('should render 404 page', () => {
    const { container } = render(<_404 />);
    expect(container).toMatchSnapshot();
  });
});
