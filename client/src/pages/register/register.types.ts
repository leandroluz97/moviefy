import { User } from '@/domain/User';
import { IRegisterOptions } from '@/services/Authentication/AuthenticationService';
import { AxiosError } from 'axios';
import { UseMutationOptions } from 'react-query';

export type RegisterForm = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type MutationConfig = UseMutationOptions<User, AxiosError, IRegisterOptions>;
