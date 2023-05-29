import defaultPic from '../../Assets/Images/nofiles.jpg'
import { utils } from '../../Utils/utils'
import { NewsVM } from '../../viewModels/NewsVM'

const CardRight = ({ newsVM } : { newsVM: NewsVM}) => {

    return (
        <>
            {
                newsVM && (
                    <div>
                        <p className='lArticle_title text-center'>Dernier Article</p>
                        <article className='lArticle mx-auto'>
                            <img className="lArticle_img" src={newsVM.imageFile.fileUrl || defaultPic} alt="Latest Article's image" />
                            <div className="lArticle_txt">
                                <strong className="lArticle_label">{newsVM.title}</strong>
                                <p className="lArticle_content">
                                    {
                                        newsVM.description
                                    }
                                </p>
                                <h6 className="lArticle_date">{utils.formatDateDDMMYY(newsVM.creationDate*1000 ?? 0)}</h6>
                            </div>
                        </article>
                    </div>
                )
            }
        </>    
    )
}

export default CardRight