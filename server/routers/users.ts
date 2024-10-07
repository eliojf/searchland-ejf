import db from '@/db/drizzle';
import { users } from '@/db/schema';
import { count, eq } from 'drizzle-orm';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const usersRouter = router({
  get: publicProcedure
    .input(
      z.object({
        page: z.number(),
        totalItems: z.number(),
      })
    )
    .query(async (opts) => {
      try {
        const { input } = opts;
        const offset = (input.page - 1) * input.totalItems;
        const limit = input.totalItems;
        const [totalCount] = await db.select({ count: count() }).from(users);
        const totalPages = Math.ceil(totalCount.count / limit);
        const items = await db.select().from(users).offset(offset).limit(limit);

        return {
          items,
          totalPages,
        };
      } catch (e) {
        throw e;
      }
    }),
  create: publicProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string().email(),
        role: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;

      await db.insert(users).values({
        username: input.username,
        email: input.email,
        role: input.role,
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;

      try {
        await db.delete(users).where(eq(users.id, input.id));
      } catch (e) {
        throw e;
      }
    }),
});
