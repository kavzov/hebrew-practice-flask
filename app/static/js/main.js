/** Vars **/
let toLang = 'heb';
let translitLang = 'rus';
let btnTitleTranslate = 'Перевод';
let btnTitleMore = 'Ещё';
let fadeTime = 500;

/** Nodes **/
let page = $(document);
let taskArea = $('#task>span');
let translateBtn = $('#translate-btn').find('>input');
let translationArea = $('#translation');


/** Colors (bootstrap buttons, alerts etc.) **/
let redColor = 'red'; let greenColor = 'green'; let blueColor = 'blue'; let yellowColor = 'yellow';
let aquaColor = 'aqua'; let darkGreyColor = 'darkGrey'; let greyColor = 'grey'; let lightGreyColor = 'lightGrey';
let btnColorClass = {
    'red': 'btn-danger', 'green': 'btn-success', 'blue': 'btn-primary', 'yellow': 'btn-warning',
    'aqua': 'btn-info', 'darkGrey': 'btn-dark', 'grey': 'btn-secondary', 'lightGrey': 'btn-light'
};


/** Functions **/
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + parseInt(min);
}

function isTranslitLang(lang) {
    return lang === translitLang;
}

function isRussian(lang) {
    return isTranslitLang(lang);
}

function outputHTML(node, html) {
    $(node).hide().html(html).fadeIn(fadeTime);
}

function outputTask(taskStr) {
    outputHTML(taskArea, taskStr);
}

function outputTranslation(translit, hebrew) {
    let translitArea = translationArea.find('.translit');
    let hebrewArea = translationArea.find('.hebrew');
    outputHTML(translitArea, translit);
    outputHTML(hebrewArea, hebrew);
}

function setBtnColor(btn, color) {
    $(btn).addClass(btnColorClass[color]);
}

function removeBtnColor(btnNode, color) {
    $(btnNode).removeClass(btnColorClass[color]);
}

function hideNode(node, time) {
    time = time || 0;
    $(node).hide(time);
}

function hideTranslation() {
    hideNode(translationArea);
}

function nodeIsDisplayed(node) {
    /* Checks whether a node is displayed or not */
    return $(node).css('display') !== 'none';
}

function translationIsHidden() {
    /* Check whether the translation is hidden */
    return !nodeIsDisplayed(translationArea);
}

function showNode(node, time) {
    /* Show not displayed node within `time` ms */
    time = time || 0;
    $(node).fadeIn(time);
}

function showTranslation() {
    showNode(translationArea, fadeTime);
}

function setNodeAttr(node, name, val) {
    $(node).attr(name, val);
}
function setNodeValue(node, val) {
    $(node).val(val);
}

function setBtnTitle(btnNode, title) {
    setNodeValue(btnNode, title);
}

function showTranslationOrNewTask() {
    /* Shows task translation or a new task */
    if (translationIsHidden()) {
        showTranslation();
        setBtnColor(translateBtn, greenColor);
        setBtnTitle(translateBtn, btnTitleMore);
    } else {
        outputContent();
    }
}
