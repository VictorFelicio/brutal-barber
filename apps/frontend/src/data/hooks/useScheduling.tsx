import { useContext } from 'react';
import SchedulingContext from '../context/SchedulingContext';

export const useScheduling = () => useContext(SchedulingContext);
