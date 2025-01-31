import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signUpPage";
import HomePage from "./pages/homePage";
import LostItemsForm from "./pages/lostItemForm";
import FoundItemForm from "./pages/foundItemForm";
import SearchPage from "./pages/searchPage";
import Uploads from "./pages/uploads";
import ProfilePage from "./pages/profilePage";
import MyUploads from "./pages/myUploads";
import Notifications from "./pages/notifications";

const router = createBrowserRouter([
  {
    path: "/Lost-n-found",
    element: <SignUpPage />,
  },

  {
    path: "/Home",
    element: <HomePage />,
  },

  {
    path: "/LostItemForm",
    element: <LostItemsForm />,
  },

  {
    path: "/FoundItemForm",
    element: <FoundItemForm />,
  },

  {
    path: "/Search",
    element: <SearchPage />,
  },

  {
    path: "/Uploads",
    element: <Uploads />,
  },

  {
    path: "/Profile",
    element: <ProfilePage />,
  },

  {
    path: "/MyUploads",
    element: <MyUploads />,
  },

  {
    path: "/Notifications",
    element: <Notifications />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
