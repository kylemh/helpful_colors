import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchColors, fetchColorsFromName } from '../../State/Actions/Colors';
import SwatchCard from '../../Components/SwatchCard';
import PaginatationNav from '../PaginationNav';
import LoadingGIF from '../../Images/loading.gif';

class ListView extends Component {
  state = {
    isPaginatedView: true,
  }

  componentDidMount() {
    // Check URL to decide on how to initially populate list view
    if (this.props.match.url.includes('color')) {
      this.setState({ isPaginatedView: false });
      this.props.fetchColorsFromName(this.props.match.params.color);
    } else {
      this.setState({ isPaginatedView: true });
      this.props.fetchColors(this.parsePageNumber(this.props.match.url));
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.color) {  // ListView by color name

      if (this.props.match.params.color !== prevProps.match.params.color) {

        // fetch data for new color
        this.setState({ isPaginatedView: false });
        this.props.fetchColorsFromName(this.props.match.params.color);
      }
    } else { // ListView by page
      if(this.props.match.url !== prevProps.match.url) {

        // fetch data for some page
         this.setState({ isPaginatedView: true });
         this.props.fetchColors(this.parsePageNumber(this.props.match.url));
      }
    }
  }

  swatches = () => {
    if (this.state.isPaginatedView) {
      return this.props.listedColors.map(color => {
        return (
          <Link
            key={color.hexcode}
            to={{
              pathname: `/hexcode/${color.hexcode}`,
              state: { shades: color.shades }
            }}>
            <SwatchCard key={color.hexcode} hexcode={`#${color.hexcode}`} />
          </Link>
        );
      })
    } else if (!this.state.isPaginatedView) {
      // List Swatches of Color
      return this.props.colorsOfName.map(hexcode => {
        return (
          <Link
            key={hexcode}
            to={{
              pathname: `/hexcode/${hexcode}`,
              state: { shades: {} }
            }}>
            <SwatchCard key={hexcode} hexcode={`#${hexcode}`} />
          </Link>
        );
      })
    }
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
    } else if (this.state.isPaginatedView && !this.props.isLoading) {
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
    } else {
      return (
        <div className="router-view__contents list-view">
          <div className="list-view__swatch-container">
            {this.swatches()}
          </div>
        </div>
      );
    }
  };
}

function mapStateToProps (state) {
  return {
    isLoading: state.colors.isLoading,
    listedColors: state.colors.listedColors,
    colorsOfName: state.colors.colorsOfName,
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchColors,
    fetchColorsFromName
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

