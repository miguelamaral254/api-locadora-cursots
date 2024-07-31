import { DataSource } from 'typeorm';
import * as path from 'path';
import * as fs from 'fs';

// Lê o arquivo ormconfig.json
const ormconfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../ormconfig.json'), 'utf8'));

// Configura o DataSource com a configuração lida
const AppDataSource = new DataSource({
  ...ormconfig,
  entities: [path.join(__dirname, 'models', '*.ts')],
});

export default AppDataSource;
