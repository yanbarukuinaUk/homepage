export default function Blog({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>ブログ</h1>
      <h4>ブログのIDは、{params.id}です。</h4>
    </div>
  );
}