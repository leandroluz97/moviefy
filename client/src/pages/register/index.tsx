import { HttpClient } from '@/infrastructure/http/httpClient';
import { RegisterView } from './register.view';
import { RegisterService } from '@/services/Authentication/AuthenticationService';
import { useRegisterModel } from './register.model';

export const Register = () => {
    const httClient = new HttpClient();
    const registerService = new RegisterService(httClient);
    const register = useRegisterModel({ registerService });
    return <RegisterView {...register} />;
};
