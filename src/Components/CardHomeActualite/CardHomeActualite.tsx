import Image from './../../image/lArticle_img.png'
import "./CardHomeActualite.css"
import { News } from '../../Models/News'

const CardHomeActualite = ({ news } : { news : News}) => {
    return (
        <>
            <article className='cardActu mx-auto'>
                <img className="cardActu_img" src={news.imageUrl ?? Image} alt="Latest Article's image" />
                <div className="cardActu_txt">
                    <strong className="cardActu_label">{news.title}</strong>
                    <p className="cardActu_content">
                        {
                            news.description
                        }
                    </p>
                    <h6 className="cardActu_date">12/01/2023</h6>
                </div>
            </article>
        </>    
    )
}

export default CardHomeActualite;