import { LighthouseReport } from '@models/lighthouse-report.model';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
export async function runLighthouseAudit(
  url: string,
): Promise<LighthouseReport> {
  return new Promise((resolve) => {
    const outputPath = path.join(__dirname, '../../report.json');

    const command = `npx lighthouse ${url} --output json --output-path=${outputPath} --chrome-flags="--headless --no-sandbox --disable-gpu"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Lighthouse error:', stderr);
        throw new Error(`Audit failed: ${stderr}`);
      }

      const report = fs.readFileSync(outputPath, 'utf-8');
      return resolve(JSON.parse(report) as LighthouseReport);
    });
  });
}
