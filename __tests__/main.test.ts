import {detectLanguage} from '../src/detection'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('english text', async () => {
  const language = await detectLanguage(
    'Hello world. Why does this API think this is nl?'
  )
  expect(language).toBe('en')
})

test('german text', async () => {
  const language = await detectLanguage(
    'Hallo Welt! Dies ist ein deutscher Text. Kein niederländischer Text!'
  )
  expect(language).toBe('de')
})
