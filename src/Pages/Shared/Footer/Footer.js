import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10">
            <div className='footer px-12 py-12'>
                <div>
                    <span href="/" className="footer-title">Service</span>
                    < a href="/" className="link link-hover" > Branding</ a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div >
                <div>
                    <span href="/" className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span href="/" className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center py-12'>
                <p>Copyright © 2022 - All right reserved.</p>
            </div>

        </footer >
    );
};

export default Footer;