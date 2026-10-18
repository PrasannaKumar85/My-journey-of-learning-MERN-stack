import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />

      <div className="project-card-heading">
        <h2 className="project-title">{projectTitle}</h2>

        <div className="project-duration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>

      <p className="project-description">{description}</p>

      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="project-visit-link"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
