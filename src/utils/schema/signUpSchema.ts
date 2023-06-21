import { string, number, object, ref } from 'yup';

const signUpSchema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      'Please Enter a Valid Email Address'
    )
    .required(),
  phone: number()
    .typeError('Please Enter a valid Phone ')
    .test(
      'len',
      'Phone must be of 10 digits',
      (val) => val.toString().length === 10
    )
    .required(),
  password: string().required(),
  cPassword: string().oneOf([ref('password'), null], 'Passwords must match'),
});

export default signUpSchema;
