import Link from "next/link";
import Image from "next/image";

export default function Layout ({children}) {
return (
    <div>
<header className="main-header">
    <div className="">
        <div className="page-center">
            <div className="header-wrapper">
                <div className="logo-block">
                    <Link href="/">
                        <a className="">
                            <Image src="/elegant_logo.png" width={200} height={45}/>
                        </a>
                    </Link>
                </div>
                <div className="top-menu-block">
                    <nav className="navigation-menu">
                        <ul>
                            <li>
                                <Link href="/about">
                                    <a className="">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies">
                                    <a className="">
                                        Case Studies
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a className="">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li class="sub-menu-list">
                                <Link href="/contact">
                                    <a className="">
                                        Contact
                                    </a>
                                </Link>
                            <ul class="sub-menu">
                                <li>
                                    <Link href="tel:01618831368">
                                        <a className="">
                                            <Image src="/Mobile.png" width={17} height={24}/> 0161 883 1368
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:hello@elegantdigital.co.uk">
                                        <a className="">
                                            <Image src="/email.png" width={12} height={16}/> hello@elegantdigital.co.uk
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="">
                                            Let’s talk <Image src="/arrow_back_24px.png" width={18} height={10}/>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
</header>
{
    children
}
<div>Footer</div>
</div>
)
}