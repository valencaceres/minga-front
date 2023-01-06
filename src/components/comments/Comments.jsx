import React,{useRef} from "react";
import './comments.css'
import axios from "axios";

/* const Listcomments = () => {
  const inputComment = useRef("")
    return (
      inputComment
    )
  }
 */
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
    let data = {
      "chapter_id": "63ac47d8b4db2f7baacad498",
      "user_id": "63ac47d8b4db2f7baacad498",
      "text":"" //Listcomments
  }
    axios.post(
      "http://localhost:8000/api/comments",//url del back
      data //objeto que required el back     
      )
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>        
        <div>
          {this.state.comments.map((comment, index) => (
            <>
            <div className="commentary">
              <div className="divComments">
                <img className="photoComment" src="https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg" alt=""/>
                <h3>Ignacio Borraz</h3>
              </div>
              <div className="commentContain">
            <p className="pComment" key={index}>{comment}</p>
              </div>
                <div className="commentfooter">
            <div  className="commentimgcom">
            <img className="imgconversacion" src="/assets/comment.png" alt="aa" />
            <p className="numComments">12</p>
            
            </div>
            <div className="a">
            <button className="butonComment">Reply
            </button>
            </div>
            <p className="pdate">12 min ago</p>
            <div>
            </div>
            </div>
            </div>
            </>
          ))}
        </div>
        
        <form onSubmit={this.handleSubmit}>
          <label>            
            <input type="text" /* ref={Listcomments}  */className="textareaComments"  minLength={1}
        maxLength={200} placeholder="Say something here..." value={this.state.comment} onChange={this.handleChange} />
          </label>
          <input className="inputComments" type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}


  
