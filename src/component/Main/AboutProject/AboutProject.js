import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className="project" id="project">
      <SectionTitle text="О проекте" />
      <ul className="project__table project__table_type_text">
        <li className="project__table-cell">
          <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__table-cell">
          <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="project__table project__table_type_timing">
        <li className="project__table-cell">
          <p className="project__timing project__timing_bacgound-color_green">1 неделя</p>
          <p className="project__arch">Back-end</p>
        </li>
        <li className="project__table-cell">
          <p className="project__timing project__timing_bacgound-color_gray">4 недели</p>
          <p className="project__arch">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
