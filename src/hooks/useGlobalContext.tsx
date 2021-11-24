import { GlobalContext } from '@/contexts/GlobalContext';
import { useContext } from 'react';

export default function useGlobalContext() {
    return useContext(GlobalContext);
}
