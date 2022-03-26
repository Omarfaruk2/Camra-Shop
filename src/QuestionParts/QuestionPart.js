import React from 'react'
import { Accordion } from 'react-bootstrap'

const QuestionPart = () => {
    return (
        <div className='my-5 b-2 shadow p-3 mb-5 rounded'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5><b>How React Work....</b></h5></Accordion.Header>
                    <Accordion.Body>
                        React is a most popular library for Javascript.
                        React works <b>npx create-react-app</b> Pakage document and its run on React Application.Index.js file connected <b>"react-dom"</b> Library on stroe React Dom variable.React main component is "App Component".The main component Stored <b> SubComponents</b>.And return JSX(Sintactic Sugar).its look like Html but its a fake Html and its works in Curli backet"{ }".Jsx doesnot use mainaly jsvascript .Its helps <b>WebPake</b> third party Application and comvert into a bundle.js.<br></br>

                        React main base is Virtul Dom.React made virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.
                        React creact a <b>Virtual Dom</b> and compare to our <b>real Dom </b>.Its change everything on real dom .Its only change where Element change and ReRender Real don take form Virtual Dom which called <b>Algorithm Reconciliation</b>.This is <b>how react work</b>........
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5><b>Props Vs State</b></h5></Accordion.Header>
                    <Accordion.Body className='d-flex  justify-content-around'>
                        <div>
                            <h5>Props</h5>
                            <li>Props are read-only base...</li>
                            <li>Props can not be modified or change.</li>
                            <li>Props can be accessed by the child component.</li>
                            <li>Props make components reusable.</li>
                            <li>Props are external and controlled by whatever renders the component.</li>
                        </div>
                        <div>
                            <h5>State</h5>
                            <li>State is mutable.</li>
                            <li>state can be change by action or activity.</li>
                            <li>State cannot be accessed by child components.</li>
                            <li>State cannot make components reusable.</li>
                            <li>The State is internal and controlled by the React Component itself.</li>

                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default QuestionPart