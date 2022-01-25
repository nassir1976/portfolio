import { VscGithubAlt } from "react-icons/vsc"
import { AiOutlineLinkedin} from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"

const BottomNav = () => {

    return (
        <div className="bottom-nav-container">
            <div className="bottom-nav-wrap">
                <nav className="bottom-nav" >
                    <a href="https://www.linkedin.com/in/nassir-abegaz-5338b326/" rel="noreferrer" target="_blank"><AiOutlineLinkedin /></a>
                    <a href="https://github.com/nassir1976" rel="noreferrer" target="_blank"><VscGithubAlt /></a>
                    {/* <a href="#contact"><MdOutlineEmail /></a> */}
                    <a href="mailto:email@daniya_n@yahoo.com, secondemail@example.com"><MdOutlineEmail /> </a>
                </nav>
            </div>
        </div>
    )
}

export default BottomNav