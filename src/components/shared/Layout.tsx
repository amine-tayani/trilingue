import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { FooterLayout } from "./Footer";

export function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <FooterLayout />
    </>
  );
}
