import { redirect } from 'next/navigation';

export default function Dashboard() {
  redirect('/admin/users');
  return null;
}
