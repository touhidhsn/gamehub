import { useQuery } from 'react-query';
import APIClient from '../services/api-client';
import { Platform } from './Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
