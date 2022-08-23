
import { Knex } from "knex";
import pg from 'pg';
import knex from "knex";

import knexConfig from '../../knexfile';
const instance: Knex<any, any[]> = knex(knexConfig['development'] as Knex.Config)

pg.types.setTypeParser(pg.types.builtins.INT8, (value: string) => {
   return parseInt(value);
});

export const db = () => instance
