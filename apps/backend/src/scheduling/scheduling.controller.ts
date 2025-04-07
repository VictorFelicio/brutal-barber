import { Controller, Get } from '@nestjs/common';

@Controller('scheduling')
export class SchedulingController {
  @Get()
  teste() {
    return 'ok funcionou';
  }
}
