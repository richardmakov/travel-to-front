import { ReactNode } from 'react';
import DenegattedAccess from '../pages/DenegatedAccess/DenegattedAccessView';

interface ProtecteRouteProps {
    role: string,
    userRole: string[] | undefined
    children: ReactNode
}

const ProtectedRoute = ({ role, userRole, children }: ProtecteRouteProps) => {
    if (userRole !== undefined) {
        const hasAccess = userRole.some(r => role.includes(r));
        if (!hasAccess) {
            return <DenegattedAccess />;
        }
    }

    return children;
};

export default ProtectedRoute;