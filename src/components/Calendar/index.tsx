import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br'


export function Calendar() {
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
        />
    );
}