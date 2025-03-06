import Masonry from "./masonry";
import { game_data } from "./Entertainment/constants/info";
const gallery = () => {
  return (
    <div>
      {game_data.map((image)=>(Masonry(image)))}
    </div>
  )
}

export default gallery
