import * as env from '../environment';
import ORMConfig from './ormConfig';
import { createConnection } from 'typeorm';

function connect() {
  if (!env.POSTGRESQL_SSL || (!['Y', 'N'].includes(env.POSTGRESQL_SSL))) {
    console.log(`\u274C\ - Environment ORM configuration SSL (Y/N) required`);
    return;
  }

  if (!env.POSTGRESQL_POOL_SIZE || (Number(env.POSTGRESQL_POOL_SIZE) <= 0)) {
    console.log(`\u274C\ - Environment ORM pool size required`);
    return;
  }

  if (!ORMConfig) {
    console.log(`\u274C\ - Environment ORM configuration required to connect to database`);
    return;
  }

  createConnection(ORMConfig)
  .then(async conn => {
    console.log(
      `\u2705\ - Successfull '${env.POSTGRESQL_DATABASE}' database connection`
    );

    await conn.runMigrations()
    .then(async () => {
      console.log(
        `\u270C\  - Successfull migration execution`
      );

      await conn.createQueryRunner().manager
      .query(`SET TIMEZONE TO 'America/Sao_Paulo'`)
      .then(() => {
        console.log(
          `\u2708\  - Timezone adjusted`
        );
      })
      .catch((err) => {
        console.log(`\u274C\ - ERROR ADJUSTING TIMEZONE: ` + err.query);
      });
    })
    .catch((err) => {
      console.log(`\u274C\ - ERROR EXECUTING MIGRATION: ` + err.query);
      console.log(`\u274C\ - ERROR MESSAGE: ` + err);
    });
  })
  .catch((err) => console.log(
    `\u274C\ - ERROR CONNECTING TO DATABASE: ${err.message}`
  ));
}

export default connect();