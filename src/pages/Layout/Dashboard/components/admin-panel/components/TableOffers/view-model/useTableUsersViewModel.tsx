import { useEffect, useState } from 'react'
import useUserStore, { FetchUsers } from '../../../../../../../../stores/userStore'



export default function useTableUsersViewModel() {

    const { fetchUsers } = useUserStore()
    const [users, setUsers] = useState<FetchUsers[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    
            const fetchAllUsers = async () => {
                setLoading(true);
                try {
                    const result = await fetchUsers();
                    setUsers(result);
                } catch (err) {
                    setError('Failed to fetch users');
                } finally {
                    setLoading(false);
                }
            };
            fetchAllUsers();
        
    
    }, [ fetchUsers]);

    return {
        users, loading, error
    }
}
