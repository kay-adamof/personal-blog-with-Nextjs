import schema from './qiita.schema.json'
const post = {
  description: '指定されたユーザーの記事一覧を、作成日時の降順で返します。',
  href: '/api/v2/users/:user_id/items',
  method: 'GET',
  rel: 'instances',
  schema: {
    properties: {
      page: {
        description: 'ページ番号 (1から100まで)',
        example: 1,
        pattern: '^[0-9]+$',
        type: 'string',
      },
      per_page: {
        description: '1ページあたりに含まれる要素数 (1から100まで)',
        example: 20,
        pattern: '^[0-9]+$',
        type: 'string',
      },
    },
  },
  title: 'list_user_items',
}
// type Post = typeof post
// type Schema = typeof schema
