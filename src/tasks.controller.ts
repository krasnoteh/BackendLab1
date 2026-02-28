import { Controller, Get, Render } from '@nestjs/common';

@Controller('/tasks')
export class TasksController {
  @Get()
  @Render('layouts/tasks')
  root() {
    return {};
  }
}
