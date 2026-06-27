const { pgTable, serial, text, timestamp } = require('drizzle-orm/pg-core');

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').default('user'),
  createdAt: timestamp('created_at').defaultNow(),
});

// NEU: Tabelle für DB-Anträge
const antraege = pgTable('antraege', {
  id: serial('id').primaryKey(),
  titel: text('titel').notNull(),
  status: text('status').default('offen'), // 'offen', 'genehmigt', 'abgelehnt'
  beschreibung: text('beschreibung'),
  createdAt: timestamp('created_at').defaultNow(),
});

module.exports = { users, antraege };