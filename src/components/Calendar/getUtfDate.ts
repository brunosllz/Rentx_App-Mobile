import { addDays } from 'date-fns';

export function getUtfDate(date: Date) {
    return addDays(date, 1);
}