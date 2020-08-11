import * as core from '@actions/core'
import {detectLanguage} from './detection'

async function run(): Promise<void> {
  let language: String = 'unknown'
  const input = core.getInput('input', {required: true})

  try {
    core.debug('Detecting language')
    language = await detectLanguage(input)
  } catch (error) {
    core.setFailed(error.message)
  }

  const output = core.getInput('output')
  core.setOutput(output, language)
}

run()
