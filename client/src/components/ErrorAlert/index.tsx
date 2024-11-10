import { CircleAlertIcon } from 'lucide-react';

type IErrorAlertOptions = {
    hasError: boolean;
    message?: string;
};
export const ErrorAlert = ({ hasError, message }: IErrorAlertOptions) => {
    return hasError ? (
        <div className="flex gap-1 items-center">
            <CircleAlertIcon size={15} className="text-red-600" />
            <p className="text-red-700 text-sm">{message}</p>
        </div>
    ) : null;
};
