
import { Component } from "react";
import style from "./Filter.module.css"
class Filter extends Component {

  
  
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
          <p className={style.title}>Find contacts by name</p>
          <input
            type="text"
            name="filter" 
            value={value}
            onChange={onChange} 
            
          />
        </div>
    );
  }
}

export default Filter;
