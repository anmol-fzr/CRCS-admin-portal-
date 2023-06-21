import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserI from '../shared/interface';
import { useAppStore } from '../utils/store/appStore';
import { toast } from 'react-hot-toast/headless';
import { useNavigate } from 'react-router-dom';
import settingsSchema from '../utils/schema/settingsSchema';

export default function useSignIn() {
  const { users, setCurrUser, currUser } = useAppStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: currUser,
    resolver: yupResolver(settingsSchema),
  });

  function onSubmit(data: UserI) {
    // console.log(data);
    const user = users.filter(
      ({ email, password }) =>
        email === data.email && password === data.password
    );
    if (user.length > 0) {
      setCurrUser(user[0]);
      toast.success('Admin Logged in Succesfully');
      navigate('/');
      window.location.reload();
    }

    // setUser(data);
    toast.success('Admin Regisitered Succesfully ...');
  }

  return { register, handleSubmit, errors, onSubmit };
}
