/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * このスキーマ定義では、Qiita API v2 のインターフェースをJSON Hyper Schema draft v4形式で表現しています。
 */
export interface QiitaAPIV2JSONSchema {
  access_token: NoName
  authenticated_user: NoName1
  comment: NoName2
  expanded_template: NoName4
  group: NoName5
  group_member: NoName6
  item: NoName7
  like: NoName10
  project: NoName12
  reaction: NoName13
  reacted_item: NoName15
  team_membership_detail: NoName19
  remove_team_member: NoName20
  tag: NoName21
  tagging: NoName22
  team: NoName23
  team_access_token: NoName24
  team_invitation: NoName25
  template: NoName26
  user: NoName28
  [k: string]: unknown
}
/**
 * Qiita API v2で認証・認可を行うためのアクセストークンを表します。
 */
export interface NoName {
  /**
   * 登録されたAPIクライアントを特定するためのID
   */
  client_id: string
  /**
   * アクセストークンに許された操作の一覧
   */
  scopes: string[]
  /**
   * アクセストークンを表現する文字列
   */
  token: string
  [k: string]: unknown
}
/**
 * 現在のアクセストークンで認証中のユーザーを表します。通常のユーザー情報よりも詳細な情報を含んでいます。
 */
export interface NoName1 {
  /**
   * 自己紹介文
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * このユーザーがフォローしているユーザーの数
   */
  followees_count: number
  /**
   * このユーザーをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * ユーザーID
   */
  id: string
  /**
   * このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * 居住地
   */
  location: null | string
  /**
   * 設定している名前
   */
  name: null | string
  /**
   * 所属している組織
   */
  organization: null | string
  /**
   * ユーザーごとに割り当てられる整数のID
   */
  permanent_id: number
  /**
   * 設定しているプロフィール画像のURL
   */
  profile_image_url: string
  /**
   * Qiita Team専用モードに設定されているかどうか
   */
  team_only: boolean
  /**
   * Twitterのスクリーンネーム
   */
  twitter_screen_name: null | string
  /**
   * 設定しているWebサイトのURL
   */
  website_url: null | string
  /**
   * 1ヶ月あたりにQiitaにアップロードできる画像の総容量
   */
  image_monthly_upload_limit: number
  /**
   * その月にQiitaにアップロードできる画像の残りの容量
   */
  image_monthly_upload_remaining: number
  [k: string]: unknown
}
/**
 * 記事やプロジェクトに付けられたコメントを表します。プロジェクトへのコメントはQiita Teamでのみ有効です。
 */
export interface NoName2 {
  /**
   * コメントの内容を表すMarkdown形式の文字列
   */
  body: string
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * コメントの一意なID
   */
  id: string
  /**
   * コメントの内容を表すHTML形式の文字列
   */
  rendered_body: string
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  user: NoName3
  [k: string]: unknown
}
/**
 * Qiita上のユーザーを表します。
 */
export interface NoName3 {
  /**
   * 自己紹介文
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * このユーザーがフォローしているユーザーの数
   */
  followees_count: number
  /**
   * このユーザーをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * ユーザーID
   */
  id: string
  /**
   * このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * 居住地
   */
  location: null | string
  /**
   * 設定している名前
   */
  name: null | string
  /**
   * 所属している組織
   */
  organization: null | string
  /**
   * ユーザーごとに割り当てられる整数のID
   */
  permanent_id: number
  /**
   * 設定しているプロフィール画像のURL
   */
  profile_image_url: string
  /**
   * Qiita Team専用モードに設定されているかどうか
   */
  team_only: boolean
  /**
   * Twitterのスクリーンネーム
   */
  twitter_screen_name: null | string
  /**
   * 設定しているWebサイトのURL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * テンプレートを保存する前に変数展開後の状態をプレビューできます。Qiita Teamでのみ有効です。
 */
export interface NoName4 {
  /**
   * 変数を展開した状態の本文
   */
  expanded_body: string
  /**
   * 変数を展開した状態のタグ一覧
   */
  expanded_tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * 変数を展開した状態のタイトル
   */
  expanded_title: string
  [k: string]: unknown
}
/**
 * Qiita Teamのグループを表します。
 */
export interface NoName5 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * グループの詳細を表します。
   */
  description: string
  /**
   * グループに付けられた表示用の名前を表します。
   */
  name: string
  /**
   * 非公開グループかどうかを表します。
   */
  private: boolean
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  /**
   * グループのチーム上での一意な名前を表します。
   */
  url_name: string
  [k: string]: unknown
}
/**
 * Qiita Teamのグループのメンバーを表します。
 */
export interface NoName6 {
  /**
   * ユーザーID
   */
  id: string
  /**
   * チームに登録しているユーザー名
   */
  name: string
  /**
   * メンバーのemailアドレス(チームの管理者かオーナーでなければ空文字が返されます)
   */
  email: string
  [k: string]: unknown
}
/**
 * ユーザーからの投稿を表します。
 */
export interface IPost {
  /**
   * HTML形式の本文
   */
  rendered_body: string
  /**
   * Markdown形式の本文
   */
  body: string
  /**
   * この記事が共同更新状態かどうか (Qiita Teamでのみ有効)
   */
  coediting: boolean
  /**
   * この記事へのコメントの数
   */
  comments_count: number
  /**
   * データが作成された日時
   */
  created_at: string
  group: NoName8
  /**
   * 記事の一意なID
   */
  id: string
  /**
   * この記事への「いいね」の数（Qiitaでのみ有効）
   */
  likes_count: number
  /**
   * 限定共有状態かどうかを表すフラグ (Qiita Teamでは無効)
   */
  private: boolean
  /**
   * 絵文字リアクションの数（Qiita Teamでのみ有効）
   */
  reactions_count: number
  /**
   * この記事がストックされた数
   */
  stocks_count: number
  /**
   * 記事に付いたタグ一覧
   */
  tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * 記事のタイトル
   */
  title: string
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  /**
   * 記事のURL
   */
  url: string
  user: NoName9
  /**
   * 閲覧数
   */
  page_views_count: null | number
  /**
   * Qiita Team のチームメンバー情報を表します。
   */
  team_membership: {
    /**
     * チームに登録しているユーザー名
     */
    name: string
    [k: string]: unknown
  }
  /**
   * 記事のOrganization の url_name を表します。
   */
  organization_url_name: string | null
  /**
   * スライドモードが有効を表すフラグ
   */
  slide: boolean
  [k: string]: unknown
}
/**
 * Qiita Teamのグループを表します。
 */
export interface NoName8 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * グループの詳細を表します。
   */
  description: string
  /**
   * グループに付けられた表示用の名前を表します。
   */
  name: string
  /**
   * 非公開グループかどうかを表します。
   */
  private: boolean
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  /**
   * グループのチーム上での一意な名前を表します。
   */
  url_name: string
  [k: string]: unknown
}
/**
 * Qiita上のユーザーを表します。
 */
export interface NoName9 {
  /**
   * 自己紹介文
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * このユーザーがフォローしているユーザーの数
   */
  followees_count: number
  /**
   * このユーザーをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * ユーザーID
   */
  id: string
  /**
   * このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * 居住地
   */
  location: null | string
  /**
   * 設定している名前
   */
  name: null | string
  /**
   * 所属している組織
   */
  organization: null | string
  /**
   * ユーザーごとに割り当てられる整数のID
   */
  permanent_id: number
  /**
   * 設定しているプロフィール画像のURL
   */
  profile_image_url: string
  /**
   * Qiita Team専用モードに設定されているかどうか
   */
  team_only: boolean
  /**
   * Twitterのスクリーンネーム
   */
  twitter_screen_name: null | string
  /**
   * 設定しているWebサイトのURL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * <strong>Qiita TeamのいいねAPIは2020年11月4日より廃止となりました。今後は絵文字リアクションAPIをご利用ください。</strong> 記事につけられた「いいね」を表します。
 */
export interface NoName10 {
  /**
   * データが作成された日時
   */
  created_at: string
  user: NoName11
  [k: string]: unknown
}
/**
 * Qiita上のユーザーを表します。
 */
export interface NoName11 {
  /**
   * 自己紹介文
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * このユーザーがフォローしているユーザーの数
   */
  followees_count: number
  /**
   * このユーザーをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * ユーザーID
   */
  id: string
  /**
   * このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * 居住地
   */
  location: null | string
  /**
   * 設定している名前
   */
  name: null | string
  /**
   * 所属している組織
   */
  organization: null | string
  /**
   * ユーザーごとに割り当てられる整数のID
   */
  permanent_id: number
  /**
   * 設定しているプロフィール画像のURL
   */
  profile_image_url: string
  /**
   * Qiita Team専用モードに設定されているかどうか
   */
  team_only: boolean
  /**
   * Twitterのスクリーンネーム
   */
  twitter_screen_name: null | string
  /**
   * 設定しているWebサイトのURL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * <strong>Qiita Teamのプロジェクト機能は2022年10月1日より廃止となりました。</strong>
 */
export interface NoName12 {
  [k: string]: unknown
}
/**
 * Qiita Team上での絵文字リアクションを表します。Qiita Teamでのみ有効です。
 */
export interface NoName13 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * 絵文字画像のURL
   */
  image_url: string
  /**
   * 絵文字の識別子
   */
  name: string
  user: NoName14
  [k: string]: unknown
}
/**
 * Qiita上のユーザーを表します。
 */
export interface NoName14 {
  /**
   * 自己紹介文
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * このユーザーがフォローしているユーザーの数
   */
  followees_count: number
  /**
   * このユーザーをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * ユーザーID
   */
  id: string
  /**
   * このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * 居住地
   */
  location: null | string
  /**
   * 設定している名前
   */
  name: null | string
  /**
   * 所属している組織
   */
  organization: null | string
  /**
   * ユーザーごとに割り当てられる整数のID
   */
  permanent_id: number
  /**
   * 設定しているプロフィール画像のURL
   */
  profile_image_url: string
  /**
   * Qiita Team専用モードに設定されているかどうか
   */
  team_only: boolean
  /**
   * Twitterのスクリーンネーム
   */
  twitter_screen_name: null | string
  /**
   * 設定しているWebサイトのURL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * Qiita Team上での記事へのアクション(閲覧数/コメント/絵文字リアクション)を表します。Qiita Teamでのみ有効です。
 */
export interface NoName15 {
  comments: NoName16[]
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * 記事の一意なID
   */
  id: string
  /**
   * 閲覧数
   */
  page_views_count: number
  reactions: NoName18[]
  /**
   * 記事のタイトル
   */
  title: string
  /**
   * 記事のURL
   */
  url: string
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  /**
   * 投稿したユーザーID
   */
  user_id: string
  [k: string]: unknown
}
/**
 * Qiita Team上での記事へのコメントを表します。Qiita Teamでのみ有効です。
 */
export interface NoName16 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * コメントの一意なID
   */
  id: string
  reactions: NoName17[]
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  /**
   * コメントしたユーザーID
   */
  user_id: string
  [k: string]: unknown
}
/**
 * Qiita Team上での絵文字リアクションを表します。Qiita Teamでのみ有効です。
 */
export interface NoName17 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * 絵文字画像のURL
   */
  image_url: string
  /**
   * 絵文字の識別子
   */
  name: string
  /**
   * 絵文字リアクションしたユーザーID
   */
  user_id: string
  [k: string]: unknown
}
/**
 * Qiita Team上での絵文字リアクションを表します。Qiita Teamでのみ有効です。
 */
export interface NoName18 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * 絵文字画像のURL
   */
  image_url: string
  /**
   * 絵文字の識別子
   */
  name: string
  /**
   * 絵文字リアクションしたユーザーID
   */
  user_id: string
  [k: string]: unknown
}
/**
 * チームのメンバーを表します。Qiita Teamでのみ有効です。
 */
export interface NoName19 {
  /**
   * 自己紹介
   */
  description: string
  /**
   * チームに登録しているメールアドレス(チームの管理者かオーナーでなければ空文字が返されます)
   */
  email: string
  /**
   * ユーザーID
   */
  id: string
  /**
   * 最終アクセス日時(チームの管理者かオーナーでなければ空文字が返されます)
   */
  last_accessed_at: string
  /**
   * チームに登録しているユーザー名
   */
  name: string
  [k: string]: unknown
}
/**
 * 指定のユーザーをチームから離脱させます(自身とチームのオーナーはこのAPIでは離脱させられません)。
 */
export interface NoName20 {
  [k: string]: unknown
}
/**
 * 記事に付けられた個々のタグを表します。
 */
export interface NoName21 {
  /**
   * このタグをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * このタグに設定されたアイコン画像のURL
   */
  icon_url: null | string
  /**
   * タグを特定するための一意な名前
   */
  id: string
  /**
   * このタグが付けられた記事の数
   */
  items_count: number
  [k: string]: unknown
}
/**
 * 記事とタグとの関連を表します。
 */
export interface NoName22 {
  /**
   * タグを特定するための一意な名前
   */
  name: string
  versions: string[]
  [k: string]: unknown
}
/**
 * Qiita Team上で所属しているチームを表します。Qiita Teamでのみ有効です。
 */
export interface NoName23 {
  /**
   * チームが利用可能な状態かどうか
   */
  active: boolean
  /**
   * チームの一意なID
   */
  id: string
  /**
   * チームに設定されている名前を表します。
   */
  name: string
  [k: string]: unknown
}
/**
 * Qiita API v2で認証・認可を行うためのチーム別アクセストークンを表します。Qiita Teamでのみ有効です。
 */
export interface NoName24 {
  /**
   * 登録されたAPIクライアントを特定するためのID
   */
  client_id: string
  /**
   * アクセストークンに許された操作の一覧
   */
  scopes: string[]
  /**
   * アクセストークンを表現する文字列
   */
  token: string
  [k: string]: unknown
}
/**
 * Qiita Teamでの招待中のメンバーを表します(Qiita Teamでのみ有効。管理者権限が必要)。
 */
export interface NoName25 {
  /**
   * 招待中のメンバーのemailアドレスです。
   */
  email: string
  /**
   * 招待用URLです。有効期限は1日です。
   */
  url: string
  [k: string]: unknown
}
/**
 * 記事のひな形に利用できるテンプレートを表します。Qiita Teamでのみ有効です。
 */
export interface NoName26 {
  /**
   * テンプレートの本文
   */
  body: string
  /**
   * テンプレートの一意なID
   */
  id: number
  /**
   * テンプレートを判別するための名前
   */
  name: string
  /**
   * 変数を展開した状態の本文
   */
  expanded_body: string
  /**
   * 変数を展開した状態のタグ一覧
   */
  expanded_tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * 変数を展開した状態のタイトル
   */
  expanded_title: string
  group: NoName27
  /**
   * タグ一覧
   */
  tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * 生成される記事のタイトルの雛形
   */
  title: string
  /**
   * 共同編集モード
   */
  coedit?: boolean
  [k: string]: unknown
}
/**
 * Qiita Teamのグループを表します。
 */
export interface NoName27 {
  /**
   * データが作成された日時
   */
  created_at: string
  /**
   * グループの詳細を表します。
   */
  description: string
  /**
   * グループに付けられた表示用の名前を表します。
   */
  name: string
  /**
   * 非公開グループかどうかを表します。
   */
  private: boolean
  /**
   * データが最後に更新された日時
   */
  updated_at: string
  /**
   * グループのチーム上での一意な名前を表します。
   */
  url_name: string
  [k: string]: unknown
}
/**
 * Qiita上のユーザーを表します。
 */
export interface NoName28 {
  /**
   * 自己紹介文
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * このユーザーがフォローしているユーザーの数
   */
  followees_count: number
  /**
   * このユーザーをフォローしているユーザーの数
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * ユーザーID
   */
  id: string
  /**
   * このユーザーが qiita.com 上で公開している記事の数 (Qiita Teamでの記事数は含まれません)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * 居住地
   */
  location: null | string
  /**
   * 設定している名前
   */
  name: null | string
  /**
   * 所属している組織
   */
  organization: null | string
  /**
   * ユーザーごとに割り当てられる整数のID
   */
  permanent_id: number
  /**
   * 設定しているプロフィール画像のURL
   */
  profile_image_url: string
  /**
   * Qiita Team専用モードに設定されているかどうか
   */
  team_only: boolean
  /**
   * Twitterのスクリーンネーム
   */
  twitter_screen_name: null | string
  /**
   * 設定しているWebサイトのURL
   */
  website_url: null | string
  [k: string]: unknown
}
