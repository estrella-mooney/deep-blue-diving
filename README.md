# Documentation

## Database Structure

The database is compromised of three tables. One for Dives, another for Divers and a many to many table that joins the two tables.

### Dives
The Dives is the table where we store the dive trips that are scheduled for the application

It is comprised of the following columns:

- table.string('title')
- table.text('description')
- table.integer('max_depth')
- table.integer('duration')
- table.integer('max_group')
- table.date('time')

### Divers
The Divers is the table where we store the individual divers taking the dives.

It is comprised of the following columns:

- table.increments('id').primary()
- table.string('name')
- table.integer('age')
- table.string('qualification')

### Divers_dive
This table stores the many-many relationship between divers and dives

It has the following columns:
- table.increments('id').primary()
- table.integer('diver_id').references('diver.id')
- table.integer('dive_id').references('dives.id')

## API Routes

### Managing Diver-Dive relationships

#### `GET /api/v1/join/

For getting the entire join table at startup.

Accepts nothing.

Returns a list of Join objects:
```ts
interface Join {
  id: number
  dive_id: number
  diver_id: number
}
```

#### `GET /api/v1/join/dives-for-diver/:diver_id`

For getting all the dives a diver is doing.
We're doing redux, so this is unused.

Accepts a diver id as a URL param.

Returns a list of dive titles with join table ids:
```ts
type ReturnType = {id: number, title: string}[]
```

#### `GET /api/v1/join/divers-on-dive/:dive_id`

For getting all the divers going on a dive.
We're doing redux, so this is unused.

Accepts a dive id as a URL param.

Returns a list of diver names with join table ids:
```ts
type ReturnType = {id: number, name: string}[]
```

#### `POST /api/v1/join/dives-for-diver/:diver_id`

For adding several join entries involving a single diver.

Accepts a diver id in the URL params and a list of dive ids in the body.

Returns a list of the created join objects.

#### `POST /api/v1/join/divers-on-dive/:dive_id`

For adding several join entries involving a single dive.

Accepts a dive id in the URL params and a list of diver ids in the body.

Returns a list of the created join objects.

#### `DELETE /api/v1/join/`

For removing join entries.

Accepts a list of join table ids in the body.

Returns the number of entries deleted.