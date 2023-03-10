import fs from 'fs'
import path from 'path'
import Head from 'next/head'

export async function getStaticProps({ params }) {
  let config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'lib/config.json')))

  return {
    props: {
      config
    }
  }
}


export default function Home({ config }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{config.title}</title>
        <meta name="description"
              content={config.description}
              key="desc"/>
      </Head>
      <iframe src="http://www.google.com" style={{width: "100%", height: "100vh"}}/>
    </>
  )
}