import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label/Label';
import { useLoginModel } from './login.model';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/Card';
import { LoginForm } from './login.types';
import { ErrorAlert } from '@/components/ErrorAlert';

type LoginViewProps = ReturnType<typeof useLoginModel>;

export const LoginView = (props: LoginViewProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = props;

    const submit = (data: LoginForm) => {
        console.log(data);
    };

    return (
        <div className="flex items-center h-full justify-center">
            <Card className="w-full max-w-md bg-white">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col text-left space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="john.doe@example.com"
                                    type="email"
                                    {...register('email')}
                                />
                                <ErrorAlert
                                    hasError={Boolean(errors.email)}
                                    message={errors.email?.message}
                                />
                            </div>
                            <div className="flex flex-col text-left space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    placeholder="•••••••••"
                                    type="email"
                                    {...register('password')}
                                />
                                <ErrorAlert
                                    hasError={Boolean(errors.password)}
                                    message={errors.password?.message}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-slate-800 text-white">Login</Button>
                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};
