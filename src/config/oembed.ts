import type { Config } from '@remark-embedder/transformer-oembed'

export const oembed: Config = ({ url, provider }) => {
  if (provider.provider_name === 'YouTube') {
    const w = 640
    const h = (w * 9) / 16
    return { params: { maxwidth: w.toString(), maxheight: h.toString() } }
  }
  if (provider.provider_name === 'Twitter') {
    return {
      params: {
        theme: 'light',
        hide_thread: true,
        dnt: true,
        omit_script: true,
      },
    }
  }
  return {
    params: {},
  }
}
