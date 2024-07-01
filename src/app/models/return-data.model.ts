export interface ReturnData<T> {
    isSuccess: boolean;
    message: string;
    statusCode: number;
    data: T[];
    token: string;
  }