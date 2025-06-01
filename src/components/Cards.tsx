interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    watch: boolean;
    link?: string;
}

function Cards({ imageUrl, title, description, watch, link }: CardProps) {
    return (
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure className="w-full h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    className="w-full h-full object-cover"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline rounded-2xl" disabled = {true}>Description</button>
                    <button className="btn btn-outline rounded-2xl" disabled={!link?.trim()}><a href={link} target="_blank">Visit</a></button>
                </div>
            </div>
        </div>


    )
}

export default Cards