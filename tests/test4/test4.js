"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["_Success"] = "success";
    PaymentStatus["_Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// Определение type guard функции
function isSuccessResponse(res) {
    return res.status === PaymentStatus._Success;
}
function getIdFromData(res) {
    if (isSuccessResponse(res)) {
        // TypeScript теперь знает, что res имеет тип IResponseSuccess
        return res.data.databaseId;
    }
    else {
        // TypeScript теперь знает, что response имеет тип IResponseFailed
        return res.data.errorCode;
    }
}
