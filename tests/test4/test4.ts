interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    _Success = 'success',
    _Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus._Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus._Failed;
    data: IDataFailed;
}

// Создаем type для функции
type f = (response: IResponseSuccess | IResponseFailed) => number;

// Сделаем Union type
type Res = IResponseSuccess | IResponseFailed;


// Определение type guard функции
function isSuccessResponse(res: Res):res is IResponseSuccess {
    return res.status === PaymentStatus._Success
}

function getIdFromData(res:Res): number {
    if (isSuccessResponse(res)) {
        // TypeScript теперь знает, что res имеет тип IResponseSuccess
        return res.data.databaseId
    } else {
        // TypeScript теперь знает, что response имеет тип IResponseFailed
        return res.data.errorCode
    }
}