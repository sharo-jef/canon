import { parseCanon } from '../src/parser';
import * as yaml from 'js-yaml';
import * as fs from 'fs';

const input = fs.readFileSync('testcases/success-cases/pipeline-operator-01/input.canon', 'utf-8');
const result = parseCanon(input);
const yamlOutput = yaml.dump(result, { indent: 2, noRefs: true });
fs.writeFileSync('testcases/success-cases/pipeline-operator-01/output.yml', yamlOutput.trim());
