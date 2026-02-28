import { Controller, Get, Render } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  @Render('layouts/messages')
  root() {
    return {};
  }
}
