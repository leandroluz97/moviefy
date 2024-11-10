import { useForm } from 'react-hook-form';
import {
    IRegisterOptions,
    IRegisterService,
} from '@/services/Authentication/AuthenticationService';
import { useMutation } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { RegisterForm, MutationConfig } from './register.types';

type UseRegisterProps = {
    config?: MutationConfig;
    registerService: IRegisterService;
};

const schema = yup.object().shape({
    firstname: yup.string().required('Firstname is a required field'),
    lastname: yup.string().required('Lastname is a required field'),
    email: yup.string().email('Email is invalid').required('Email is a required field'),
    password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
});

export const useRegisterModel = ({ config, registerService }: UseRegisterProps) => {
    const form = useForm<RegisterForm>({ resolver: yupResolver(schema) });

    const mutation = useMutation({
        ...config,
        mutationKey: ['register'],
        mutationFn: (options: IRegisterOptions) => registerService.exec(options),
    });

    return {
        ...mutation,
        ...form,
    };
};
