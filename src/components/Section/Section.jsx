import css from './Section.module.css'
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
        <section className={css.container}>
            <h1 className={css.title}>{title}</h1>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
}

export default Section