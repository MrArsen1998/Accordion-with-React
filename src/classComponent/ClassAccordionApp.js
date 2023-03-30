import { Component } from "react";
import Accordion from "./ClassAccordion";

class AccordionApp extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], flag: false };
    }
    componentDidMount() {
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
            .then(response => response.json())
            .then(result => this.setState(state => { return { data: result.data } }))
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                {data.map((item, index) => {
                    return <Accordion key={index} item={item} />
                })}
            </div>
        );
    }
}
export default AccordionApp;