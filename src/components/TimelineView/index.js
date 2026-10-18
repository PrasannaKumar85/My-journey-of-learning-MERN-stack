import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(eachItem => ({
    title: eachItem.title,
  }))

  return (
    <div className="timeline-container">
      <h1 className="timeline-main-heading">
        MY JOURNEY OF CCBP <span>4.0</span>
      </h1>

      <div className="chrono-container">
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#2b237c',
            secondary: '#ffffff',
            cardBgColor: '#ffffff',
            cardForeColor: '#171f46',
            titleColor: '#171f46',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachItem.id}
                  courseDetails={eachItem}
                />
              )
            }

            if (eachItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard
                  key={eachItem.id}
                  projectDetails={eachItem}
                />
              )
            }

            return null
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
