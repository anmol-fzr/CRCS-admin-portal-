import React from 'react';
import { useForm } from 'react-hook-form';
export default function useAddSoc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return {
    register,
    handleSubmit,
    errors,
    control,
    watch,
  };
}
