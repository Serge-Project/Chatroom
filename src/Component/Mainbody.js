import React from 'react';
import "../Style/Mainbody.css"
import Loggedstatus from './Log/Loggedstatus'


class ErrorBoundary extends React.Component {
 
  state = {error: null};

  render() {
      if (!this.state.error) return this.props.children;
      else return <h1>Error!</h1>;
  }

  static getDerivedStateFromError(error) {
      return {error};
  }

}


function Mainbody() {

    return (
      <div className="Mainbody" >
          <Loggedstatus/>
      </div>
    );
  }
  
  export default Mainbody;