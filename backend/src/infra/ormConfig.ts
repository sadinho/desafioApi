import { ConnectionOptions } from 'typeorm';
import * as env from '../environment';
import * as ORMConfigFile from '../../ormconfig.json';

function getORMConfig() : ConnectionOptions | undefined {
  if (!env.POSTGRESQL_HOST) {
    return undefined;
  }

  let ormconfig : any = JSON.parse(JSON.stringify(ORMConfigFile));

  if (!ormconfig) {
    ormconfig = {
      entities: ["src/model/**/*.ts"],
      migrations: ["src/infra/migrations/**/*.ts"],
      cli: {
        migrationsDir: "src/infra/migrations",
        entitiesDir: "src/model"
      }
    }
  }

  ormconfig.type = env.POSTGRESQL_CONNECTION;
  ormconfig.host = env.POSTGRESQL_HOST;
  ormconfig.port = env.POSTGRESQL_PORT;
  ormconfig.username = env.POSTGRESQL_USER;
  ormconfig.password = env.POSTGRESQL_PASSWORD;
  ormconfig.database = env.POSTGRESQL_DATABASE;
  ormconfig.extra = {
    max: env.POSTGRESQL_POOL_SIZE,
    ssl: (env.POSTGRESQL_SSL === 'Y')
  }

  return ormconfig;
}

export = getORMConfig();