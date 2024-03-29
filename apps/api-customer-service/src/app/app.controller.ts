import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log("Test 2")
    // @INFO: Getting the date from services
    return this.appService.getData();
  }
}
