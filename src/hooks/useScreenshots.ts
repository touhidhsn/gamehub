
import APIClient from '../services/api-client'
import { Screenshot } from '../entities/Screenshot';
import { useQuery } from 'react-query';

const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey:['screenshod', gameId],
        queryFn: apiClient.getAll
    })
    
}

export default useScreenshots