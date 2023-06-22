import { Link } from 'react-router-dom';

import Input from '../components/Form/Input/Input';
import Button from '../components/Form/Button/Button';
import Heading from '../components/Heading';
import { State, City } from 'country-state-city';
import Select from '../components/Select';
import { Controller } from 'react-hook-form';
import useAddSoc from '../hooks/useAddSoc';
import { useEffect } from 'react';

var states;
var cities;

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
    label: 'phone',
    name: 'phone',
    type: 'phone',
    placeholder: 'XXX-XXX-XXXX',
  },
  {
    label: 'password',
    name: 'password',
    type: 'password',
    placeholder: '******',
  },
  {
    label: 'confirm password',
    name: 'cPassword',
    type: 'password',
    placeholder: '******',
  },
];

// console.log(states);

const SelectFields = [
  {
    label: 'name',
    type: 'text',
    options: states,
    name: 'name',
    placeholder: 'State...',
  },
];

const SignUp = () => {
  const { register, handleSubmit, errors, control, onSubmit, watch } =
    useAddSoc();
  const state = watch('state');

  useEffect(() => {
    console.clear();
    console.log(state);
  }, [state]);

  useEffect(() => {
    cities = City.getCitiesOfState('IN', state);
    console.log(City.getCitiesOfState('IN', state));
  }, [state]);

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

              <form className="grid grid-cols-2 gap-x-8 overflow-visible">
                {Fields?.map(({ label, placeholder, name, type }) => (
                  <Input
                    key={label}
                    error={errors[name]?.message}
                    {...{ register, label, placeholder, name, type }}
                  />
                ))}
                {SelectFields?.map(({ name, placeholder, options, label }) => (
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
                            {...{ name, value, placeholder, label, options }}
                            error={errors[name]?.message}
                            onChange={({ value }) => onChange(value)}
                          />
                        </div>
                      );
                    }}
                  />
                ))}

                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-primary">
                      Sign in
                    </Link>
                  </p>
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
