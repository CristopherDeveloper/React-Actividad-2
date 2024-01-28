import IconStarWeb from "../../../../assets/icon/icon-star-3d.webp"


const CardFilms = ({rank, img, altImage}) => {
    return(
        <section className="films">
            <img alt={altImage} src={img}/>
            <div>
                <img src={IconStarWeb}/>
                <p>{rank}</p>
            </div>
        </section>
    )
}

export default CardFilms;