import Image from 'next/image';
import Link from 'next/link';
import './menu.css';
import { Button, LinkButton } from '../buttons/buttons';

export const Menu = () => {
    return (
        <nav className="nav">
            <Link href={'/'} className='nav-logo'>
                <Image
                    src={'/streakLogo.svg'}
                    width={125}
                    height={25}
                    alt='Streak logo'
                />
            </Link>
            <ul className="nav-ul">
                <div className="nav-ul-div1">
                    <Link href={'/'}><Image src={'/House_01.svg'} width={24} height={24} alt='Homepage icon'/></Link>
                    <Link href={'/nutrition'}>Nutrition</Link>
                    <Link href={'/bulk-cut'}>Bulk VS Cut</Link>
                    <Link href={'/training-type'}>Training Types</Link>
                </div>

                <div className="nav-ul-div2">
                    <LinkButton href={'/weigth-goal'} color='grey'>My Weight Goal</LinkButton>
                    <Button color='red'>Download The Excel</Button>
                </div>
            </ul>
        </nav>
    );
}