import { default as ReactSelect } from 'react-select';

const styles = {
  container: {
    padding: 0,
    height: '100%',
    borderRadius: '0.5rem',
    border: '1px solid #E2E8F0',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    color: '#696E77',
  },
  control: {
    backgroundColor: '#FFF',
    borderRadius: '0.5rem',
    height: '100%',
    border: 'none',
    padding: '0',
  },
  value: {
    backgroundColor: '#FFF',
    color: '#16243D',
    borderRadius: ' .5rem',
    paddingInline: '1.35rem',
    paddingBlock: '0.5rem',
    fontWeight: 500,
  },
  chevronBox: {
    borderRadius: '0  .5rem .5rem 0',
    backgroundColor: '#FFF',
  },
  placeholder: {
    color: '#696E77',
    fontWeight: 500,
  },
};

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Array<Option>;
  placeholder: string;
  error?: string;
  label: string;
  name: string;
  onChange: Function | any;
}

export default function Select({
  options,
  placeholder,
  onChange,
  error,
  label,
  name,
}: SelectProps) {
  return (
    <>
      <div className="relative z-[20] mb-4  h-14  ">
        <label
          htmlFor={name}
          className="mb-2.5 block font-medium capitalize text-black dark:text-white"
        >
          {label}
        </label>
        <ReactSelect
          options={options}
          placeholder={`Select ${placeholder}`}
          className="absolute capitalize "
          onChange={onChange}
          styles={{
            container: (baseStyle) => ({
              ...baseStyle,
              ...styles.container,
            }),
            control: (baseStyle) => ({
              ...baseStyle,
              ...styles.control,
            }),
            valueContainer: (baseStyle) => ({
              ...baseStyle,
              ...styles.value,
            }),
            indicatorsContainer: (baseStyle) => ({
              ...baseStyle,
              ...styles.chevronBox,
            }),
            placeholder: (baseStyle) => ({
              ...baseStyle,
              ...styles.placeholder,
            }),
            menuList: (baseStyle) => ({
              ...baseStyle,
              fontWeight: 500,
              color: '#000',
            }),
          }}
        />
      </div>
      {error && <p className="text-red-500 text-sm capitalize">{error}</p>}
    </>
  );
}
