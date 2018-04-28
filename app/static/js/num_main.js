/** Vars **/
let minNumVal = 0;
let maxNumVal = 9999;

let nums = [
    [   /* male (index 0) */
        {'rus': 'э́фес', 'heb': 'אֶפֶס'}, {'rus': 'эха́д', 'heb': 'אֶחַד'}, {'rus': 'шна́им', 'heb': 'שְׁנַּיִים'}, {'rus': 'шлоша́', 'heb': 'שְׁלוֹשָׁה'}, {'rus': 'арбаа́', 'heb': 'אַרְבַּעָה'}, {'rus': 'хамиша́', 'heb': 'חָמִשָה'}, {'rus': 'шиша́', 'heb': 'שִׁשָהׁ'}, {'rus': 'шива́', 'heb': 'שִׁבַעָה'}, {'rus': 'шмона́', 'heb': 'שְׁמוֹנָה'}, {'rus': 'тиша́', 'heb': 'תִּשַׁעָה'},
        {'rus': 'асара́', 'heb': 'עֲשָׂרָה'}, {'rus': 'аха́д аса́р', 'heb': 'אַחַד עָשָׂר'}, {'rus': 'шнэ́йм аса́р', 'heb': 'שנֵים עָשָׂר'}, {'rus': 'шлоша́ аса́р', 'heb': 'שְׁלוֹשָׁה עָשָׂר'}, {'rus': 'арбаа́ аса́р', 'heb': 'אַרְבַּעָה עָשָׂר'}, {'rus': 'хамиша́ аса́р', 'heb': 'חָמִשָה עָשָׂר'}, {'rus': 'шиша́ аса́р', 'heb': 'שִׁשָה עָשָׂר'}, {'rus': 'шива́ аса́р', 'heb': 'שִׁבַעָה עָשָׂר'}, {'rus': 'шмона́ аса́р', 'heb': 'שְׁמוֹנָה עָשָׂר'}, {'rus': 'тиша́ аса́р', 'heb': 'תִּשַׁעָה עָשָׂר'}
    ],
    [   /* female (index 1) */
        {'rus': 'э́фес', 'heb': 'אֶפֶס'}, {'rus': 'аха́т', 'heb': 'אַחַת'}, {'rus': 'шта́им', 'heb': 'שְׁתַּיִים'}, {'rus': 'шало́ш', 'heb': 'שָׁלוֹשׁ'}, {'rus': 'арба́', 'heb': 'אַרְבַּע'}, {'rus': 'хамéш', 'heb': 'חָמֵשׁ'}, {'rus': 'шеш', 'heb': 'שֵׁשׁ'}, {'rus': 'шéва', 'heb': 'שֶׁבַע'}, {'rus': 'шмонé', 'heb': 'שְׁמוֹנֶה'}, {'rus': 'тéша', 'heb': 'תֵּשַׁע'},
        {'rus': 'э́сер', 'heb': 'עֶשֶׂר'}, {'rus': 'аха́т эсре́', 'heb': 'אַחַת עֶשׂרֵה'}, {'rus': 'ште́йм эсре́', 'heb': 'שְׁתֵיים עֶשׂרֵה'}, {'rus': 'шлош эсре́', 'heb': 'שְׁלוֹשׁ עֶשׂרֵה'}, {'rus': 'арба́ эсрé', 'heb': 'אַרְבַּע עֶשׂרֵה'}, {'rus': 'хаме́ш эсре́', 'heb': 'חֲמֵשׁ עֶשׂרֵה'}, {'rus': 'шеш эсре́', 'heb': 'שֵׁשׁ עֶשׂרֵה'}, {'rus': 'шва эсре́', 'heb': 'שְׁבַע עֶשׂרֵה'}, {'rus': 'шмонé эсре́', 'heb': 'שְׁמוֹנֶה עֶשׂרֵה'}, {'rus': 'тша эсре́', 'heb': 'תְּשַׁע עֶשׂרֵה'}
    ],
    [
        null, null,
        {'rus': 'эсри́м', 'heb': 'עֶשְׂרִים'}, {'rus': 'шлоши́м', 'heb': 'שׁלוֹשִים'}, {'rus': 'арбаи́м', 'heb': 'אַרְבָּעִים'}, {'rus': 'хамиши́м', 'heb': 'חֲמִישִׁים'}, {'rus': 'шиши́м', 'heb': 'שִׁשִׁים'}, {'rus': 'шиви́м', 'heb': 'שִׁבְעִים'}, {'rus': 'шмони́м', 'heb': 'שְׁמוֹנִים'}, {'rus': 'тиши́м', 'heb': 'תִּשְׁעים'}
    ],
    [
        null,
        {'rus': 'ме́а', 'heb': 'מֵאָה'}, {'rus': 'мата́им', 'heb': 'מָאתַיִים'}, {'rus': 'шло́ш мэо́т', 'heb': 'שְׁלֹש מֵאוֹת'}, {'rus': 'арба́ мэо́т', 'heb': 'אַרְבַּע מֵאוֹת'}, {'rus': 'хаме́ш мэо́т', 'heb': 'חֲמֵשׁ מֵאוֹת'}, {'rus': 'шеш мэо́т', 'heb': 'שֵׁשׁ מֵאוֹת'}, {'rus': 'шва мэо́т', 'heb': 'שְׁבַע מֵאוֹת'}, {'rus': 'шмоне́ мэо́т', 'heb': 'שְׁמוֹנָה מֵאוֹת'}, {'rus': 'тша мэо́т', 'heb': 'תְּשַׁע מֵאוֹת'}
    ],
    [
        null,
        {'rus': 'э́леф', 'heb': 'אֶלֶף'}, {'rus': 'альпа́им', 'heb': 'אַלְפַּיִים'}, {'rus': 'шло́шэт алафи́м', 'heb': 'שלוֹשֶת אֲלָפִים'}, {'rus': 'арбаа́т алафи́м', 'heb': 'אַרבַּעַת אֲלָפִים'}, {'rus': 'хаме́шэт алафи́м', 'heb': 'חֲמֵשֶת אֲלָפִים'}, {'rus': 'ше́шэт алафи́м', 'heb': 'שֵשֶת אֲלָפִים'}, {'rus': 'шивъа́т алафи́м', 'heb': 'שִבעַת אֲלָפִים'}, {'rus': 'шмона́т алафи́м', 'heb': 'שמוֹנַת אֲלָפִים'}, {'rus': 'тишъа́т алафи́м', 'heb': 'תִשעַת אֲלָפִים'}
    ],
    [
        null,
        {'rus': 'асэ́рэт алафи́м', 'heb': 'עֲשֶׂרֶת אֲלָפִים'}
    ]
];


/** Nodes **/
let maxNumLimitTip =  '#max-num-limit-tip';


/** Functions **/
function numOrder(n) {
    return n.toString().length;
}

function numMultiple(num, order) {
    return num % Math.pow(10, order) === 0;
}

function getDigPrep(dig, lang) {
    /* digit preposition */
    let digPref = {
        '1': ' вэ ', '2': ' у ',  '3': ' вэ ',  '4': ' вэ ',  '5': ' вэ ',   '6': ' ва ',   '7': ' ва ',   '8': ' у ',   '9': ' ва ',
    };
    // return (isRussian(lang)) ? digPref[dig] : ' ו';
    return (lang === 'rus') ? ' вэ ' : ' ו';
}

/* temp for 2> digit preposition */
function getNumPrep(dig, lang) {
    let digPrep = {
        '1': ' вэ ', '2': ' у ',  '3': ' вэ ',  '4': ' вэ ',  '5': ' вэ ',   '6': ' ва ',   '7': ' ва ',   '8': ' у ',   '9': ' ва '
    };
    // return (lang === 'rus') ? digPrep[dig] : ' ו';
    return (lang === 'rus') ? ' вэ ' : ' ו';
}

function getDigit(dig, lang, gender) {
    return nums[gender][dig][lang];
}

function getDigNum(order, digit, lang) {
    return nums[order][digit][lang];
}

function twoDigNum(num, lang, gender) {
    let str = '';
    num = num.toString();
    let numbOrder = numOrder(num);
    let highOrderDigit = num[0];
    if (num < 20) {
        str = getDigit(num, lang, gender);
    }
    else {
        str = nums[numbOrder][highOrderDigit][lang];
        if (num % 10 !== 0)
            str += getDigPrep(num[1], lang) + getDigit(num[1], lang, gender);
    }
    return str;
}

function getGender() {
    return $('[name="gender"]:checked').val();
}

function isFemale(gender) {
    return gender == 1;
}

function translateNumber(number, lang, gender) {
    if (gender === undefined) {
        // default female gender - index 1 of numbers array (male - 0)
        gender = 1;
    }
    number = number.toString();
    let numberOrder = numOrder(number);
    let highOrderDigit = number[0];

    if (numberOrder === 1) {
        return getDigit(number, lang, gender);
    }
    if (numberOrder === 2) {
        return twoDigNum(number, lang, gender);
    }
    if (numberOrder >= 3) {
        let str = getDigNum(numberOrder, highOrderDigit, lang);
        number -= highOrderDigit * Math.pow(10, numberOrder-1);
        if (number) {
            /* check for preparation */
            if (numMultiple(number, numberOrder-2) || number > 9 && number < 20) {
                str += getNumPrep(number.toString()[0], lang);
            } else if (number > 0 && number < 10) {
                str += getDigPrep(number, lang)
            } else {
                str += ' ';
            }
            return str + translateNumber(number, lang, gender);
        }
        return str;
    }
}
