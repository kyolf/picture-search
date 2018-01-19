import React from 'react';

export class SearchBar extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(actions.searchForImages(this.textInput))
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <input type="text" placeholder="Search for image"
                ref={input => this.textInput = input}/>
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(SearchBar);
