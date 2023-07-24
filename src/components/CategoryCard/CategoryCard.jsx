import './catcard.scss';

function CategoryCard({title, image}) {
    return (
        <div className="cat-card-wrapper">
            <img src={image} alt="" />
            <div className="cat-card-title">{title}</div>
        </div>
    )
}

export default CategoryCard;