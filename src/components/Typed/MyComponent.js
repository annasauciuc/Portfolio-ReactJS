import React,{ Component } from 'react';


import Typed from 'react-typed';
 
class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed 
                    strings={["Hi ! ",
                "Hi ! <br>I'm <strong>Ana Maria</strong> "]} 
                    typeSpeed={40} 
                    backDelay={900} 
                />
                <br/>
 
              
               
            </div>
        );
    }
}

    export default MyComponent;