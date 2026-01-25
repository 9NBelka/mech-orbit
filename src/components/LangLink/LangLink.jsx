import { Link, useParams } from 'react-router-dom';
import { forwardRef } from 'react';

const LangLink = forwardRef(({ to, children, ...props }, ref) => {
  const { lang } = useParams();

  // Берём язык из URL или из localStorage
  let currentLang = lang?.toLowerCase();
  if (!['ua', 'ru', 'en'].includes(currentLang)) {
    currentLang = localStorage.getItem('preferredLang') || 'ua';
  }

  // Если путь уже содержит язык — не трогаем
  if (to.startsWith('/') && ['ua', 'ru', 'en'].some((l) => to.startsWith(`/${l}`))) {
    return (
      <Link ref={ref} to={to} {...props}>
        {children}
      </Link>
    );
  }

  // Добавляем язык
  const prefixedTo = `/${currentLang}${to.startsWith('/') ? to : '/' + to}`;

  return (
    <Link ref={ref} to={prefixedTo} {...props}>
      {children}
    </Link>
  );
});

export default LangLink;
