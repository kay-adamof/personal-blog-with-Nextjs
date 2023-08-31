import {writeFileSync} from 'fs'
import {compileFromFile} from 'json-schema-to-typescript'

async function generate() {
  writeFileSync('qiita.d.ts', await compileFromFile('./qiita.schema.json'))
}

generate()
