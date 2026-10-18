import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="course-card-heading">
        <h2 className="course-title">{courseTitle}</h2>

        <div className="course-duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <p className="course-description">{description}</p>

      <ul className="course-tags-list">
        {tagsList.map(eachTag => (
          <li className="course-tag" key={eachTag.id}>
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
