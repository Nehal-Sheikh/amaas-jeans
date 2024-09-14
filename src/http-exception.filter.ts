// http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const exceptionResponse: any = exception.getResponse();
    
    // Extract message and error fields from response if they exist
    const { message, error } = typeof exceptionResponse === 'object' && exceptionResponse !== null
      ? exceptionResponse
      : { message: undefined, error: undefined };

    response.status(status).json({
      code: status,
      message: message || error, // Use a default message if none is provided
      data: null, // You can also include error details here if needed
    });
  }
}
