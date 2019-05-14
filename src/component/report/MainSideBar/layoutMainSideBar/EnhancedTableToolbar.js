import React, { Component } from 'react'
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import RefreshIcon from '@material-ui/icons/Refresh';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {actionOpenSearch} from '../../../../redux/actions/searchTimeAction'
const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});
class EnhancedTableToolbar extends Component {
    render() {
        const { numSelected, classes } = this.props;

        return (
            <Toolbar
                className={classNames(classes.root, {
                    [classes.highlight]: numSelected > 0,
                })}
            >
                <div className={classes.title}>
                    {numSelected > 0 ? (
                        <Typography color="inherit" variant="subtitle1">
                            {numSelected} selected
                  </Typography>
                    ) : (
                            <Typography variant="h6" id="tableTitle">
                                REPORT DATA
                  </Typography>
                        )}
                </div>
                <div className={classes.spacer} />
                <div className={classes.actions}>

                    <Tooltip title="OPEN SEARCH">
                        <IconButton onClick={this.props.actionOpenSearch} aria-label="Search">
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>

                </div>
            </Toolbar>
        );
    }
}
EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionOpenSearch: () => {
            dispatch(actionOpenSearch())
        }
    }
}
export default connect(null,mapDispatchToProps)(withStyles(toolbarStyles)(EnhancedTableToolbar));