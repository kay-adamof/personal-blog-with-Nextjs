import { compile } from 'json-schema-to-typescript'
import * as ct from '@/constants'
import * as fs from 'node:fs/promises'

const tweetResponse = ct.tweetInfo
const qiita = ct.qiita

const writeSchema = async () => {
  const compiled = await compile(tweetResponse, 'MySchema')
  if (compiled) {
    console.log('Success')
    fs.writeFile('Awesome.ts', compiled)
    return
  }
  console.error('Error')
}

// writeSchema()
