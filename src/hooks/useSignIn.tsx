import { useForm } from 'react-hook-form';
import signInSchema from '../utils/schema/signInSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import UserI from '../shared/interface';
import { useAppStore } from '../utils/store/appStore';
import { toast } from 'react-hot-toast/headless';
import { useNavigate } from 'react-router-dom';

export default function useSignIn() {
  const { users, setCurrUser, setLogin } = useAppStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  function onSubmit(data: UserI) {
    // console.log(data);
    const user = users.filter(
      ({ email, password }) =>
        email === data.email && password === data.password
    );
    if (user.length > 0) {
      setCurrUser(user[0]);
      setLogin(true);
      toast.success('Admin Logged in Succesfully');
      navigate('/');
      window.location.reload();
    }

    // setUser(data);
    toast.success('Admin Regisitered Succesfully ...');
  }

  return { register, handleSubmit, errors, onSubmit };
}
