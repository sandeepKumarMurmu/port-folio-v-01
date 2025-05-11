import { Link } from 'react-router-dom';

type LinkTagProps = {
    link?: string,
    styles: string,
    tagName: string
}
function LinkTag({ link = '/', styles, tagName }: LinkTagProps) {
    return (
        <Link to={link} className={styles}>{tagName}</Link>
    )
}

export default LinkTag