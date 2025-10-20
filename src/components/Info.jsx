function Info () {
    return (
        <div className="header">
            <img className="avatar" src="../src/assets/Profile-image.png" alt="Ben Wanjohi profile photo"/>
            <div className="info-details">
                <h1 className="info-name">Ben Wanjohi</h1>
                <p className="info-desc">Frontend Developer</p>
                <p className="info-web">benwanjohi.website</p>
            </div>
            <div className="info-buttons">
                <a className="button-icon email-icon" 
                  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://mail.google.com/mail/u/0/&ved=2ahUKEwjm7M3c7LKQAxWOzgIHHZxDCfQQFnoECAwQAQ&usg=AOvVaw1GRqnzaEzJ-JntPiR5Sc98"
                  target="_blank">
                    <img className="image-icon" src="../src/assets/email-icon.svg"/>
                    Email
                </a>
                <a className="button-icon" href="https://ke.linkedin.com/">
                    <img className="image-icon" src="../src/assets/linkedin-icon.svg"/>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}
export default Info