export const metadata = {
  title: '100名城マップ旅手帖',
  description: '日本100名城を地図から探して攻略ガイド・旅日記へ。'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        <header style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}>
            100名城マップ旅手帖
          </a>
          <nav style={{ float: 'right' }}>
            <a href="/map/" style={{ marginLeft: 16 }}>地図で探す</a>
          </nav>
        </header>
        <main style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px' }}>
          {children}
        </main>
        <footer style={{ padding: '24px 16px', borderTop: '1px solid #eee', textAlign: 'center' }}>
          © {new Date().getFullYear()} 100castle-travelogue.com
        </footer>
      </body>
    </html>
  )
}
