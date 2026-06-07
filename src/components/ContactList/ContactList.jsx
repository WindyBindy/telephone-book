
import { Component } from "react";
import style from "./ContactList.module.css"
class ContactList extends Component {

  
  
  render() {
    const { list, handleDelete } = this.props;

    return (
      <ul>
          {list.map(({ id, name, number }) => (
            <li key={id} className={style.item}>{name}: {number} <button type="button"className={style.deleteBtn} onClick={() => {handleDelete(id)}}>delete</button></li>
          ))}
        </ul>
    );
  }
}

export default ContactList;
