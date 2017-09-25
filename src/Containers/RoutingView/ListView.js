import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchColors } from '../../State/Actions/Colors';
import SwatchCard from '../../Components/SwatchCard';
import PaginatationNav from '../../Components/PaginationNav';
import LoadingGIF from '../../Images/loading.gif';

class ListView extends Component {
  state = {
    currentPageNumber: 1,
  };

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    this.props.fetchColors(this.state.currentPageNumber);
  }

  swatches = () => {
    var id = 0;
    console.log(this.props.listedColors);
    return this.props.listedColors.map(color => {
      id++;
      return (
        <Link key={id} to={`/hexcode/${color.hexcode}`}>
          <SwatchCard key={id} hexcode={`#${color.hexcode}`} />
        </Link>
      );
    })
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div className="router-view__contents" style={{ justifyContent: 'center' }}>
          <img src={LoadingGIF} alt="Spinning icon indicating that content is loading" />
        </div>
      );
    } else {
      return (
        <div className="router-view__contents list-view">
          <div className="list-view__swatch-container">
            {this.swatches()}
          </div>

          <PaginatationNav
            currentPageNumber={this.state.currentPageNumber}
            numberOfPages={10}
          />
        </div>
      );
    }
  };
}

function mapStateToProps (state) {
  return {
    isLoading: state.colors.isLoading,
    listedColors: state.colors.listedColors
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchColors
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

