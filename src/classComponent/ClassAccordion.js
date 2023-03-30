import { Component } from "react";

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], flag: false };
    }

    handleClick = () => {
        this.setState((state) => {
            return { flag: !state.flag }
        })
    }
    render() {
        const { flag } = this.state
        const { name, capital } = this.props.item
        return (
            <div className='main'>
                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-title">
                            <div className='title'>{name}</div>
                            <button className='plus' onClick={this.handleClick}>+</button>
                        </div>
                        <div className={flag ? "active" : "accordion-content"}>{capital}</div>
                    </div>
                </div>
            </div>
        )
    }
} export default Accordion;