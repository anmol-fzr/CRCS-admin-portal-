import { useForm } from 'react-hook-form';
import signUpSchema from '../utils/schema/signUpSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import UserI from '../shared/interface';
import { useAppStore } from '../utils/store/appStore';
import { toast } from 'react-hot-toast/headless';
import { useNavigate } from 'react-router-dom';

export default function useSignUp() {
  const navigate = useNavigate();
  const { setUser, setCurrUser, setLogin } = useAppStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  function onSubmit(data: UserI) {
    console.log(data);
    setUser(data);
    setCurrUser(data);
    setLogin(true);
    toast.success('Admin Regisitered Succesfully ...');
    navigate('/');
    window.location.reload();
  }

  return { register, handleSubmit, errors, onSubmit };
}
