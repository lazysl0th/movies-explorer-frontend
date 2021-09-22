import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" id="student">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__item"><a href="https://lazysl0th.github.io/how-to-learn/" className="portfolio__link" target="_blank" rel="noreferrer">Статичный сайт</a></li>
        <li className="portfolio__item"><a href="https://lazysl0th.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт</a></li>
        <li className="portfolio__item"><a href="https://mesto.ls.nomoredomains.monster/" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение</a></li>
      </ul>
    </section>
  );
}

export default Portfolio;
