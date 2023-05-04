import css from './Section.module.css'

const Section = ({title, children}) => {
    return (
        <section className={css.container}>
            <h1 className={css.title}>{title}</h1>
            {children}
        </section>
    )
}

export default Section