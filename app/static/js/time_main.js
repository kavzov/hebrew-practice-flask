function dakot(lang) {
    /* Returns 'dakot' (minutes) word on `lang` or on hebrew */
    return (isTranslitLang(lang)) ? ' дакóт ' : ' דַקוֹת ';
}

function set0hrsTo00(hours) {
    return (hours) ? hours : '00';
}

function nextHour(hour) {
    return (hour === 12) ? 1 : hour + 1;
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
        } else if (min === 1) {
            if (isFemale(gender)) {
                str += (isRussian(lang)) ? ' вэ дака́ аха́т ' : ' ודַקָה אַחַת';
            } else {
                str += (isRussian(lang)) ? ' вэ эха́д' : ' ואֶחַד';
            }
        } else if (min === 2) {
            if (isFemale(gender)) {
                str += (isRussian(lang)) ? ' вэ штей дакóт' : ' ושְׁתֵּי דַקוֹת';
            } else {
                str += (isRussian(lang)) ? ' вэ шна́йм' : ' ושְׁנַּיִים';
            }
        } else if (min <= 20) {
            if (min === 15) {
                str += (isRussian(lang)) ? ' ва рэ́ва' : ' וַרֶבַע';
            } else {
                str += getNumPrep(min, lang);
                str += translateNumber(min, lang, gender);
                if (min !== 20 && isFemale(gender))
                    str += dakot(lang);
                else if (min === 20) {
                    str += (isRussian(lang)) ? ' [дакóт]' : '&#x202B; [דַקוֹת]';   // https://stackoverflow.com/questions/2153662/bi-directional-browser-title-hebrew-and-english-characters-in-title
                }
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
            str += (isRussian(lang)) ? ' [дакóт]' : '&#x202B; [דַקוֹת]';
        } else if (min === 45) {
            str = (isRussian(lang)) ? 'рэ́ва ' : 'רֶבַע ';
        } else if (min === 58) {
            if (isFemale(gender)) {
                str += (isRussian(lang)) ? 'штей дакóт ' : 'ושְׁתֵּי דַקוֹת ';
            } else {
                str += (isRussian(lang)) ? 'шна́йм ' : 'ושְׁנַּיִים ';
            }
        } else if (min === 59) {
            if (isFemale(gender)) {
                str += (isRussian(lang)) ? 'дака́ аха́т ' : 'דַקָה אַחַת ';
            } else {
                str += (isRussian(lang)) ? 'эха́д ' : 'אֶחַד ';
            }
        } else {
            str = translateNumber(60 - min, lang, gender);
                if (isFemale(gender))
                    str += dakot(lang);
        }
        str += (isRussian(lang)) ? ' ле ' : ' לְ';
        str += translateNumber(nextHour(hrs), lang);
    }
    return str;
}
