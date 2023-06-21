import CardFour from '../../components/CardFour.tsx';
import Card from '../../components/Card.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';

import data from '../../shared/data';

const header = [
  'Name',
  'address',
  'state',
  'district',
  'registration Date',
  'operating area',
  'sector',
];

const countUniques = (orders = [], name) => {
  const tableObj = {};
  orders.forEach((el) => {
    tableObj[el[name]] = null;
  });
  const uStates = Object.keys(tableObj).length;
  return uStates;
};

console.log(countUniques(data, 'sector'));

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

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {topCardData.map(({ label, value }) => (
          <Card {...{ label, value }} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-12">
          <TableOne header={header} />
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
