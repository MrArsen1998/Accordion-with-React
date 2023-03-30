import { Component } from "react";

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], flag: false };
    }
    componentDidMount() {
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
            .then(response => response.json())
            .then(result => this.setState(state => { return { data: result.data } }))
    }
    handleClick = () => {
        this.setState((state) => {
            return { flag: !state.flag }
        })
    }

    render() {
        const { flag } = this.state
        const data = this.state.data;
        return (
            <div>
                {data.map((item, index) => (

                    <div key={index} className="accordion-item">
                        <div className='main'>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <div className="accordion-title">
                                        <div className='title'>{item.name}</div>
                                        <button className='plus' onClick={this.handleClick}>+</button>
                                    </div>
                                    <div className={flag ? "active" : "accordion-content"}>{item.capital}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default Accordion;