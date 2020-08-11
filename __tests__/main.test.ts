import {detectLanguage} from '../src/detection'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('english text', async () => {
  const language = await detectLanguage('hello world')
  expect(language).toBe('en')
})

test('german text', async () => {
  const language = await detectLanguage(
    'Hallo Welt! Dies ist ein deutscher Text. Kein niederländischer Text!'
  )
  expect(language).toBe('de')
})

// shows how the runner will run a javascript action with env / stdout protocol
//test('test runs', () => {
//  process.env['INPUT_MILLISECONDS'] = '500'
//  const ip = path.join(__dirname, '..', 'lib', 'main.js')
//  const options: cp.ExecSyncOptions = {
//    env: process.env
//  }
//  console.log(cp.execSync(`node ${ip}`, options).toString())
//})
