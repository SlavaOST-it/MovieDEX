export const useCurrentMonthAndYear = () => {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()

    const currentMonthIndex = currentDate.getMonth();
    const currentMonth = months[currentMonthIndex].toUpperCase();

    return {
        currentYear,
        currentMonth
    }
}