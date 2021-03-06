import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';

`
[零件](https://material-ui.com/style/typography/#component)
`
const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

function Types() {
  return (
    <div style={styles.root}>
      <Typography variant="display4" gutterBottom>
        Display 4
      </Typography>
      <Typography variant="display3" gutterBottom>
        Display 3
      </Typography>
      <Typography variant="display2" gutterBottom>
        Display 2
      </Typography>
      <Typography variant="display1" gutterBottom>
        Display 1
      </Typography>
      <Typography variant="headline" gutterBottom>
        Headline
      </Typography>
      <Typography variant="title" gutterBottom>
        Title
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Subheading
      </Typography>
      <Typography variant="body2" gutterBottom>
        Body 2
      </Typography>
      <Typography variant="body1" gutterBottom align="right">
        Body 1
      </Typography>
      <Typography variant="caption" gutterBottom align="center">
        Caption
      </Typography>
      <Typography gutterBottom noWrap>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <Typography variant="button" gutterBottom>
        Button
      </Typography>
    </div>
  );
}

Types.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(Types);