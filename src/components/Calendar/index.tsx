import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler } from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';

import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br'

interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: DateCallbackHandler;
}


function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme();

    return (
        <CustomCalendar
            renderArrow={(direction) =>
                <Feather
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    color={theme.COLORS.text}
                    size={24}
                />
            }

            headerStyle={{
                backgroundColor: theme.COLORS.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.COLORS.text_detail,
                paddingBottom: RFValue(10),
                marginBottom: RFValue(24)
            }}

            theme={{
                textDayFontFamily: theme.FONTS.secondary_regular,
                textDayHeaderFontFamily: theme.FONTS.primary_semiBold,
                textDayHeaderFontSize: RFValue(10),
                textDayFontSize: RFValue(15),
                textMonthFontSize: RFValue(20),
                textMonthFontFamily: theme.FONTS.primary_semiBold,
                monthTextColor: theme.COLORS.heading,
                arrowStyle: {
                    marginHorizontal: RFValue(-10)
                }
            }}

            firstDay={1}
            minDate={new Date}
            markingType={'period'}
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    );
}

export {
    Calendar,
    MarkedDateProps,
    DayProps,
    generateInterval
}