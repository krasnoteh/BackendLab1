import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller('/reports')
export class ReportsController {
  @Get()
  @Render('layouts/reports')
  root(@Query('auth') auth: string) {
    const isAuth = auth === 'true';
    return { isAuth };
  }
}
