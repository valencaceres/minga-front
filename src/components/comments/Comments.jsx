import React from "react";
import './comments.css'


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
        <form onSubmit={this.handleSubmit}>
          <label>
            Comentario:
            <input className="textareaComments" placeholder="Say something here..." value={this.state.comment} onChange={this.handleChange} />
          </label>
          <input className="inputComments" type="submit" value="Enviar" />
        </form>
        <div >
          {this.state.comments.map((comment, index) => (
            <>
            <div className="commentary">
              <div className="divComments">
                <img className="photoComment" src="https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg" alt=""/>
                <h3>Ignacio Borraz</h3>
              </div>
            <p className="pComment" key={index}>{comment}</p>
                <div className="commentfooter">
            <div  className="commentimgcom">
            <img className="imgconversacion" src="/assets/comment.png" alt="aa" />
            <p>12</p>
            
            </div>
            <div>
            <button className="butonComment">Reply</button>
            </div>
            <p className="pdate">12 min ago</p>
            <div>
            </div>
            </div>
            </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}