import { Controller, Get, Render } from '@nestjs/common';

@Controller('/equipment')
export class EquipmentController {
  @Get()
  @Render('layouts/equipment')
  root() {
    return {};
  }
}
