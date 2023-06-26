// Числовой enum
// enum  StatusCode {
//     "Success",
//     "InProgress",
//     "Failure"
// }


//// Строковый enum
// enum  StatusCode {
//     "Success" = "s",
//     "InProgress" = "i",
//     "Failure" = "f"
// }


// Константный  enum
const enum  StatusCode {
    "Success" = 1,
    "InProgress" = 2,
    "Failure" = 3
}

const result = {
    message: "Платеж успешен",
    statusCode: StatusCode.Success,
};

if (result.statusCode === StatusCode.Success) {
    console.log("StatusCode.Success")
}


