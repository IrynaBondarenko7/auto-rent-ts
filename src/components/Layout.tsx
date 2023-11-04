import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Loader } from "./Loader/Loader";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
