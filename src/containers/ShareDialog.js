import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// SNS用シェアボタン
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TumblrShareButton,

    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    TumblrIcon
} from 'react-share';

// クリップボードにコピー
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';


// スタイル
const styles = theme => ({
    root: {
    },
    snsShareButtonArea: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-around',
    },
    snsShareButton: {
    },
    copyToCripboardButton: {

    },
});

class ShareDialog extends React.Component {
    render() {

        const { actions } = this.props;

        const { classes } = this.props;

        const shareUrl = "http://animel.f-arts.work";
        const title = "アニメ何見る？";

        return (
            <Dialog
                open={this.props.open}
                onClose={() => this.props.onClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.root}
            >
                <DialogTitle>Animelをシェアする</DialogTitle>
                <Divider />
                <DialogContent className={classes.snsShareButtonArea}>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className={classes.snsShareButton}>
                        <FacebookIcon
                            size={48}
                            round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className={classes.snsShareButton}>
                        <TwitterIcon
                            size={48}
                            round />
                    </TwitterShareButton>
                </DialogContent>
                <DialogContent className={classes.snsShareButtonArea}>
                    <LinkedinShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={750}
                        windowHeight={600}
                        className={classes.snsShareButton}>
                        <LinkedinIcon
                            size={48}
                            round />
                    </LinkedinShareButton>
                    <TumblrShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={660}
                        windowHeight={460}
                        className={classes.snsShareButton}>
                        <TumblrIcon
                            size={48}
                            round />
                    </TumblrShareButton>
                </DialogContent>
                <DialogContent className={classes.snsShareButtonArea}>
                    <CopyToClipboard text={shareUrl}
                        onCopy={() => actions.setNotification('success', 'クリップボードにコピーしました')}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.copyToCripboardButton}
                        >
                            URLをコピー
            </Button>
                    </CopyToClipboard>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={() => this.props.onClose()} color="primary" autoFocus>
                        閉じる
          </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

// Material-ui関連
ShareDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
    withStyles(styles, { withTheme: true })(ShareDialog)
);