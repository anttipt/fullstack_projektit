import { useState } from 'react';
import { createArticle } from '../api';
import { useNavigate } from 'react-router-dom';

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createArticle({ title, content, author });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Otsikko" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Sisältö" value={content} onChange={e => setContent(e.target.value)} />
      <input placeholder="Kirjoittaja" value={author} onChange={e => setAuthor(e.target.value)} />
      <button type="submit">Julkaise</button>
    </form>
  );
}
