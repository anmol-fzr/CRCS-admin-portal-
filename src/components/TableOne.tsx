import { Link, useLocation } from 'react-router-dom';
const TableOne = ({ header, children, full }) => {
  const { pathname } = useLocation();
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-full justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Cooperative Socities
        </h4>
        <Link
          className="hover:scale-110 "
          to={pathname === '/table' ? '/' : '/table'}
          onClick={() => {
            // window.location.reload();
          }}
        >
          {pathname === '/table' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          )}
        </Link>
      </div>
      <div className="flex flex-col">
        <div
          className={`${
            full && 'lg:grid-cols-7'
          } grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 `}
        >
          {header.map((heading) => (
            <div className="first:text:left p-2 text-center xl:p-3">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {heading}
              </h5>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
};

export default TableOne;
