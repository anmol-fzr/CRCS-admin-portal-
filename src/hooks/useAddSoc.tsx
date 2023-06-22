import { useForm } from 'react-hook-form';
import { useAppStore } from '../utils/store/appStore';
import { toast } from 'react-hot-toast';
import { states } from '../pages/AddSoc';

export default function useAddSoc() {
  const { addData } = useAppStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  function onSubmit(data) {
    data.state = states.map(
      ({ label, value }) => value === data.state
    )[0].label;

    console.log(states.filter(({ label, value }) => value === data.state));
    console.log(states[0]);
    console.log(data.state);

    addData(data);
    toast.success('Data Added Successfully');
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    control,
    watch,
  };
}
