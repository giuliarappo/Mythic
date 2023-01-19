class MenuTendina extends Component {
    constructor(props) {
        super(props);
        this.state = { selecteOption: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selecteOption: event.target.value });
    }
    
    render() { 
        return (
            <div>
                <select onChange={this.handleChange}>
                <option></option>
                <option value="impossible">impossible</option>
                <option value="noWay">noWay</option>
                <option value="veryUnlikely">veryUnlikely</option>
                <option value="unlikey">unlikely</option>
                <option value="5050">50_50</option>
                <option value="somewhatLikely">somewhatLikely</option>
                <option value="likely">likely</option>
                <option value="veryLikely">veryLikely</option>
                <option value="nearSureThing">nearSureThing</option>
                <option value="aSureThing">aSureThing</option>
                <option value="hasToBe">hasToBe</option>
                </select>
                <h2>{this.state.selecteOption}</h2>
            </div>
            
        );
    }
}
 
export default MenuTendina;