import { Link } from 'react-router-dom';


import Input from '../components/Form/Input/Input';
import Button from '../components/Form/Button/Button';
import Heading from '../components/Heading';
import { State, City } from 'country-state-city';
import Select from '../components/Select';
import { Controller } from 'react-hook-form';
import useAddSoc from '../hooks/useAddSoc';
import { useEffect, useState } from 'react';
import { sectors } from '../shared/data';

export var states;

if (!states) {
  let arr = State.getStatesOfCountry('IN').map(({ name, isoCode }) => ({
    label: name,
    value: isoCode,
  }));
  states = arr;
}

const Fields = [
  {
    label: 'name',
    type: 'text',
    name: 'name',
    placeholder: 'enter name of the society',
  },
  {
    label: 'address',
    name: 'address',
    type: 'address',
    placeholder: 'enter address of the society',
  },
  {
    label: 'Registration Date',
    name: 'regDate',
    type: 'date',
    // placeholder: '******',
  },
  {
    label: 'Operating Area',
    name: 'opArea',
    type: 'text',
    placeholder: 'XYZ area of some city',
  },
];
console.clear();
console.log(Array.from(sectors));
const sectorOptions = [];

Array.from(sectors).map((val) => {
  sectorOptions.push({
    label: val,
    value: val,
  });
});

console.log();
// console.log(states);

const SignUp = () => {
  const { register, handleSubmit, errors, control, onSubmit, watch } =
    useAddSoc();

  const state = watch('state');
  const [cities, setCities] = useState([]);

  const SelectFields = [
    {
      label: 'Sector',
      options: sectorOptions,
      name: 'sector',
      placeholder: 'Sector...',
    },
    {
      label: 'State',
      options: states,
      name: 'state',
      placeholder: 'State...',
    },
    {
      label: 'District',
      options: cities,
      name: 'district',
      placeholder: 'District...',
    },
  ];

  useEffect(() => {
    let arr = City.getCitiesOfState('IN', state).map(({ name }) => ({
      label: name,
      value: name,
    }));

    setCities(arr);
  }, [state]);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark   ">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Heading>Sign Up to CRCS Admin Portal</Heading>
              <span className="-mt-8   mb-6  block font-medium">
                Add a new Society
              </span>

              <form>
                <div className="grid grid-cols-1 gap-x-8 overflow-visible md:grid-cols-2">
                  {Fields?.map(({ label, placeholder, name, type }) => (
                    <Input
                      key={label}
                      error={errors[name]?.message}
                      {...{ register, label, placeholder, name, type }}
                    />
                  ))}
                  {SelectFields?.map(
                    ({ name, placeholder, options, label }) => (
                      <Controller
                        name={name}
                        key={placeholder}
                        control={control}
                        render={({ field }) => {
                          const { name, onChange, value, ref } = field;
                          return (
                            <div className="flex flex-col">
                              <Select
                                ref={ref}
                                {...{
                                  name,
                                  value,
                                  placeholder,
                                  options,
                                }}
                                error={errors[name]?.message}
                                onChange={({ value }) => onChange(value)}
                              />
                            </div>
                          );
                        }}
                      />
                    )
                  )}
                </div>

                <div className="mx-auto mt-12 w-48  ">
                  <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
