interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    watch: boolean;
    link?: string;
}

function Cards({ imageUrl, title, description, watch, link }: CardProps) {
    return (
        <div className="card card-side bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out">
            <figure className="w-45 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {false && <p className="break-words whitespace-pre-wrap">{description}</p>}
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Description</button> */}
                    {watch && <a href={link} target="_blank"><button className="btn btn-primary" >Watch</button></a>}
                </div>
            </div>
        </div>
    )
}

export default Cards