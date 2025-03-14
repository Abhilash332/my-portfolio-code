import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
        <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            EDUCATION DETAILS</h2>
            <hr/>
            <VerticalTimeline>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - 2022"
    iconStyle={{ background: '#25ada4', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Integrated M.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">ABV-IIITM, IN</h4>
    <p>
      Developed Skills such as OOPS, DBMS, Operating Systems, Computer Networks and Web Development.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#25ada4', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate</h3>
    <h4 className="vertical-timeline-element-subtitle">Narayana Junior College, Hyderabad, IN</h4>
    <p>
      Gained highly problem solving skills in Mathematics and Physics due to which I cracked JEE.
    </p>
  </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Education