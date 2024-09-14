import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class TransformInterceptor implements NestInterceptor {
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>,
    ): Observable<any> {
      return next.handle().pipe(
        map(data => ({
          code: 1,
          message: 'Success', // Or extract a message from the data if available
          data: data,
        })),
      );
    }
  }
  