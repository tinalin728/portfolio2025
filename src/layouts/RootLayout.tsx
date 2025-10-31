import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { PROJECT_CARDS } from "../pages/projects/const";
import { useTheme } from "../components/navbar/useTheme";
import { Helmet } from "react-helmet";

export default function RootLayout() {
  useTheme();
  const { pathname } = useLocation();
  const PROJECT_PATHS = new Set(PROJECT_CARDS.map((p) => `/${p.id}`));
  const hideNavbar = PROJECT_PATHS.has(pathname);

  return (
    <>
      <Helmet>
        <title>Tina lin | UX/UI designer and web developer</title>
        <meta
          name="description"
          content="Portfolio, UX, UI, web development, case studies, selected work."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tina lin" />
      </Helmet>

      {!hideNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
