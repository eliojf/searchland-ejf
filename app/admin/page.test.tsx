import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Dashboard from './page';
import { redirect } from 'next/navigation';

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('Dashboard Page', () => {
  it('redirects to /admin/users', () => {
    render(<Dashboard />);

    expect(redirect).toHaveBeenCalledWith('/admin/users');
  });
});
