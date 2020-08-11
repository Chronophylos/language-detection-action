import * as core from '@actions/core'
import {detectLanguage} from './detection'

async function run(): Promise<void> {
  let language: String = 'unknown'
  const input = core.getInput('input', {required: true})

  try {
    core.debug('Detecting language')
    language = await detectLanguage(input)
    core.debug(`Detected language as '${language}'`)
  } catch (error) {
    core.setFailed(error.message)
  }

  core.setOutput('language', language)
}

run()
