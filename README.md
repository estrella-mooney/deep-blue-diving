# Database Structure

The database is compromised of three tables. One for Dives, another for Divers and a many to many table that joins the two tables.

Dives table is comprised of the following columns:

    table.string('title')
    table.text('description')
    table.integer('max_depth')
    table.integer('duration')
    table.integer('max_group')
    table.date('time')

The Divers table is comprised of the following columns:

    table.increments('id').primary()
    table.string('name')
    table.integer('age')
    table.string('qualification')

The Dives is the table where we store the dive trips that are scheduled for the application

The Divers is the table where we store the individual divers taking the dives.



