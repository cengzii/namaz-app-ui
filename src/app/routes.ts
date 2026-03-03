import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { HomePage } from "./pages/HomePage";
import { PrayersPage } from "./pages/PrayersPage";
import { PrayerDetailPage } from "./pages/PrayerDetailPage";
import { PrayerFlowPage } from "./pages/PrayerFlowPage";
import { DeepModeIntroPage } from "./pages/DeepModeIntroPage";
import { ProgressPage } from "./pages/ProgressPage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  // Welcome / onboarding (no nav bar)
  { path: "/", Component: WelcomePage },

  // Main app shell with bottom nav
  {
    path: "/home",
    Component: MainLayout,
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: "/prayers",
    Component: MainLayout,
    children: [
      { index: true, Component: PrayersPage },
      { path: ":id", Component: PrayerDetailPage },
    ],
  },
  {
    path: "/progress",
    Component: MainLayout,
    children: [{ index: true, Component: ProgressPage }],
  },
  {
    path: "/settings",
    Component: MainLayout,
    children: [{ index: true, Component: SettingsPage }],
  },

  // Full-screen immersive pages (no nav bar)
  { path: "/flow/:id", Component: PrayerFlowPage },
  { path: "/deep-intro/:id", Component: DeepModeIntroPage },

  { path: "*", Component: NotFoundPage },
]);
