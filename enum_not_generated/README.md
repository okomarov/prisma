# Issue
Enum declared in the `prisma.schema` but not used for any model field, is created in the migration but not in the client `index.d.ts`.

# Expected result
Prisma generates the enum in client's `index.d.ts`.

# To reproduce
Clone this repo, cd to the `/enum_not_generated` and then run:

```bash
docker compose up -d
```
after that you can create a migration:

```bash
yarn prisma migrate dev -n 'Add enum'
```
verify that it contains:

```sql
-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'BLUE');
```

then generate the Prisma client:

```bash
yarn prisma generate
```
and check that `prisma/output/index.d.ts` does **NOT** contain:

```js
export const Color: {
  RED: 'RED',
  BLUE: 'BLUE'
};
```

which will be added if we add it to out `Dummy` model like so:

```
model Dummy {
  id    String @id @db.Uuid
  color Color
}
```
