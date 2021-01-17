import React from 'react'

function Skills() {
    return (
        <div className='skills' id='skills_id'>
            <h4 className="portion_title">Skills : </h4>
            <div className='ml'>
                <ul>
                    <div>
                        <h5>ML Skills</h5>
                        <li className='skills_class'>python</li><li className='skills_class'>sklearn</li><li className='skills_class'>tensorflow</li> <li className='skills_class'>matplotlib</li>
                        <li className='skills_class'>seaborn</li><li className='skills_class'>keras</li><li className='skills_class'>data science</li><li className='skills_class'>deep learning</li>
                    </div>
                    <div>
                        <h5>Web Development Skills</h5>
                        <li className='skills_class'>html</li><li className='skills_class'>css</li><li className='skills_class'>javascript</li><li className='skills_class'>reactjs</li><li className='skills_class'>nodejs</li>
                        <li className='skills_class'>expressdotjs</li><li className='skills_class'>mongodb</li><li className='skills_class'>ajax</li><li className='skills_class'>jquery</li>{ /*<li className='skills_class'>django</li>*/}
                        <li className='skills_class'>bootstrap</li><li className='skills_class'>RestApi</li>
                    </div>
                    <div>
                        <li className='skills_class'>c</li><li className='skills_class'>c++</li><li className='skills_class'>java</li><li className='skills_class'>python</li><li className='skills_class'>c#</li>
                        <li className='skills_class'>asp.net</li><li className='skills_class'>oracle</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Skills;
