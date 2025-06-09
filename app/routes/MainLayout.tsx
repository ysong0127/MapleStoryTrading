// app/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <main style={{ padding: '1rem' }}>
        <Navbar />
        <Outlet />  {/* 這裡會切換不同頁面 */}
      </main>
    </>
  );
}