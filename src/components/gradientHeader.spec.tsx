import { render, screen } from '@testing-library/react';
import GradientHeader from './gradientHeader';

describe('GradientHeader', () => {
  it('renders with default props', () => {
    render(<GradientHeader />);
    expect(screen.getByText('Welcome to the App. This is a test')).toBeInTheDocument();
    expect(screen.getByText('Start building amazing things')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const title = 'Custom Title';
    const subtitle = 'Custom Subtitle';
    render(<GradientHeader title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
});
