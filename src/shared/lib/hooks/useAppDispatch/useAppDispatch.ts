import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/providers/StoreProvider';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
