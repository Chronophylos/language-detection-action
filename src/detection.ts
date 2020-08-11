import got from 'got'

interface Response {
  language: string
  iso_tag: string
  wiki_url: string
}

export async function detectLanguage(text: string): Promise<string> {
  return new Promise(async resolve => {
    const body: Response = await got
      .post('https://languages.cortical.io/rest/text/detect_language', {
        body: text
      })
      .json()

    resolve(body.iso_tag)
  })
}
