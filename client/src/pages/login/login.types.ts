import { User } from '@/domain/entites/User';
import { ILoginOptions } from '@/services/Authentication/AuthenticationService';
import { AxiosError } from 'axios';
import { UseMutationOptions } from 'react-query';

export type LoginForm = {
    email: string;
    password: string;
};

export type MutationConfig = UseMutationOptions<User, AxiosError, ILoginOptions>;
