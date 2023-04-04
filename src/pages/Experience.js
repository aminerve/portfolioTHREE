import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@material-ui/icons";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Career and Technical Education Certification (Electrical Work) - 3
            Year Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Brooklyn, NY</h4>
          <p>Earned Residential Electrician Certification.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Science, Technology, and Research Early College High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Brooklyn, NY</h4>
          <p>Graduated with a 3.7 GPA and 22 College Credits.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Camp Counselor - SkillMill
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Manhattan, New York
          </h4>
          <p>
            Provided high-quality educational and recreational opportunities and
            enjoyable experiences for camp participants between the ages of 5
            and 11 years old.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Per Scholas 15 Week Software Engineering Bootcamp
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Remote Course</h4>

          <p>
            Learned and Created Various Applications Using Frontend and Backend
            Frameworks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
