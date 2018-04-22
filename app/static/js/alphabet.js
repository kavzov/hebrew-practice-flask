/** Vars **/
let letters = [
    {'letter': 'א', 'heb': 'אָלֶף‬‬', 'rus': 'Áлеф'}, {'letter': 'בּ‬‬', 'heb': 'בֵּית‬', 'rus': 'Бет'},
    {'letter': 'ב‬', 'heb': 'בֵית‬', 'rus': 'Вет'}, {'letter': 'ג‬', 'heb': 'גִּימֵל‬', 'rus': 'Ги́мель'},
    {'letter': 'ד‬', 'heb': 'דָּלֶת‬', 'rus': 'Да́лет'}, {'letter': 'ה‬', 'heb': 'הֵא‬', 'rus': 'hей'},
    {'letter': 'ו‬', 'heb': 'וָו‬', 'rus': 'вав'}, {'letter': 'ז‬', 'heb': 'זַיִן‬', 'rus': 'За́ин'},
    {'letter': 'ח‬', 'heb': 'חֵית‬', 'rus': 'Хет'}, {'letter': 'ט‬', 'heb': 'טֵית‬', 'rus': 'Тет'},
    {'letter': 'י‬', 'heb': 'יוֹד‬', 'rus': 'Йод'}, {'letter': 'כּ‬', 'heb': 'כַּף‬', 'rus': 'Каф'},
    {'letter': 'כ‬', 'heb': 'כַף‬', 'rus': 'Хаф'}, {'letter': 'ך‬', 'heb': 'כַף סוֹפִית‬', 'rus': 'Хаф софи́т'},
    {'letter': 'ל‬', 'heb': 'לָמֶד‬', 'rus': 'Ла́мед'}, {'letter': 'מ‬', 'heb': 'מֵם‬', 'rus': 'Мем'},
    {'letter': 'ם‬', 'heb': 'מֵם סוֹפִית‬', 'rus': 'Мем софи́т'}, {'letter': 'נ‬', 'heb': 'נוּן‬', 'rus': 'Нун'},
    {'letter': 'ן‬', 'heb': 'נוּן סוֹפִית‬', 'rus': 'Нун софи́т'}, {'letter': 'ס‬', 'heb': 'סָמֶך‬ְ', 'rus': 'Са́мех'},
    {'letter': 'ע‬', 'heb': 'עַיִן‬', 'rus': 'А́ин'}, {'letter': 'פּ‬', 'heb': 'פֵּא', 'rus': 'Пей'},
    {'letter': 'פ‬', 'heb': 'פֵא', 'rus': 'Фей'}, {'letter': 'ף‬', 'heb': 'פֵא סוֹפִית', 'rus': 'Фей софи́т'},
    {'letter': 'צ‬', 'heb': 'צַדִי', 'rus': 'Ца́ди'}, {'letter': 'ץ‬', 'heb': 'צַדִי סוֹפִית', 'rus': 'Ца́ди софи́т'},
    {'letter': 'ק‬', 'heb': 'קוֹף', 'rus': 'Куф'}, {'letter': 'ר‬', 'heb': 'רֵישׁ‬', 'rus': 'Рейш'},
    {'letter': 'שׁ‬', 'heb': 'שִׁין‬', 'rus': 'Шин'}, {'letter': 'שׂ‬‬', 'heb': 'שִׂין‬', 'rus': 'Син'},
    {'letter': 'ת‬', 'heb': 'תּו‬', 'rus': 'Тав'}
];


/** Functions **/
function getHebLetter(n) {
    return letters[n]['letter'];
}

function outputContent() {
    let randN = getRandInt(0, letters.length);
    let hebLetter = getHebLetter(randN);

    /* Non repeat letters */
    let lastLetter = $(taskArea).text();
    while (lastLetter === hebLetter) {
        randN = getRandInt(0, letters.length);
        hebLetter = getHebLetter(randN);
    }

    let taskStr = hebLetter;
    let translit = letters[randN]['rus'];
    let hebrew = letters[randN]['heb'];

    outputTask(taskStr);
    setBtnTitle(translateBtn, btnTitleTranslate);
    removeBtnColor(translateBtn, greenColor);  // disable green color of the button if it set before
    outputTranslation(translit, hebrew);
    hideTranslation();
}

/** Events **/
/* Page load */
page.ready(function() {
    outputContent();
});

/* Click on Translate button */
translateBtn.on('click', function() {
    showTranslationOrNewTask();
});
