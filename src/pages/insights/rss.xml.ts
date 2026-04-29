import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('insights');
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Dosang Insights — SAP · Global Tax · AX',
    description: '도상유한책임회사 컨설팅 인사이트. Global Tax · SAP 전환 · Tax Compliance · AX.',
    site: context.site!,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      categories: [post.data.category, ...post.data.tags],
      link: `/insights/${post.slug}/`,
      author: 'jg.song@dosang.kr (도상 컨설팅팀)',
    })),
    customData: '<language>ko-kr</language><copyright>© 2026 Dosang LLC</copyright>',
    stylesheet: '/rss-styles.xsl',
  });
}
