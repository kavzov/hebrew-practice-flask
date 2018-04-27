/** Functions **/
function getRandHours() {
    return getRandInt(0, 12);
}

function getRandMinutes() {
    let minutes = getRandInt(0, 60);
    let checkedIntervalNode = '[name="random-time-interval"]:checked';
    let interval = parseInt($(checkedIntervalNode).val());
    // Counts with interval > 1 minute
    if (interval)
        while (minutes % interval !== 0) {
            minutes = getRandInt(0, 60);
        }
    return minutes;
}

function outputContent() {
    /* Outputs digital time, button title, translation (and hide it), ungreencolorize button (if there is) */
    let gender = getGender();
    let hours = getRandHours();
    let minutes = getRandMinutes();
    let translit = translateTime(hours, minutes, 'rus', gender);
    let hebrew = translateTime(hours, minutes, 'heb', gender);
    hours = set0hrsTo00(hours);                // '0' hours -> '00'
    minutes = setMinutesLeadZero(minutes);     // 'N' min -> '0N'
    let taskStr = formTimeStr(hours, minutes);

    outputTask(taskStr);
    setBtnTitle(translateBtn, btnTitleTranslate);
    removeBtnColor(translateBtn, greenColor);  // disable green color of the button if it set before
    outputTranslation(translit, hebrew);
    hideTranslation();
}

function changeGenderTranslation(gender) {
    let time = taskArea.text().split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let translit = translateTime(hours, minutes, 'rus', gender);
    let hebrew = translateTime(hours, minutes, 'heb', gender);
    outputTranslation(translit, hebrew);
}


/** Events handlers **/
/* Page load */
page.ready(outputContent());

/* Click on Translate button */
translateBtn.on('click', function() { showTranslationOrNewTask(); });
