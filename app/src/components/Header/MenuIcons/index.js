

const MenuIcons = ({image, text}) => {
    return(
        <>
            <div>
                <div>
                    <img src={image} />
                </div>

                <div>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default MenuIcons;