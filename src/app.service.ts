import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! - Study Container Docker Nestjs Multi-Stage Build';
  }
}
