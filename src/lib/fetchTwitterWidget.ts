import * as fs from 'node:fs/promises'
import * as path from 'node:path'

const widgetURL = "https://platform.twitter.com/widgets.js"
const fetchTwitterWidget = async ({ url }:) => {
  const widgetJs = await fetch(url)
}
fetchTwitterWidget(widgetURL)

