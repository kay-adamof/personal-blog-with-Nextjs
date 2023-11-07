export const regex = {
  isolatedUrl: /\n\[\https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)\]\(\https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)\)\n/g,
  urlBase:
    '\\https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)',
  url: /\https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g,
  link: () =>
    new RegExp(`\\n\\[(${regex.urlBase})\\]\\(${regex.urlBase}\\)`, 'g'),
  Url: /\n(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*))/g,
  Xcom: /https:\/\/x\.com/g,
  toGetTwitterId:
    /\nhttps:\/\/twitter\.com\/[A-Za-z0-9_]+\/status\/([0-9]+)\?s=[0-9]+\n/g,
  Twitter:
    /(\[https:\/\/twitter\.com\/)([A-Za-z0-9_]+)(\/status\/[0-9]+\?s=[0-9]+\])/g,
}

export type RegexForReplacingContent = typeof regex
