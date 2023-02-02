import css from '../Filter/filter.module.css';
import propTypes from 'prop-types';

function Filter({filter, handleChange}) {
  return (
    <>
      <label className={css.label}>
        Search
        <input
          className={css.input}
          type="search"
          name="filter"
          value={filter}
          onChange={handleChange}
        ></input>
      </label>
    </>
  );
}

Filter.propTypes = {
  filter: propTypes.string,
};

export default Filter;
