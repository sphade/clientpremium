import React, { ReactNode } from 'react';
import { MouseEventHandler } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    IconButton,
    SlideProps,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { makeStyles } from '@mui/styles';

export interface BaseModalProps extends DialogProps {
    children: ReactNode;
    width: number;
    footer?: ReactNode;
    showCloseIcon?: boolean;
}

// Style declarations
const useStyles = makeStyles({
    paper: {
        borderRadius: 8,
        backgroundColor: '#f4f44',
        padding: '2.5rem 1.5rem',
        width: '100%',
        '@media screen and (min-width: 640px)': {
            padding: '2.5rem',
        },
        '@media screen and (max-width: 767px)': {
            maxWidth: 'calc(100% - 30px) !important',
        },
        margin: 10,
    },
    contentRoot: {
        padding: '0 !important',
        backgroundColor: 'transparent',
    },
    titleRoot: {
        padding: 0,
        backgroundColor: 'transparent',
        display: 'flex',
        marginTop: '-1.5rem',
        '&>button': { marginLeft: 'auto', padding: 5 },

        '@media screen and (min-width: 640px)': {
            marginTop: '-1rem',
        },
    },
});

const Transition = React.forwardRef<unknown, SlideProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

/** Base Modal component - Default */
const BaseModal = ({
    onClose,
    showCloseIcon = true,
    children,
    footer,
    ...rest
}: BaseModalProps): JSX.Element => {
    const classes = useStyles(); // construct styles

    return (
        <Dialog
            onClose={(event, reason) => {
                if (reason !== 'backdropClick' && onClose) {
                    onClose(event, reason);
                }
            }}
            maxWidth="md"
            disableEscapeKeyDown
            transitionDuration={600}
            scroll="body"
            TransitionComponent={Transition}
            keepMounted={false}
            TransitionProps={{ unmountOnExit: true }}
            {...rest}
            classes={{
                paper: classes.paper,
            }}
        >
            {showCloseIcon && (
                <DialogTitle
                    classes={{
                        root: classes.titleRoot,
                    }}
                >
                    <IconButton
                        aria-label="Close Modal"
                        title="Close Modal"
                        onClick={onClose as MouseEventHandler}
                        edge="end"
                        disableRipple
                    >
                        <p>Cancel</p>
                    </IconButton>
                </DialogTitle>
            )}
            <DialogContent
                className="space-y-3"
                classes={{
                    root: classes.contentRoot,
                }}
            >
                {children}
            </DialogContent>
            {footer && <DialogActions>{footer}</DialogActions>}
        </Dialog>
    );
};

export default BaseModal;
