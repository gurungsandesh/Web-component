import { expect, test } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';

test('render correctly', () => {
    render(<App />)
    const titleElement = screen.getByText('heading')
    expect(titleElement).toBeInTheDocument()
}
)