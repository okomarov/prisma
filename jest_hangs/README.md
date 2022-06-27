# Issue
The `dbgenerated` directive `@default(dbgenerated("public.gen_random_uuid()"))` causes the same endless migration.

# Expected result
Only one migration is created.

# To reproduce
Clone this repo, cd to the `/dbgenerated_endless_migration` and then run:
```bash
yarn
```
or other equivalents.

Spin up the database:
```bash
docker compose up -d
```
after that you can create a migration:

```bash
yarn prisma migrate dev -n 'Init'
```
verify that it contains:

```sql
-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'BLUE');
```


