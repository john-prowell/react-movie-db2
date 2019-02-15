import React, { Component } from 'react';
import HeroImage from '../HeroImage/HeroImage';
import { IMAGE_BASE_URL, IMAGE_BACKDROP_SIZE } from '../../../config/config';

class LandingPage extends Component {
  render() {
    return (
      <HeroImage
        image={`${IMAGE_BASE_URL}${IMAGE_BACKDROP_SIZE}${
          this.props.heroImage.backdrop_path
        }`}
        title={this.props.heroImage.original_title}
        text={this.props.heroImage.overview}
      />
    );
  }
}

export default LandingPage;
