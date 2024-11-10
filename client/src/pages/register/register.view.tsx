import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label/Label';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/Card';
import { Link } from 'react-router-dom';
import { useRegisterModel } from './register.model';
import { RegisterForm } from './register.types';
import { ErrorAlert } from '@/components/ErrorAlert';

type RegisterViewProps = ReturnType<typeof useRegisterModel>;

export const RegisterView = (props: RegisterViewProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = props;

    const submit = (data: RegisterForm) => {
        console.log(data);
    };

    return (
        <div className="flex items-center h-full justify-center bg-background">
            <Card className="w-full max-w-md bg-white">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Register</CardTitle>
                    <CardDescription>Create a new account to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="register" onSubmit={handleSubmit(submit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col text-left space-y-1.5">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    placeholder="John"
                                    {...register('firstname')}
                                />
                                <ErrorAlert
                                    hasError={Boolean(errors.firstname)}
                                    message={errors.firstname?.message}
                                />
                            </div>
                            <div className="flex flex-col text-left space-y-1.5">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Doe" {...register('lastname')} />
                                <ErrorAlert
                                    hasError={Boolean(errors.lastname)}
                                    message={errors.lastname?.message}
                                />
                            </div>
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
                            <div className="flex flex-col text-left space-y-1.5">
                                <Label htmlFor="password">Confirm Password</Label>
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
                    <Button form="register" className="w-full bg-slate-800 text-white">
                        Register
                    </Button>
                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/auth/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};
