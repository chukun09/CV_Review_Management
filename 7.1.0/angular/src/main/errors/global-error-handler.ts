import { ErrorHandler, Injectable} from '@angular/core';
 
@Injectable()
export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log("Có lỗi xảy ra");
      // do something with the exception
    }
  }
 