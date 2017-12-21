import React,{Component} from 'react';
import './Th.css';

class TH extends Component {
    render() {
        return (
            <div className="TH">
              {this.props.children}
            </div>
        );
    }
}

export default TH;
