import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import toast, { Toaster } from 'react-hot-toast';
import Protected from './components/Protected';
import { useAppStore } from './utils/store/appStore';

const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
// const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const { currUser } = useAppStore();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ zIndex: 9999999999999 }}
        toastOptions={{
          duration: 3000,
          success: {
            duration: 5000,
            theme: {
              primary: 'blue',
              secondary: 'black',
            },
          },
        }}
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route
            index
            element={
              <Protected>
                <ECommerce />
              </Protected>
            }
          />
          <Route
            path="/calendar"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <Calendar />
                </Suspense>
              </Protected>
            }
          />
          {/* <Route
            path="/profile"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              </Protected>
            }
          /> */}
          <Route
            path="/forms/form-elements"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <FormElements />
                </Suspense>
              </Protected>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <FormLayout />
                </Suspense>
              </Protected>
            }
          />
          <Route
            path="/tables"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <Tables />
                </Suspense>
              </Protected>
            }
          />
          <Route
            path="/settings"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <Settings />
                </Suspense>
              </Protected>
            }
          />
          <Route
            path="/chart"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <Chart />
                </Suspense>
              </Protected>
            }
          />
          {/* <Route
            path="/ui/alerts"
            element={
              <Suspense fallback={<Loader />}>
                <Alerts />
              </Suspense>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <Suspense fallback={<Loader />}>
                <Buttons />
              </Suspense>
            }
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
