import { Fragment } from "react";

const Resume = () => {
    const educationData = [
        {
            id:1,
            title: "BSc in Computer Science",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id:2,
            title: "BSc in Computer Science",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id:3,
            title: "BSc in Computer Science",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        }
    ]
    const softSkillsData = [
        {
            id:1,
            title: "UI/UX Design",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id:2,
            title: "Web Developer",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id:3,
            title: "App Development",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        }
    ]
    const experienceData = [
        {
            id:1,
            title: "Web Developer & Trainer",
            institute: "University of ULAV (2018 - 2022)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id:2,
            title: "Front-end Developer",
            institute: "Brane - (2020 - 2011)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        },
        {
            id:3,
            title: "UI/UX Designer",
            institute: "Google Out Tech - (2017 - Present)",
            details: "Hen our power of choice is untrammelled and when nothing prevents our being able"
        }
    ]
    return (
        <Fragment>
            <section id="resume">
            <div className="container">
                <p className="sectionSubTitle">My Resume</p>
                <h2 className="sectionTitle">10+ YEARS OF EXPERIENCE</h2>
                <h3 className="resumeTitle">Education</h3>
                <div className="dFlex">
                    {
                        educationData.map((item)=>(
                            <div className="resumeCard" key={item.id}>
                                <div className="resumeCardHead">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="resumeCardBody">
                                    <h4>{item.institute}</h4>
                                    <p>{item.details}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="resumeCard">
                        <div className="resumeCardHead">
                            <h4>BSc in Computer Science</h4>
                        </div>
                        <div className="resumeCardBody">
                            <h4>University of ULAV (2018 - 2022)</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="resumeCard">
                        <div className="resumeCardHead">
                            <h4>BSc in Computer Science</h4>
                        </div>
                        <div className="resumeCardBody">
                            <h4>University of ULAV (2018 - 2022)</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div>
                    <div className="resumeCard">
                        <div className="resumeCardHead">
                            <h4>BSc in Computer Science</h4>
                        </div>
                        <div className="resumeCardBody">
                            <h4>University of ULAV (2018 - 2022)</h4>
                            <p>
                                Hen our power of choice is untrammelled and when nothing prevents our being able
                            </p>
                        </div>
                    </div> */}
                </div>
                <h3 className="resumeTitle">Software Skills</h3>
                <div className="dFlex">
                    {
                        softSkillsData.map((item)=>(
                            <div className="resumeCard" key={item.id}>
                                <div className="resumeCardHead">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="resumeCardBody">
                                    <h4>{item.institute}</h4>
                                    <p>{item.details}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h3 className="resumeTitle">Experience</h3>
                <div className="dFlex">
                    {
                        experienceData.map((item)=>(
                            <div className="resumeCard" key={item.id}>
                                <div className="resumeCardHead">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="resumeCardBody">
                                    <h4>{item.institute}</h4>
                                    <p>{item.details}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </section>
        </Fragment>
    );
};

export default Resume;