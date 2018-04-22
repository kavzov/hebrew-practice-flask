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

function translateTime(hrs, min, lang) {
    /* Translates `hrs` and `min` to `lang` and forms a string */
    let str = '';
    if (min < 40) {
        str = translateNumber(hrs, lang);
        if (min === 0) {
            str += (lang === 'rus') ? ' бидъю́к' : ' בדיוק';
        } else if (min <= 20) {
            if (min === 15) {
                str += (lang === 'rus') ? ' ва рэ́ва' : ' וַרֶבַע';
            } else {
                str += getNumPrep(min, lang);
                str += translateNumber(min, lang);
                if (min !== 20) str += dakot(lang);
            }
        } else {
            if (min === 30) {
                str += (lang === 'rus') ? ' ва хэ́ци' : ' וַחֵצִי';
            } else {
                str += ' ' + translateNumber(min, lang) + dakot(lang);  /* make male minutes */
            }
        }
    } else {
        if (min === 40) {
            str = translateNumber(60 - min, lang);
        } else if (min === 45) {
            str = (lang === 'rus') ? 'рэ́ва ' : 'רֶבַע ';
        } else {
            str = translateNumber(60 - min, lang) + dakot(lang);
        }
        str += (lang === 'rus') ? ' лэ ' : ' לְ';
        str += translateNumber(hrs + 1, lang);
    }
    return str;
}

function outputContent() {
    /* Outputs digital time, button title, translation (and hide it), ungreencolorize button (if there is) */
    let hours = getRandHours();
    let minutes = getRandMinutes(5);
    let translit = translateTime(hours, minutes, 'rus');
    let hebrew = translateTime(hours, minutes, 'heb');
    hours = set0hrsTo00(hours);                // '0' hours -> '00'
    minutes = setMinutesLeadZero(minutes);     // 'N' min -> '0N'
    let taskStr = formTimeStr(hours, minutes);

    outputTask(taskStr);
    setBtnTitle(translateBtn, btnTitleTranslate);
    removeBtnColor(translateBtn, greenColor);  // disable green color of the button if it set before
    outputTranslation(translit, hebrew);
    hideTranslation();
}

/** Events handlers **/
/* Page load */
page.ready(outputContent());

/* Click on Translate button */
translateBtn.on('click', function() { showTranslationOrNewTask(); });
