import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import ButtonArrow from './ui/ButtonArrow';

import mobileBackground from '../assets/mobileBackground.jpg';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [message, setMessage] = useState('');
    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    setEmailHelper("Invalid email.")
                } else {
                    setEmailHelper("")
                }
                break;

            case 'phone':
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);   
                if (!valid) {
                    setPhoneHelper("Invalid phone.")
                } else {
                    setPhoneHelper("")
                }
                break;

            default:
                break;
        }
    }

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="row">
           <Grid 
            item 
            container 
            direction="column" 
            justify="center" 
            alignItems="center" 
            lg={4} 
            xl={3} 
            style={{marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ? "1.0em" : matchesMD ? "5em" : 0, }}
          >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: theme.palette.common.blue}}>We're waiting.</Typography>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>(555) 555-5555</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: "2em"}}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign: "bottom"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>zachary@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: "20em"}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField fullWidth label="Name" id="name" value={name} onChange={event => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField fullWidth error={emailHelper.length !== 0} helperText={emailHelper} label="Email" id="email" value={email} onChange={onChange} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField fullWidth error={phoneHelper.length !== 0} helperText={phoneHelper} label="Phone" id="phone" value={phone} onChange={onChange} />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: "20em"}}>
                            <TextField fullWidth multiline InputProps={{ disableUnderline: true }} className={classes.message} rows={10} id="message" value={message} onChange={event => setMessage(event.target.value)} />
                        </Grid>
                        <Grid item container justify="center" style={{marginTop: "2em"}}>
                            <Button variant="contained" className={classes.sendButton}>Send Message
                                <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
           <Grid item container direction={matchesMD ? "column" : "row"} className={classes.background} alignItems="center" justify={matchesMD ? "center" : undefined} lg={8} xl={9}>
                <Grid item style={{marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={ matchesMD ? "center" : undefined } variant="h2">
                                Simple Software.<br />Revolutionary Results.
                            </Typography>
                            <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>
                                Take advantage of the 21st Century.
                            </Typography>
                            <Grid container justify={matchesMD ? "center" : undefined} item>
                                <Button onClick={() => props.setValue(2)} component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
                                    <span style={{marginRight: 5}}>Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton}>
                        Free Estimate
                    </Button>
                </Grid>
           </Grid>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));