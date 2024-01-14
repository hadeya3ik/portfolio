import './play.css'
import img1 from './../../images/gallery/resized_IMG_0583.png';
import img2 from './../../images/gallery/resized_IMG_0584.png';
import img3 from './../../images/gallery/resized_IMG_0585.png';
import img4 from './../../images/gallery/resized_IMG_0588.png';
import img5 from './../../images/gallery/resized_IMG_0604.png';
import img6 from './../../images/gallery/resized_IMG_0612.png';
import img7 from './../../images/gallery/resized_IMG_0619.png';
import img8 from './../../images/gallery/resized_IMG_0620.png';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function play() {
  return (
    <div className="play_container">
      <h4 className='bold_mini play_header'>My creative solace</h4>
      <p className="paragraph_style play_desc">I sometimes paint !</p>
      <div className="gallery">
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2}}>
        <Masonry>
        <img src={img8} className='art_img'/>
        <img src={img5} className='art_img'/>
        <img src={img4} className='art_img'/>
        <img src={img6} className='art_img'/>
        <img src={img7} className='art_img'/>
        <img src={img2} className='art_img'/>
        <img src={img3} className='art_img'/>
        <img src={img1} className='art_img'/>
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default play
