export default function Blog({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <h1>ブログ</h1>
      <h4>ブログのIDは、{params.id}です。</h4>
    </main>
  );
}