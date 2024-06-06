import React , {useState} from 'react';
import styles from './skill.module.css';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/skillCard';
import  SkillInfoCard  from './SkillInfoCard/skillInfoCard';
import Head from '../ui/Head/Head';

export const Skill = () => {

     const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

     const handleSelectSkill =(data) => {
      setSelectedSkill(data);
     };

  return (
    <section id ='skills'  className={styles.skillsclass}>
        <Head>Technical Proficiency</Head>
        <div className={styles.skillstop}>

        <div className={styles.skillscontainer}>
            <div className={styles.skills}>
                {SKILLS.map((item) => (
                    <SkillCard
                      key={item.title}
                      iconUrl={item.icon}
                      title={item.title}
                      isActive={selectedSkill.title === item.title}
                      onClick={() => {
                        handleSelectSkill(item);
                      }}
                    />
                ))}
            </div>
            <div className={styles.skillsinfo}>
              <SkillInfoCard
                 heading={selectedSkill.title}
                 skills={selectedSkill.skills}/>

            </div>
        </div>
        </div>

    </section>
  )
}
