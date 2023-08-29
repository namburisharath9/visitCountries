import './index.css'

const CountriesItem = props => {
  const {countryDetails, onClickVisit} = props
  const {name, isVisited, id} = countryDetails

  const onClickVisitBtn = () => {
    onClickVisit(id)
  }

  return (
    <li className="country-item-cont">
      <p>{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesItem
