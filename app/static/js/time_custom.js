/** Functions **/
function getHours() {
    return parseInt($('#custom-time-hours').val());
}
function getMinutes() {
    return parseInt($('#custom-time-minutes').val());
    // console.log(hours);
}

function outputContent() {
    /* Outputs digital time, button title, translation (and hide it), ungreencolorize button (if there is) */
    let gender = getGender();
    let hours = getHours();
    let minutes = getMinutes();
    let translit = translateTime(hours, minutes, 'rus', gender);
    let hebrew = translateTime(hours, minutes, 'heb', gender);
    outputTranslation(translit, hebrew);
}

function changeGenderTranslation(gender) {
    let hours = getHours();
    let minutes = getMinutes();
    let translit = translateTime(hours, minutes, 'rus', gender);
    let hebrew = translateTime(hours, minutes, 'heb', gender);
    outputTranslation(translit, hebrew);
}

/** Events handlers **/
/* Page load */
page.ready(outputContent());

/* Change time */
$('#custom-time').on('change', function() { showTranslationOrNewTask(); });
