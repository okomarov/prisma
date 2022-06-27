#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<EOF
create extension pgcrypto with schema "public";
select * FROM pg_extension;
EOF
