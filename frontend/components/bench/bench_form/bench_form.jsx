import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      description: '',
      seating: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value,
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const bench = this.state;

    this.props.createBench(bench);
    this.setState({
      lat: '',
      lng: '',
      description: '',
      seating: '',
    });
    this.props.history.push('/');
  }

  render() {
    const { lat, lng, description, seating } = this.state;
    const disabled = true;
    return (
      <div className="bench-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            latitude:
            <input
              disabled={disabled}
              type="text"
              value={lat}
              onChange={this.handleChange('lat')}
            />
          </label>
          <br />
          <label>
            longitude:
            <input
              disabled={disabled}
              type="text"
              value={lng}
              onChange={this.handleChange('lng')}
            />
          </label>
          <br />
          <label>
            description:
            <input
              type="text"
              value={description}
              onChange={this.handleChange('description')}
            />
          </label>
          <br />
          <label>
            seating:
            <input 
              type="number"
              min="1"
              max="20"
              value={seating}
              onChange={this.handleChange('seating')}
            />
          </label>
          <br />
          <button type="submit">Create Bench</button>
        </form>
      </div>
    );
  }
}

export default BenchForm;
