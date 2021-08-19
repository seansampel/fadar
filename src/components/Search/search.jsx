import React from 'react';
import { Autocomplete } from "@react-google-maps/api";
import { Typography, Box, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

import useStyles from './styles';

const SearchBar = () => {
      const classes = useStyles();

  return(
    <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
              Fadar
            </Typography>
        <Box >
            <Typography variant="h6" className={classes.title}>
              Explore barbers
            </Typography>
        {/* <Autocomplete>
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                    <InputBase placeholder="Search..." />
              </div>
              </Autocomplete> */}
          </Box>
    </Toolbar>
  )
}

export default SearchBar;