# knex-example

How to use:
```bash
npm install
cd len0xx
npm run start
```

This will run a server with 3 routes:
- `/` Just says { ok: true }
- `/new?name=<NEW_NAME>` Inserts a new entry with the name <NEW_NAME> to the database
- `/session/<ID>` Returns the entry with specified <ID>
