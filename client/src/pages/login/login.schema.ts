import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is a required field'),
    password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});