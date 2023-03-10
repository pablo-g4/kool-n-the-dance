import Image from './../../image/lArticle_img.png';
const CardRight = () => {
    return (
        <>
            <p className='lArticle_title text-center'>Dernier Article</p>
            <article className='lArticle mx-auto'>
                <img className="lArticle_img" src={Image} alt="Latest Article's image" />
                <div className="lArticle_txt">
                    <strong className="lArticle_label">TITRE ARTICLE</strong>
                    <p className="lArticle_content">
                        "Camille est une coach sportive dynamique qui
                        donne l'envie de nous surpasser. Elle est géniale, la
                        musique sur laquelle on danse est super. A la fin du
                        cours on a la pêche. Tout est là pour donner envie d'y
                        aller et de se bouger, l'équipe est sympa. Je la conseille à 2000%."
                    </p>
                    <h6 className="lArticle_date">12/01/2023</h6>
                </div>
            </article>
        </>    
    )
}

export default CardRight;