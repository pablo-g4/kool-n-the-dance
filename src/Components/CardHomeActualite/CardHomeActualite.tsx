
import Image from '../../Assets/Images/lArticle_img.png'
import "./CardHomeActualite.css"
import { NewsVM } from '../../viewModels/NewsVM'
import { utils } from '../../Utils/utils'

const CardHomeActualite = ({ newsVM } : { newsVM : NewsVM}) => {
    return (
        <>
            <article className='cardActu mx-auto'>
                <img className="cardActu_img" src={newsVM.imageFile.fileUrl ?? Image} alt="Latest Article's image" />
                <div className="cardActu_txt">
                    <strong className="cardActu_label">{newsVM.title}</strong>
                    <span data-bs-toggle="tooltip" data-bs-placement="bottom" title={newsVM.description} className="cardActu_content text-truncate">
                        {
                            newsVM.description
                        }
                    </span>
                    <h6 className="cardActu_date">{utils.formatDateDDMMYY(newsVM.creationDate * 1000)}</h6>
                </div>
            </article>
        </>    
    )
}

export default CardHomeActualite;