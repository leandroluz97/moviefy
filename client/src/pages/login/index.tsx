import { HttpClient } from '@/infrastructure/http/httpClient';
import { LoginView } from './login.view';
import { LoginService } from '@/services/Authentication/AuthenticationService';
import { useLoginModel } from './login.model';

export const Login = () => {
    const httClient = new HttpClient();
    const loginService = new LoginService(httClient);
    const login = useLoginModel({ loginService });
    return <LoginView {...login} />;
};
