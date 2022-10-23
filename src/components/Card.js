const Card = ({ image, p, h2 }) => {
  return (
    <div className='card-wrapper'>
      <p>{image}</p>
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  )
}

export default Card
