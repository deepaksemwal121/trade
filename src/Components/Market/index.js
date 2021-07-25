import "./Market.css";
import TextField from "@material-ui/core/TextField";
import MarketCompanyList from "../MarketCompanyList";

const Market = () => {
  const text__field = {
    padding: "10px",
    borderColor: "white",
    backgroundColor: "transparent",
    margin: "10px",
    color: "white",
    borderRadius: "5px",
    border: "1px solid white",
  };
  return (
    <div className="main__container">
      <div className="left__section">
        <div className="list__section">
          <div className="list__header">
            <h3>Market</h3>
            <form>
              <input
                type="text"
                style={text__field}
                placeholder="Search Market"
              ></input>
            </form>
          </div>
          <MarketCompanyList />
        </div>
      </div>
      <div className="main__section">Main</div>
      <div className="right__section">Right</div>
    </div>
  );
};

export default Market;
