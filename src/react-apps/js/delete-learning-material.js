class   DeleteLearningMaterial extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            Value: '',
        };
        this.handleChange  = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.name === "isGoing" ? this.checked : target.Value;
        const name = target.name; 
        this.setState ({
            [name] : value
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" readonly value={this.state.value} />
                </label>
                <lable>
                    Description:
                    <textarea  readonly value={this.state.value} />
                </lable>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}