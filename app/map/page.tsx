export const metadata = { title: '地図で探す' }

export default function MapPage() {
  // 後で React-Leaflet に置き換える。今はマイマップ埋め込みでOK。
  const src = 'https://www.google.com/maps/d/embed?mid=1ZQn9k-EXAMPLE-REPLACE-ME'
  return (
    <div style={{ position: 'relative', paddingBottom: '60%', height: 0 }}>
      <iframe
        src={src}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        loading="lazy"
      />
    </div>
  )
}
