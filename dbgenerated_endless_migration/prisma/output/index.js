
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/output",
    "output",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname
/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.EntityScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  Entity: 'Entity'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Entity\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"public.gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"schema\":{\"inputObjectTypes\":{\"prisma\":[{\"name\":\"EntityWhereInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"EntityOrderByWithRelationInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":0},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"EntityWhereUniqueInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"EntityOrderByWithAggregationInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":0},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"_count\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityCountOrderByAggregateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_max\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityMaxOrderByAggregateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_min\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityMinOrderByAggregateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"EntityScalarWhereWithAggregatesInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"EntityCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"EntityUncheckedCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"EntityUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"EntityUncheckedUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"EntityCreateManyInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"EntityUpdateManyMutationInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"EntityUncheckedUpdateManyInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"mode\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"QueryMode\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"EntityCountOrderByAggregateInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"EntityMaxOrderByAggregateInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"EntityMinOrderByAggregateInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"StringWithAggregatesFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"mode\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"QueryMode\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_count\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_min\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_max\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFieldUpdateOperationsInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"set\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"NestedStringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"NestedStringWithAggregatesFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_count\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_min\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"_max\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"NestedIntFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]}]},\"outputObjectTypes\":{\"prisma\":[{\"name\":\"Query\",\"fields\":[{\"name\":\"findFirstEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityOrderByWithRelationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"EntityOrderByWithRelationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"findManyEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityOrderByWithRelationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"EntityOrderByWithRelationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":true}},{\"name\":\"aggregateEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityOrderByWithRelationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"EntityOrderByWithRelationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AggregateEntity\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"groupByEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityOrderByWithAggregationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"EntityOrderByWithAggregationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"by\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true},{\"type\":\"EntityScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"having\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"EntityGroupByOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":true}},{\"name\":\"findUniqueEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneEntity\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityUncheckedCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"upsertOneEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"create\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityUncheckedCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"update\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityUncheckedUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"createManyEntity\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityCreateManyInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"skipDuplicates\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Boolean\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AffectedRowsOutput\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteOneEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateOneEntity\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityUncheckedUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Entity\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateManyEntity\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityUpdateManyMutationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"EntityUncheckedUpdateManyInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AffectedRowsOutput\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteManyEntity\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"EntityWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AffectedRowsOutput\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AggregateEntity\",\"fields\":[{\"name\":\"_count\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"EntityCountAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"_min\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"EntityMinAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"_max\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"EntityMaxAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"EntityGroupByOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"_count\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"EntityCountAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"_min\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"EntityMinAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"_max\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"EntityMaxAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"AffectedRowsOutput\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"EntityCountAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"_all\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"EntityMinAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"EntityMaxAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}],\"model\":[{\"name\":\"Entity\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}]},\"enumTypes\":{\"prisma\":[{\"name\":\"EntityScalarFieldEnum\",\"values\":[\"id\"]},{\"name\":\"SortOrder\",\"values\":[\"asc\",\"desc\"]},{\"name\":\"QueryMode\",\"values\":[\"default\",\"insensitive\"]}]}},\"mappings\":{\"modelOperations\":[{\"model\":\"Entity\",\"plural\":\"entities\",\"findUnique\":\"findUniqueEntity\",\"findFirst\":\"findFirstEntity\",\"findMany\":\"findManyEntity\",\"create\":\"createOneEntity\",\"createMany\":\"createManyEntity\",\"delete\":\"deleteOneEntity\",\"update\":\"updateOneEntity\",\"deleteMany\":\"deleteManyEntity\",\"updateMany\":\"updateManyEntity\",\"upsert\":\"upsertOneEntity\",\"aggregate\":\"aggregateEntity\",\"groupBy\":\"groupByEntity\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/okomarov/Documents/repos/prisma/dbgenerated_endless_migration/prisma/output",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "3.14.0",
  "engineVersion": "2b0c12756921c891fec4f68d9444e18c7d5d4a6a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})
const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/output/libquery_engine-darwin-arm64.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/output/schema.prisma")