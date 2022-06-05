import React,{Component} from 'react'

class Todo extends Component{

  constructor(props){
    super(props)
    this.state = {
      ListItem: '',
      items:[]
    }
  }

handleInputfieldChange = (event) =>{
      this.setState({
        ListItem:event.target.value 
      })
  }

addItem = ()=>{
      this.state.items.push(this.state.ListItem)
      this.setState({
        ListItem:'',
        items: [...this.state.items] 
      })
}

editItem = (index)=>{
      const editState = this.state.items[index];
      this.state.items.splice(index,1)
          
      this.setState({
        ListItem: editState
     })
}

deleteItem = (index)=>{
      alert('The Task will be permenantly deleted')
      this.state.items.splice(index,1)
      this.setState({
          items: [...this.state.items]
        })
}

resetList = ()=>{
    this.setState({
      ListItem:'',
      items:[]
    })
}

  render(){
    return(
      <div className='tododisplay'>
      <div>
        <form>
            <h1>Todo List</h1>
            <input type='text' value={this.state.ListItem}
            onChange={this.handleInputfieldChange}
            placeholder='ENTER YOUR TASKS'/ >
        </form>
        <button onClick ={this.addItem}> Add to List</button>
        </div>
        
        <div>
        { this.state.items.length > 0 ?
          <ul>
          {this.state.items.map((item,index)=> 
          <li key={index}> {item}
          <br/><button className='button' onClick={()=>this.editItem(index)}>Edit</button>
          <button className='button del' onClick={()=>this.deleteItem(index)}>Delete</button>
          </li>)}
          </ul> : " " }
        </div>
        <button onClick={this.resetList}> Reset List</button>
      </div>
    )
  }
}

export default Todo;