/** Functions **/
function getRandHours() {
    return getRandInt(0, 12);
}

function getRandMinutes(multiple) {
    let minutes = getRandInt(0, 60);
    // Counts with multiple if it set
    if (multiple)
        while (minutes % multiple !== 0) {
            minutes = getRandInt(0, 60);
        }
    return minutes;
}

function dakot(lang) {
    /* Returns 'dakot' (minutes) word on `lang` or on hebrew */
    return (isTranslitLang(lang)) ? ' дакóт ' : ' דַקוֹת ';
}

function set0hrsTo00(hours) {
    return (hours) ? hours : '00';
}

function setMinutesLeadZero(minutes) {
    return (minutes < 10) ? '0' + minutes : minutes;
}

function formTimeStr(hrs, min) {
    return hrs + ':' + min;
}

function translateTime(hrs, min, lang, gender) {
    /* Translates `hrs` and `min` to `lang` and forms a string */
    let str = '';
    if (min < 40) {
        str = translateNumber(hrs, lang);
        if (min === 0) {
            str += (isRussian(lang)) ? ' бидъю́к' : ' בדיוק';
        } else if (min <= 20) {
            if (min === 15) {
                str += (isRussian(lang)) ? ' ва рэ́ва' : ' וַרֶבַע';
            } else {
                str += getNumPrep(min, lang);
                str += translateNumber(min, lang, gender);
                if (min !== 20 && isFemale(gender))
                    str += dakot(lang);
            }
        } else {
            if (min === 30) {
                str += (isRussian(lang)) ? ' ва хэ́ци' : ' וַחֵצִי';
            } else {
                str += ' ' + translateNumber(min, lang, gender);
                if (isFemale(gender))
                    str += dakot(lang);
            }
        }
    } else {
        if (min === 40) {
            str = translateNumber(60 - min, lang, gender);
        } else if (min === 45) {
            str = (isRussian(lang)) ? 'рэ́ва ' : 'רֶבַע ';
        } else {
            str = translateNumber(60 - min, lang, gender);
                if (isFemale(gender))
                    str += dakot(lang);
        }
        str += (isRussian(lang)) ? ' лэ ' : ' לְ';
        str += translateNumber(hrs + 1, lang);
    }
    return str;
}

function outputContent() {
    /* Outputs digital time, button title, translation (and hide it), ungreencolorize button (if there is) */
    let gender = getGender();
    let hours = getRandHours();
    let minutes = getRandMinutes(5);
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
