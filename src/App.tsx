import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import toast, { Toaster } from 'react-hot-toast';
import Protected from './components/Protected';
import { useAppStore } from './utils/store/appStore';
import TableOne from './components/TableOne';
import data from './shared/data';
import { fullHeader } from './shared/table';
import { shorten } from './shared/functions';


const Calendar = lazy(() => import('./pages/Calendar'));
const AddSoc = lazy(() => import('./pages/AddSoc'));
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
          <Route
            path="/add/society"
            element={
              <Protected>
                <Suspense fallback={<Loader />}>
                  <AddSoc />
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
        <Route
          path="/table"
          element={
            <Protected>
              <Suspense fallback={<Loader />}>
                <div className="col-span-12 xl:col-span-12">
                  <TableOne full header={fullHeader}>
                    {data.map(
                      ({
                        name = 'N/A',
                        address = 'N/A',
                        sector = 'N/A',
                        state = 'N/A',
                        district = 'N/A',
                        opArea = 'N/A',
                        regDate,
                      }) => (
                        <div
                          key={district}
                          className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5 lg:grid-cols-7"
                        >
                          <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <p className="hidden capitalize text-black dark:text-white sm:block">
                              {shorten(name, 50)}
                            </p>
                          </div>

                          <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">
                              {shorten(address, 50)}
                            </p>
                          </div>

                          <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-meta-3">{state}</p>
                          </div>

                          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">
                              {district}
                            </p>
                          </div>

                          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">
                              {regDate
                                ? new Date(regDate).toDateString()
                                : 'N/A'}
                              {/* {regDate} */}
                            </p>
                          </div>
                          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">{opArea}</p>
                          </div>
                          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">{sector}</p>
                          </div>
                        </div>
                      )
                    )}
                  </TableOne>
                </div>
              </Suspense>
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
