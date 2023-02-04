import PropTypes from 'prop-types';

export default function Statistics({id, label, percent}) {
return (
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
  </ul>
</section>
)

}

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percent: PropTypes.number,
}