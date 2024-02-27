import autofill from '../assets/autofill.svg';
import gitHub from '../assets/github.svg';

function Header({ autoFillCV, savePDF }) {
    return (
        <header>
            <div className="head">
                <h1>CV Maker</h1>
                <div className='buttonSection'>
                    {savePDF()}
                    <button onClick={autoFillCV}>
                        <img src={autofill} alt="Autofill" /> <span>Autofill</span>
                    </button>
                </div>
            </div>
            <div className="createdBy">
                Created by <span>
                                <a href="https://github.com/" target='_blank'>
                                    <img src={gitHub} alt="" />Ahmed raza
                                </a>
                            </span>
            </div>
        </header>
    );
}

export default Header;