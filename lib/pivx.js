'use strict';

function toPivit(pivx) {
    let checkMaxMin = (pivx * 1e8).toFixed(0);
    if (checkMaxMin > Number.MAX_SAFE_INTEGER || checkMaxMin < Number.MIN_SAFE_INTEGER) {
        return null;
    } else {
        return parseInt(checkMaxMin, 10);
    }
}

function toPivx(pivit) {
    return (pivit / 1e8).toFixed(8);
}


module.exports= {toPivx,toPivit};
