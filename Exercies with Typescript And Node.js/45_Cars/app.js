"use strict";
function storeCarInfo(mamufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ mamufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo("Honda", "Civic", { color: 'black' }, { features: ['Navigation', "Power Window"] });
console.log(answer);
