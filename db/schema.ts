import { date, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  role: text('role').notNull(),
  createdAt: date('created_at').notNull().defaultNow(),
});
