import React from 'react'
import Training from '../Assets/Images/Stock-Training-min.jpg'
import GuysMeeting from '../Assets/Images/Men-Meeting-min.jpeg'

function EmploymentTraining() {
    return (
        <section className="program__vocational-training">
            <div className="program__vocational-training--training">
                <div className="program__vocational-training--training--desc">
                    <div className="program__vocational-training--training--desc--head">
                        <h2>CAREER AND VOCATIONAL TRAINING</h2>
                        <hr />
                    </div>
                    <p>At Elevate, our mission is to support members in creating a life of purpose and value. As our members work toward attaining autonomy, independence, and personal fulfillment, we encourage them to find meaningful work and career goals that support this endeavor. Knowing who you are, what you’re good at, what excites you, and how “you do you” is vital to that process.</p>
                    <p>For members of our community who want job skills support, we utilize a Career Explorer Aptitude and Assessment test to help members identify career paths based on interests, abilities, and personality. Our staff provides members with one-on-one mentoring, attention to detail, and a layer of accountability that helps build momentum and keep goals in focus throughout the process.</p>
                    <h4>ONLINE TESTING AND ANALYSIS PROVIDES INFORMATION MEMEBERS NEED TO:</h4>
                    <div>
                        <ul>
                            <li>Identify Personal Abilities, Interests, Values, Motivators & Exceptionalities</li>
                            <li>Identify Learning Styles, Work Styles, Strengths, and Deficits</li>
                            <li>Make Smart Education Decisions</li>
                            <li>Target the Right Career Path</li>
                            <li>Build a Resume of Relevant Accomplishments</li>
                            <li>Explore and Evaluate Careers Best Suited for Them</li>
                        </ul>
                    </div>
                </div>
                <img src={GuysMeeting} alt="Rock climbing" />
            </div>

            <div className="program__vocational-training--employment">
                <div className="program__vocational-training--employment--container">
                    <h1>EMPLOYMENT</h1>
                    <div className="mountain"></div>
                    <p>While at Elevate Recovery, all members are required to secure employment. Significant time and resources are devoted to this pursuit. It is our philosophy that work is one of the most therapeutic tools for adult men. Often, our members lack self-confidence in their abilities, have little to no work experience, and are naïve about the value of money and living costs. Most of our members have been supported and even enabled throughout their life by well-meaning family members and haven’t learned how to set up a bank account, pay bills, create a budget, or save for a future goal.</p>
                    <br />
                    <p>We believe that a healthy understanding and appreciation for money is an essential demonstration of maturity, gratitude, and responsibility. We help our members to instill a healthy relationship with money through financial literacy lessons and support working through economic challenges. </p>
                    <br/>
                    <p>Our members take advantage of the job opportunities and variety of jobs available to them. Some examples of jobs our members have secured: telemarketing, auto shop mechanic, arborist, bike shop mechanic, barista, grocery store, animal kennel/daycare, construction, and many more. We encourage members to find the job that’s right for them, even if that means they need to take a less than desirable position to start. For most members, the freedom and decreased supervision that comes when they secure employment is motivation enough to establish a full-time job.</p>
                </div>
                <div className="program__vocational-training--employment--lower">
                    <img src={Training} alt="Working in a meeting" />
                    <div className="program__vocational-training--employment--lower--desc">
                        <h4>LESSONS THROUGH EMPLOYMENT:</h4>
                        <ul>
                            <li>An understanding of exactly what it costs to live independently</li>
                            <li>What it takes to secure and sustain a good job</li>
                            <li>The pride and satisfaction that comes from hard work and completing a task</li>
                            <li>Respect for authority, bosses, and co-workers</li>
                            <li>Responsibility around attendance and timeliness</li>
                            <li>Increased confidence in dealing with people</li>
                            <li>How to choose and place value on perks and benefits</li>
                            <li>Understanding of the tax system and proper filing</li>
                            <li>Saving for something in the future – delayed gratification</li>
                            <li>Prioritizing and evaluating needs vs. wants</li>
                            <li>A deeper appreciation for education and academic pursuits</li>
                            <li>How to do things we don’t want to do with grace and respect</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmploymentTraining
