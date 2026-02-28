import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TasksController } from './tasks.controller';
import { MainController } from './main.controller';
import { EquipmentController } from './equipment.controller';
import { ReportsController } from './reports.controller';
import { MessagesController } from './messages.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    MainController,
    TasksController,
    EquipmentController,
    ReportsController,
    MessagesController,
  ],
})
export class AppModule {}
