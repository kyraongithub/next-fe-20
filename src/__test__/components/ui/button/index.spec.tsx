import Button from '@/components/UI/button';
import { render, fireEvent } from '@testing-library/react';

describe('Button Component', () => {
  it('should render button', () => {
    const handleClick = jest.fn();
    const { container } = render(<Button onclick={handleClick}>Click</Button>);
    expect(container).toMatchSnapshot();
  });
  it('should click button', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onclick={handleClick}>Click</Button>);
    const button = getByText('Click');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
