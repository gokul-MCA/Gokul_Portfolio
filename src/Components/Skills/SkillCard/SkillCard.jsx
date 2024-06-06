import React from 'react';
import styles from './skillCard.module.css';

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return (
    <div className={`${styles['skillscard']} ${isActive ? styles['active']:''}`}
    onClick={() => onClick()}
    >
        <div className={styles.skillsicon}>
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>

    </div>
  )
}

export default SkillCard;