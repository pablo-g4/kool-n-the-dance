import Image from './../../image/lArticle_img.png'
import { News } from '../../Models/News'
import defaultPic from '../../Assets/Images/nofiles.jpg'
import { formatDateDDMMYY } from '../../Utils/utils'

const CardRight = ({ news } : { news: News}) => {

    return (
        <>
            {
                news && (
                    <div>
                        <p className='lArticle_title text-center'>Dernier Article</p>
                        <article className='lArticle mx-auto'>
                            <img className="lArticle_img" src={news?.imageUrl || defaultPic} alt="Latest Article's image" />
                            <div className="lArticle_txt">
                                <strong className="lArticle_label">{news?.title}</strong>
                                <p className="lArticle_content">
                                    {
                                        news?.description
                                    }
                                </p>
                                <h6 className="lArticle_date">{formatDateDDMMYY(news.creationDate*1000 ?? 0)}</h6>
                            </div>
                        </article>
                    </div>
                )
            }
        </>    
    )
}

export default CardRight