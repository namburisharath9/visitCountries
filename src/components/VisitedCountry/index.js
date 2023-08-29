import './index.css'

const VisitedCountry = props => {
  const {visitedCountry, onClickRemove} = props
  const {id, name, imageUrl} = visitedCountry
  const onClickRemoveBtn = () => {
    onClickRemove(id)
  }
  return (
    <li className="visited-country">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="name-cont">
        <p className="title-country">{name}</p>
        <button className="btn" type="button" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
