import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchColors } from '../../State/Actions/Colors';
import SwatchCard from '../../Components/SwatchCard';
import PaginatationNav from '../PaginationNav';
import LoadingGIF from '../../Images/loading.gif';

class ListView extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchColors(this.parsePageNumber(this.props.match.url));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchColors(this.parsePageNumber(nextProps.match.url));
    }
  }

  swatches = () => {
    return this.props.listedColors.map(color => {
      return (
        <Link key={color.hexcode} to={{ pathname: `/hexcode/${color.hexcode}`, state: { shades: color.shades } }}>
          <SwatchCard key={color.hexcode} hexcode={`#${color.hexcode}`} />
        </Link>
      );
    })
  };

  parsePageNumber = (urlParam) => {
    let pageNumber = parseInt(urlParam.slice(1), 10);

    // Prevent NaN issues
    return pageNumber !== pageNumber ? 1 : pageNumber; // eslint-disable-line
  }

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
            currentPageNumber={this.parsePageNumber(this.props.match.url)}
            numberOfPages={50}
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

