import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory( {items} ) {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr className={css.transHead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(({ id, type, amount, currency}) => {
    return (
    <tr key={id} className={css.transLine}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr> 
    )
  }
  )}

  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
id: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
}

