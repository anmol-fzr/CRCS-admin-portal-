import { string, object, ref } from 'yup';

const settingsSchema = object().shape({
  email: string()
    .email()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      'Please Enter a Valid Email Address'
    )
    .required(),
  password: string().required(),
});

export default settingsSchema;
