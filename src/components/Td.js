import React,{Component} from 'react';
import './Td.css'

class TD extends Component {

    render() {
        return (
            <div className="TD">
                {this.props.children}
            </div>
        );
    }
}

export default TD;
