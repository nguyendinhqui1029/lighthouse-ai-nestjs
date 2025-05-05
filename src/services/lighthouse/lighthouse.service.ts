import { LighthouseReport } from '@models/lighthouse-report.model';
import { Injectable } from '@nestjs/common';
import { runLighthouseAudit } from '@utils/lighthouse-runner';

@Injectable()
export class LighthouseService {
  async runLighthouse(url: string): Promise<LighthouseReport> {
    try {
      return await runLighthouseAudit(url);
    } catch {
      throw new Error('runLighthouseAudit');
    }
  }
}
