import React from 'react'
import styles from './skillInfoCard.module.css'

const SkillInfoCard = ({heading,skills}) => {
  return (
    <div className={styles.skillsinfocard}>
        <h5>{heading}</h5>

        <div className={styles.skillsinfocontent}>
          {skills.map((item,index) => (
            <React.Fragment key={`${styles.skill}_${index}`}>
            <div className={styles.skillinfo}>
              <p>{item.skill}</p>
              <p className={styles.percentage}>{item.percentage}</p>
            </div>
            
            <div className={styles.skillprogressbg}>
              <div className={styles.skillprogress} style={{ width: item.percentage }}/>
            </div>
            </React.Fragment>
          ))}
        </div>
    </div>
  )
}

export default SkillInfoCard
