import React , {useState} from 'react';
import './module.skill.css';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard';
import  SkillInfoCard  from './SkillInfoCard/SkillInfoCard';
import Head from '../ui/Head/Head';

export const Skill = () => {

     const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

     const handleSelectSkill =(data) => {
      setSelectedSkill(data);
     };

  return (
    <section id = 'skills'>
        <Head>Technical Proficiency</Head>
        <div className="skills-top">

        <div className="skills-container">
            <div className="skills">
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
            <div className="skills-info">
              <SkillInfoCard
                 heading={selectedSkill.title}
                 skills={selectedSkill.skills}/>

            </div>
        </div>
        </div>

    </section>
  )
}