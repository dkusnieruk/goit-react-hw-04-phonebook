import css from '../Filter/filter.module.css';
import propTypes from 'prop-types';

function Filter(props) {
  return (
    <>
      <label className={css.label}>
        Search
        <input
          className={css.input}
          type="search"
          name="filter"
          value={props.filter}
          onChange={props.handleChange}
        ></input>
      </label>
    </>
  );
}

Filter.propTypes = {
  filter: propTypes.string,
};

export default Filter;
