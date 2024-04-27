import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import {DataSource, DataSourceOptions} from 'typeorm'
config()
const configService = new ConfigService()
export const datasourceoption: DataSourceOptions = {
    type: "postgres",
    database: configService.get('DB_NAME'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    synchronize: false,
    migrations: [`${__dirname}/migrations/*.ts`],
    entities: [`dist/**/*.entity.js`],
    // ssl: true
    // ssl: {
    //     rejectUnauthorized: false, // This may be needed if your certificate is self-signed
    //   },
}

export default new DataSource(datasourceoption)