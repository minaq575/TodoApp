module.exports.getDataToDay = getDataToDay;
function getDataToDay() {
    const dateOption: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Date().toLocaleDateString('th-TH', dateOption);

}


