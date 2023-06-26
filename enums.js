"use strict";
// Числовой enum
// enum  StatusCode {
//     "Success",
//     "InProgress",
//     "Failure"
// }
const result = {
    message: "Платеж успешен",
    statusCode: 1 /* StatusCode.Success */,
};
if (result.statusCode === 1 /* StatusCode.Success */) {
    console.log("StatusCode.Success");
}
