/** Nodes **/
let customNum = '#custom-num';


/** Functions **/
function outputContent() {
    let gender = getGender();
    // empty field or value < min allowed -> set min allowed
    let num = $(customNum).val();
    if (num === '' || parseInt(num) < minNumVal) {
        $(customNum).val(minNumVal);
        num = minNumVal.toString();     // `toString` for remove possible leading `0`
    }
    // value > max allowed -> set max allowed
    if (parseInt(num) > maxNumVal) {
        $(customNum).val(maxNumVal);
        num = maxNumVal;
    }
    // remove lead `0`
    if (num !== '0' && num[0] === '0') {
        num = num.replace(/^0+/, '');
        $(customNum).val(num);
    }

    let translit = translateNumber(num, 'rus', gender);
    let hebrew = translateNumber(num, 'heb', gender);
    outputTranslation(translit, hebrew);
}

function changeGenderTranslation(gender) {
    let num = $(customNum).val();
    let translit = translateNumber(num, 'rus', gender);
    let hebrew = translateNumber(num, 'heb', gender);
    outputTranslation(translit, hebrew);
}

/** Events handlers **/
/* Page load */
page.ready(function() {
    setBtnTitle(translateBtn, btnTitleTranslate);
    $(maxNumLimitTip).html(minNumVal + '&nbsp;&gt;&nbsp;' + maxNumVal);
});

/* Click on Translate button */
translateBtn.on('click', function() { outputContent(); });

$(customNum).on('change', function(e) {
    let val = $(customNum).val();
    if (val < minNumVal) $(customNum).val(minNumVal);
    if (val > maxNumVal) $(customNum).val(maxNumVal);
});

$(customNum).on('keypress', function(e) {
    if(e.which === 13) {
        outputContent();
    }
});
