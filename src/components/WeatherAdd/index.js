import React from "react";
import cn from 'classnames';
import "./style.css"

export default class WeatherAdd extends React.PureComponent {

  state = {
    value: "",
    isOpen: false
  }

  handleChange = ({target: { value }}) => {
    this.setState({ value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  onClick = () => {
    this.setState(()=>{return { isOpen: !this.state.isOpen }});
  }

  render() {
    const { value, isOpen } = this.state;
    const form = 
      <form onSubmit={this.onSubmit}>
        <input value={this.state.value} onChange={this.handleChange} placeholder="Введите город" />
        <button disabled={!value}>Добавить</button>
      </form>;
    
    return (
      <div className="wrapper">
        <div className={cn('add', {'active': isOpen})} onClick={this.onClick} title="Добавить город">+</div>
        {isOpen && form}
      </div>
    );
  }
}