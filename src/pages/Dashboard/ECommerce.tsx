import Card from '../../components/Card.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import TableOne from '../../components/TableOne.tsx';

// import data from '../../shared/data';
import Heading from '../../components/Heading.tsx';
import { header } from '../../shared/table.ts';
import { shorten } from '../../shared/functions.ts';
import { useAppStore } from '../../utils/store/appStore.tsx';

const countUniques = (orders = [], name) => {
  const tableObj = {};
  orders.forEach((el) => {
    tableObj[el[name]] = null;
  });
  const uStates = Object.keys(tableObj).length;
  return uStates;
};
 


const ECommerce = () => {
const {data} = useAppStore()

const topCardData = [
  {
    value: data.length,
    label: 'Cooperative Societies',
  },
  {
    value: countUniques(data, 'sector'),
    label: 'Sectors',
  },
  {
    value: countUniques(data, 'states'),
    label: 'States',
  },
];

  return (
    <>
      <Heading>CRCS Admin Portal</Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {topCardData.map(({ label, value }) => (
          <Card {...{ label, value }} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        <ChartThree />
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-12">
          <TableOne header={header}>
            {data.map(({ name, address, sector, state, district }) => (
              <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
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
                  <p className="text-black dark:text-white">{district}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-meta-5">{sector}</p>
                </div>
              </div>
            ))}
          </TableOne>
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
