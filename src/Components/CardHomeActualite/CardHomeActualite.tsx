
import Image from '../../Assets/Images/lArticle_img.png'
import "./CardHomeActualite.css"
import { News } from '../../Models/News'
import { utils } from '../../Utils/utils'

const CardHomeActualite = ({ news } : { news : News}) => {
    return (
        <>
            <article className='cardActu mx-auto'>
                <img className="cardActu_img" src={news.imageUrl ?? Image} alt="Latest Article's image" />
                <div className="cardActu_txt">
                    <strong className="cardActu_label">{news.title}</strong>
                    <span data-bs-toggle="tooltip" data-bs-placement="bottom" title={news.description} className="cardActu_content text-truncate">
                        {
                            news.description
                        }
                    </span>
                    <h6 className="cardActu_date">{utils.formatDateDDMMYY(news.creationDate * 1000)}</h6>
                </div>
            </article>
        </>    
    )
}

export default CardHomeActualite;