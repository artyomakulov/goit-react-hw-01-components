import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
return (  
<section class="statistics">
  {title ? <h2 class="title">{title}</h2>: " "}
  <ul class="stat-list">
{stats.map((data) => {
  return (
    <li class="item" key={data.id}>
      <span class="label">{data.label}</span>
      <span class="percentage">{data.percentage}%</span>
    </li>
  )
})} 
  </ul>
</section>
)
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}