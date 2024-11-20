import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginOptions, ILoginService } from '@/services/Authentication/AuthenticationService';
import { LoginForm, MutationConfig } from './login.types';
import { schema } from './login.schema';

type UseLoginProps = {
    config?: MutationConfig;
    loginService: ILoginService;
};

export const useLoginModel = ({ config, loginService }: UseLoginProps) => {
    const form = useForm<LoginForm>({ resolver: yupResolver(schema) });

    const mutation = useMutation({
        ...config,
        mutationKey: ['login'],
        mutationFn: (options: ILoginOptions) => loginService.exec(options),
    });

    const submitLoginForm = async (data: LoginForm) => {
        const options: ILoginOptions = {
            email: data.email,
            password: data.password,
        };
        await mutation.mutateAsync(options);
        //navigate('/home)
    };

    return {
        ...mutation,
        ...form,
        submitLoginForm,
    };
};
