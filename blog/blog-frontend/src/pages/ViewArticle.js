import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle } from '../api';

export default function ViewArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getArticle(id)
      .then(res => setArticle(res.data))
      .catch(err => {
        console.error('Virhe artikkelin haussa:', err.message);
        setError('Artikkelia ei löytynyt tai tapahtui virhe.');
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!article) return <p>Ladataan artikkelia...</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p><em>Kirjoittanut: {article.author}</em></p>
    </div>
  );
}
