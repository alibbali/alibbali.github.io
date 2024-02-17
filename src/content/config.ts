import { z, defineCollection } from "astro:content";
const blog = defineCollection({
    type: 'content',
    schema: z.object({
      isPublished: z.boolean(),
      isPrivate: z.boolean().default(false),
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string())
    })
});
export const collections = { blog };