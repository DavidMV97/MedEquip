import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="bg-gray-50">
      <Outlet />
    </main>
  )
}

