import React,{useState, useRef} from "react";
import './comments.css'
import axios from "axios";












 /*   *//* 


export default class Comments extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.comment],
      comment: ''
    });
    
  }

  render() {
    return (
      <div>        
        <div>
          {this.state.comments.map((comment, index) => (
            <>
            <div >
             
                <div >
           
            <div className="a">
           
            </div>
            
            <div>
            </div>
            </div>
            </div>
            </>
          ))}
        </div>
        
        <form onSubmit={this.handleSubmit}>
          <label>            
            <input type="text" // ref={Listcomments}      value={this.state.comment} onChange={this.handleChange} />
          </label>
          <input  type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}


   */


export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }
  const inputComment = useRef("")
  let data = {
    "chapter_id": "63ac47d8b4db2f7baacad498",
    "user_id": "63ac47d8b4db2f7baacad498",
    "text": inputComment
}
  axios.post(
    "http://localhost:8000/api/comments",//url del back
    data //objeto que required el back     
    )
    .catch(err => {
      console.log(err)
    })
  return (
    <div>
      
        {comments.map(comment => (
          <div className="commentary" >
             <div className="divComments">
                <img className="photoComment" src="https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg" alt=""/>
                <h3>Ignacio Borraz</h3>
              </div>

          <p className="pComment" key={comment}>{comment}</p>
          <div className="commentfooter">
            <div  className="commentimgcom">
            <img className="imgconversacion" src="/assets/comment.png" alt="aa" />
            <p className="numComments">12</p> 
            <button className="butonComment">Reply &nbsp;&nbsp;&nbsp;&nbsp;             
            </button> 
            <img className="lapiz" src="/assets/lapiz.png" alt="Texto alternativo"/>          
            </div>
            
            <p className="pdate">12 min ago</p>
          </div>
          </div>
        ))}

      <form onSubmit={handleSubmit}>
        <input className="textareaComments"
        placeholder="Say something here..."
        minLength={2}
        maxLength={200}
          type="text"
          ref={inputComment}
          value={newComment}
      
          onChange={event => setNewComment(event.target.value)}
        />
        <button className="inputComments" type="submit"></button>
        <img  className="send" src="/assets/enviar.png" alt="" />
      </form>
    </div>
  );
}