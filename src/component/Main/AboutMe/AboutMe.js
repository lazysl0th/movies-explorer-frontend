import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="student" id="student">
      <SectionTitle text="Студент" />
      <article className="student__info">
        <img src={photo} alt="Фотография" className="student__photo" />
        <h3 className="student__name">Ленивец</h3>
        <h4 className="student__profession-age">Фронтенд-разработчик, 32 года</h4>
        <p className="student__about">
        Я родился в Харцызске. В настоящее время живу и работаю в Сургуте, закончил факультет автоматики и вычислительной техники
        ТТИ ЮФУ. У меня есть жена и мы любим путешествовать. В 2020 году решил пройти курс веб-разработчика и начать кодить.
        </p>
        <ul className="student__links">
          <li className="student__item"><a href="https://t.me/lazy_sIoth" className="student__link" target="_blank" rel="noreferrer">Telegram</a></li>
          <li className="student__item"><a href="https://github.com/lazysl0th" className="student__link" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </article>
    </section>
  );
}

export default AboutMe;
