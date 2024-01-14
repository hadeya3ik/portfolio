import { SiApachespark } from "react-icons/si";

function Job({year, title, company}) {
    return (
      <div className="job">
        <div className='bullet'>
          <SiApachespark className='icon' size={30} />
          <h3 className="year bold_mini">{year}</h3>
        </div>
        <div className="details">
          <h4 className="job_title">{title}</h4>
          <p className="paragraph_style">{company}</p>
        </div>
      </div>)
}

export default Job; 
