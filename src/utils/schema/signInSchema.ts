import { string, object, ref } from 'yup';

const signInSchema = object().shape({
  email: string()
    .email()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      'Please Enter a Valid Email Address'
    )
    .required(),
  password: string().required(),
});

export default signInSchema;
