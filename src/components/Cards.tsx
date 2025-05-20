interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    watch: boolean;
    link?: string;
}

function Cards({ imageUrl, title, description, watch, link }: CardProps) {
    return (
        <div className="card card-side w-[500px] bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out items-center">
            <figure className="w-44 h-44 flex-shrink-0 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">{title}</h2>
                <p className="break-words whitespace-pre-wrap">{description}</p>
                <div className="card-actions justify-end mt-auto">
                    <button className="btn btn-ghost btn-disabled">Description</button>
                    {watch && (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-ghost">Watch</button>
                        </a>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Cards