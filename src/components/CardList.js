import { BlogList } from '../BlogList.js'
import Card from './Card'

const CardList = () => {
  return BlogList.map((item, index) => (
    <Card key={index} image={item.image} h2={item.h2} p={item.p} />
  ))
}

export default CardList
