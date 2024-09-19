import { Route, Routes, Navigate } from "react-router-dom";
import LoginScreen from "../features/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../features/Dashboard";
import EventScreen from "../features/Events";
import GalleryScreen from "../features/Gallery";
import { createBrowserRouter } from "react-router-dom";

// export const AllRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to={"/event"} replace={true} />} />

//       <Route path="/login" Component={LoginScreen} />
//       <Route path="/" element={<ProtectedRoute />}>
//         <Route path="/gallery" element={<GalleryScreen />} />
//         <Route path="/event" element={<EventScreen />} />
//       </Route>
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// const isAuthenticated = () => {
//     return !!getAccessToken();
//   }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },

  {
    path: "/login",
    element: <LoginScreen />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/event",
        element: <EventScreen />,
      },
      {
        path: "/gallery",
        element: <GalleryScreen />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
