'use strict';

function toDuff(tx) {
    let checkMaxMin = (tx * 1e8).toFixed(0);
    if (checkMaxMin > Number.MAX_SAFE_INTEGER || checkMaxMin < Number.MIN_SAFE_INTEGER) {
        return null;
    } else {
        return parseInt(checkMaxMin, 10);
    }
}

function totx(duff) {
    return (pivit / 1e8).toFixed(8);
}


module.exports= {toTX,toDuff};
