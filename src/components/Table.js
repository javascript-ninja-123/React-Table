import React,{Component} from 'react';
//this controls media query just like CSS media
//https://github.com/ReactTraining/react-media
import Media from "react-media"
import { Dropdown } from 'semantic-ui-react'
import './Table.css';
import TD from './Td'
import TH from './Th'
import {POLAR} from './Polar';




//this is an example. lets assume we get data from backend
const data = [
  {
    name:'Jiangyue Zhu',
    detail1:'100000',
    detail2:'200000',
    detail3:'400000'
  },
  {
    name:'Joe Seifi',
    detail1:'200000',
    detail2:'900000',
    detail3:'300000'
  },
  {
    name:'Jennifer Wong',
    detail1:'300000',
    detail2:'700000',
    detail3:'200000'
  },
  {
    name:'Vivien Yang',
    detail1:'400000',
    detail2:'200000',
    detail3:'100000'
  }
]

class TABLE extends Component {

  constructor(props){
  	super(props);
  	this.state = {title:'detail1'};
  }

  onChange = (e,data) => {
    this.setState({title:data.value})
  }

  renderPolorData = text => {
    const labels = data.map(value => value.name);
    const dataset = data.map(value => value[text]).map(value => parseInt(value))
    let optionData = Object.keys(data[0])
    optionData.splice(0,1)
    optionData = optionData.map(value => {
          return {
            key:value,
            value,
            text:value
          }
        })
    return (
      <div>
        <div className='wrapper'>
          <Dropdown
          placeholder={this.state.title}
          search
          fluid
          selection
          value={this.state.title}
          onChange={this.onChange}
          options={optionData} />
        </div>
        <POLAR labelData={labels} dataset={dataset}/>
      </div>
    )
  }


  choosePoloarData = () => {
    return this.renderPolorData(this.state.title);
  }

  renderThData = () => {
    const key = Object.keys(data[0]);
    return key.map((value,index) => {
      return(
        <div key={index}>{value}</div>
      )
    })
  }

    renderTdData = () => {
      return data.map((value,index) => {
        const {name,detail1,detail2,detail3} = value;
        return(
          <TD key={index}>
            <div>
              {name}
            </div>
            <div>
              {detail1}
            </div>
            <div>
              {detail2}
            </div>
            <div>
              {detail3}
            </div>
          </TD>
        )
      })
    }

    render() {
        return (
            <div className="TABLE">
            <Media
                query="(min-width: 750px)"
                render={() => {
                  return(
                    <div>
                    <TH>{this.renderThData()}</TH>
                    {this.renderTdData()}
                    </div>
                  )
                }}
              />
              <Media
                  query="(max-width: 749px)"
                  render={() => this.choosePoloarData()}
                />
            </div>
        );
    }
}

export default TABLE;
