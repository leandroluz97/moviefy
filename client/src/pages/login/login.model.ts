import { useForm } from 'react-hook-form';
import { ILoginOptions, ILoginService } from '@/services/Authentication/AuthenticationService';
import { useMutation } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { LoginForm, MutationConfig } from './login.types';

type UseLoginProps = {
    config?: MutationConfig;
    loginService: ILoginService;
};

const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is a required field'),
    password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const useLoginModel = ({ config, loginService }: UseLoginProps) => {
    const form = useForm<LoginForm>({ resolver: yupResolver(schema) });

    const mutation = useMutation({
        ...config,
        mutationKey: ['login'],
        mutationFn: (options: ILoginOptions) => loginService.exec(options),
    });

    return {
        ...mutation,
        ...form,
    };
};
