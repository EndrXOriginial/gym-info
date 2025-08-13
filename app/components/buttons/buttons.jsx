import Link from 'next/link';
import './buttons.css';

export const Button = ({padding=`0.5rem 1rem`, background= 'transparent', color= 'white', children}) => {
    return (
        <div className="button" style={{padding: padding, background: background, color: color, border: `1px solid ${color}`}}>
            <p className="button-text">{children}</p>
        </div>
    );
}

export const LinkButton = ({padding=`0.5rem 1rem`, background= 'transparent', color= 'white', href, children}) => {
    return (
        <Link href={href} className="button" style={{padding: padding, background: background, color: color, border: `1px solid ${color}`}}>
            <p className="button-text">{children}</p>
        </Link>
    );
}