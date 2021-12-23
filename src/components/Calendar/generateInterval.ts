import { eachDayOfInterval, format } from 'date-fns';
import { MarkedDateProps, DayProps } from '.';
import theme from '../../global/styles/theme';

import { getUtfDate } from './getUtfDate';

export function generateInterval(start: DayProps, end: DayProps) {
    let interval: MarkedDateProps = {}

    eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) }).forEach((item) => {
        const date = format(getUtfDate(item), 'yyyy-MM-dd');

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date ? theme.COLORS.primary : theme.COLORS.primary_light,
                textColor: start.dateString === date || end.dateString === date ? theme.COLORS.background_secondary : theme.COLORS.primary,
            }
        }
    });

    return interval;
}