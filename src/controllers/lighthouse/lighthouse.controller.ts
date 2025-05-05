import { Controller, Get, Query } from '@nestjs/common';
import { LighthouseService } from '@services/lighthouse/lighthouse.service';

@Controller('lighthouse')
export class LighthouseController {
  constructor(private lighthouseService: LighthouseService) {}
  @Get('get-lighthouse-info')
  getLightHouseInfo(@Query('url') url: string) {
    return this.lighthouseService.runLighthouse(url);
  }
}
