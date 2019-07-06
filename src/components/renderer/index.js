import React from "react";
import SingleCharacter from "../character/SingleCharacter"


class Renderer extends React.Component {
    render() {
    return (
        <SingleCharacter {...this.props} />
    );
    }
}

export default Renderer