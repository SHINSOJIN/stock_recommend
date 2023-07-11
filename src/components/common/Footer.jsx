import React from 'react';

const Footer = () => {
    return (
            <footer style={{height: '110px',padding: '15px 150px', color: '#808080'}}>
                <nav>
                    <a href='https://cocoder.tistory.com' target='_blank' style={{margin: '0 20px 10px 0'}}>Blog</a> |
                    <a href='https://github.com/cocoder16' target='_blank' style={{margin: '0 20px 10px 20px'}}>Github</a>
                </nav>
                <p style={{marginTop:'20px', lineHeight:1.3}}>
                    <span>저 자 : ZZIN</span><br/>
                    <span>이메일 : jane20180@gmail.com</span><br/>
                    <span>Copyright 2023. cocoder. All Rights Reserved.</span>
                </p>
            </footer>
    );
};

export default Footer;