interface Payment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failure = 'failure'
}

interface PaymentRequest extends Payment {}

interface DataSuccess extends Payment{
    databaseId: number;
}

interface DataFailure {
    errorMessage: string;
    errorCode: number;
}


interface ResponseSuccess {
    status_code: PaymentStatus._Success;
    data: DataSuccess
}

interface ResponseFailure {
    status_code: PaymentStatus.Failure;
    data: DataFailure
}