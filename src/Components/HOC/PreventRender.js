import React, {Component} from "react";

export const PreventRender = (ParentComponent) => {
    return class extends Component{
        constructor(props){
            super(props);
        }

        shouldComponentUpdate = (nextProps, nextState) => {
            if (JSON.stringify(this.props) !== JSON.stringify(nextProps)){
                return true;
            }

            return false;
        }

        render(){
            return <ParentComponent {...this.props} />
        }
    }
}