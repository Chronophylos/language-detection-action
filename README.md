<p align="center">
  <a href="https://github.com/chronophylos/language-detection-action"><img alt="typescript-action status" src="https://github.com/chronophylos/language-detection-action/workflows/build-test/badge.svg"></a>
</p>

# Language Detection Action

Detect language used in a issue, issue comment or pull request.

## Usage

Get the iso language code of a string:

```yaml
- uses: chronophylos/language-detection-action@v1
  id: 'detect'
  with:
    input: 'Hello World. This is a test from a workflow.'
- name: 'Dump result'
  run: echo "Found language `${{steps.detect.outputs.language}}`"
```
