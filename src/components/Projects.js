import React from 'react'

function Projects() {
    return (
        <div className='projects' id='projects_id'>
            <h4 className="portion_title">Projects : </h4>
        {/* ml projects */}
            <div>
                <h4>prediction of epidemic outbreak using social media data</h4>
                <p>It is a research project in which i have to predict the situation of current date
                    based on the data of last 7 days. 
                    i used twitter for collecting the data with hashtags related to the epidemic.in project
                    i used hashtags related to covid19.
                    <p className="keywords">Keywords : twitterApi,sklearn, matplotlib, seaborn, nlp, python, data science, 
                    deep learning</p>
                </p>
            </div>
            <div>
                <h4>image clasification</h4>
                <p>In this project the dataset has images of 5 kinds of animals and the project takes images
                    as an input and giver prediction on the kind of animal the model assigns.
                    <p className="keywords">keywords : python, data science, tensorflow, keras, data augumentation, sklearn, 
                    deep learning, matplotlib, seaborn, plotly</p>                    
                </p>
            </div>
            <div>
                <h4>face detection using yolov3</h4>
                <p>In this, the model takes image or video as an input and makes boundary wherever the
                    face is detected by the model.
                    <p className="keywords">keywords : data science, opencv, deep learning</p>                    
                </p>
            </div>
        {/* languages project */}
            <div>
                <h4>online payment tutorial using java</h4>
                <p>In this project, the user can learn how to do online payments step by step with
                    the help of images programmed as per the payment method choosen by the user.
                    the home page has 2 options for login as user or admin, the user if already
                    registered can login and if not can register themself. the user can also send feedback
                    to the admin. the admin can see the list of users registered, the feedbacks given
                    by the user, delete a user.
                    files are used for storing the data of users registered and feedbacks given y the user.
                    <p className="keywords">keywords : java, netbeans</p>            
                </p>
            </div>

        {/* web development projects */}
            <div>
                <h4>food website</h4>
                <p>It is a single page food website in which the user can see the
                    facilities provided by the owner and have the contact page.
                    <p className="keywords">keywords : html, css, javascript, nodejs, expressdotjs,
                     mongodb</p>                    
                </p>                
            </div>
            <div>
                <h4>My portfolio</h4>
                <p>This is my portfolio website.It is a single page react based website.
                    <p className="keywords">keywords : Reactjs, html, css, bootstrap</p>
                </p>
            </div>

        {/* app development projects */}
            <div>
                <h4>todo app using react-native</h4>
                <p>It is a simple todo app, in which the user can delete or add a item to there
                    todo list.
                    <p className="keywords">keywords : react-native</p>                   
                </p>
            </div>

        {/* tools */}
            <div>
                <h4>Platforms :</h4>
                <h4>eclipse, Monodevelop, visual studio code, android studio, netbeans, anaconda, jupyter, google colab</h4>
            </div>
        </div>
    )
}

export default Projects
