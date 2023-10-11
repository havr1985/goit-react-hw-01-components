import css from './Statistics.module.css';

export const Statistics = (props) => {
    return <section className={css.statistics}>
        {props.title ? <h2>{props.title}</h2> : ""}

        <ul className={css.statList}>
            {props.stats.map((item) => {
                return <li key={item.id} className={css.item} style={{backgroundColor:getRandomHexColor()}}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>
            })
            }</ul>
    </section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
