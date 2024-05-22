import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {

    return (
        <footer className="bg-black text-white font-Aldrich py-3">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                    <div>
                    <div className="flex flex-wrap justify-center items-center">
                        <p className="text-xl mb-2 ">Monash Human Power</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <a href="https://www.facebook.com/MonashHumanPower/" target='blank'>
                                <FontAwesomeIcon icon={faFacebook} className="mr-3" style={{ width: '25px', height: '25px' }}/>
                            </a>
                            <a href="https://www.instagram.com/monashhumanpower/?hl=en" target='blank'>
                                <FontAwesomeIcon icon={faInstagram} className="mr-3" style={{ width: '25px', height: '25px' }}/>
                            </a>
                            <a href="https://au.linkedin.com/company/monashhumanpower" target='blank'>
                                <FontAwesomeIcon icon={faLinkedin} className="mr-3" style={{ width: '25px', height: '25px' }}/>
                            </a>
                            <a href="https://www.tiktok.com/@monashhumanpower" target='blank'>
                                <FontAwesomeIcon icon={faTiktok} className="mr-3" style={{ width: '25px', height: '25px' }}/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCB-4Z6429uRzq5hKz0OuR-A" target='blank'>
                                <FontAwesomeIcon icon={faYoutube} className="mr-3" style={{ width: '25px', height: '25px' }}/>
                            </a>
                            <a href="https://github.com/monash-human-power" target='blank'>
                                <FontAwesomeIcon icon={faGithub} className="mr-3" style={{ width: '25px', height: '25px' }}/>
                            </a>
                        </div>
                    </div>
                    {/* Subscribe section */}
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl mb-2">Subscribe To Us</p>
                        <p className="text-sm mb-2 text-center">
                            Keep up to date with MHP and other related news with our newsletter.
                        </p>
                        <button className="px-5 py-2 rounded-md border-2 border-white hover:bg-greenbutton hover:text-black hover:border-black">
                            Subscribe
                        </button>
                    </div>
                    {/* Quick links */}
                    <div>
                        <div className="flex flex-wrap justify-center items-center">
                            <p className="text-xl mb-2">Quick Links</p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center text-center">
                        <ul className='mb-3'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/team">Team</Link></li>
                            <li><Link href="/bikes">Bikes</Link></li>
                            <li><Link href="/join">Join Us</Link></li>
                            <li><Link href="/competetions">Competitions</Link></li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-wrap justify-center text-center py-2">
                    <p className="text-xs">We wish to acknowledge the Wurundjeri People of the Kulin Nations, on whose land we build our bikes and pay our respects to their Elders, past and present.</p>
                </div>
                <div className="flex flex-wrap justify-center text-center">
                    <p className="text-xs">&copy; {new Date().getFullYear()} Monash Human Power</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
