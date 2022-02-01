
function showVerticalMessage(str){
    let maxlength = 10;
    let strMaxlength;
    let strUpperCaseFirstM;
    let vertical = "";
    
    if (str.length < maxlength) {
        strMaxlength = str;
    } else {strMaxlength = str.slice(0, (maxlength))};
    
    if (strMaxlength[0] === "м") {
        strUpperCaseFirstM = strMaxlength[0].toUpperCase() + strMaxlength.slice(1);
    } else {strUpperCaseFirstM = strMaxlength};

    for(let char of strUpperCaseFirstM) {
    vertical += (char + "\n");
    };
    console.log( vertical );
};

showVerticalMessage("марафон");
showVerticalMessage("строка");
showVerticalMessage("фывапролдждлорпавогр");
