import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LighthouseService } from '@services/lighthouse/lighthouse.service';
import { LighthouseController } from '@controllers/lighthouse/lighthouse.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, LighthouseController],
  providers: [AppService, LighthouseService],
})
export class AppModule {}
