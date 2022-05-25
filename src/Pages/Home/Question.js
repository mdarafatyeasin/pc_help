import React from 'react';
import { Accordion } from 'react-bootstrap';

const Question = () => {
    return (
        <div className='w-75 p-3 mx-auto'>
            <h2>Frequent Answer</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do you answer a warehouse interview question?</Accordion.Header>
                    <Accordion.Body>
                        You'll need to identify the traits that are most important for the warehouse role, be it problem-solving skills, speed, collaboration, attitude, or attention to detail. The candidate's answer to this question could indicate whether they're looking for a job or a career, along with other signs they'll be a good fit.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why should we hire warehouse?</Accordion.Header>
                    <Accordion.Body>
                        This is where you can show that you are confident in your value as a warehouse worker. I believe that my skills and experience make me a valuable asset to a warehouse environment like yours. I feel that I could work well in your team and provide a supportive and motivated energy to your company.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Question;