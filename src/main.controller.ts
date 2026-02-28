import { Get, Controller, Render } from '@nestjs/common';

@Controller('/')
export class MainController {
  @Get()
  @Render('layouts/main')
  root() {
    return {};
  }
}
