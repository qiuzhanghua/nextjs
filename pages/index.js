import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex-1 min-h-screen md:bg-clip-padding">
      <Head>
        <title>NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
              <div>
                  <div className="text-xl font-medium text-red-500">WeChat</div>
                  <p className="text-blue-500">You have a new message!</p>
              </div>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/qiuzhanghua"
          rel="noopener noreferrer"
        >
          https://github.com/qiuzhanghua
        </a>
      </footer>
    </div>
  )
}
