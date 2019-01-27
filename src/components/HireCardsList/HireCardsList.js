import React,{Component} from "react";

import HireCard from "../HireCard/HireCard";
import "./HireCardsList.css";
import { getHireCards } from "./../../services/hire";
import { getText } from "./../../services/translation";

class HireCardsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { languageSelected } = this.props;
    return (
      <div className="row">
        {getHireCards().map((user, i) => {
          return (
            <HireCard
              key={i}
              id={user.id}
              className={user.className}
              text={getText(user.text, languageSelected)}
              title={getText(user.title, languageSelected)}
            />
          );
        })}
      </div>
    );
  }
}

export default HireCardsList;
