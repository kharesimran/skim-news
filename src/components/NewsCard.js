import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar, Chip, withStyles} from "@material-ui/core";
import {Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import bullishIcon from '../assets/bullish-icon.png'
import barclaysLogo from '../assets/barclays-logo.png'
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledChip = withStyles({
    label: {
        fontSize: '10px',
        color: "dimgrey"
    },
    avatar: {
        fontSize: '10px',
    },
})(Chip);

export default function NewsCard() {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography sx={{fontSize: 10}} mt={1} align="left" color="text.secondary" gutterBottom>
                            4:00 pm, 23rd Sep 21
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Stack direction="row" justifyContent="flex-end" spacing={0.5}>
                            <StyledChip label="Industry" variant="outlined" size="small" color="info"
                                        avatar={<Avatar>I</Avatar>}/>
                            <StyledChip label="Stock" variant="outlined" size="small" color="success"
                                        avatar={<Avatar>S</Avatar>}/>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={11} sx={{textAlign: 'left'}}>
                        <Typography sx={{fontSize: 12}} component="span">
                            Barclays Securities picks 0.64% stake in Vishal Fabrics
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{textAlign: 'right'}}>
                        <Avatar alt="Barclays" src={barclaysLogo}/>
                    </Grid>
                </Grid>
                <Typography sx={{fontSize: 10}} align="left" variant="body2" marginTop={2}>
                    This is a short description of this news. It is expected to be 1 - 2 lines in general. To view more,
                    we will expand this card.
                </Typography>
            </CardContent>
            <Grid container justifyContent="space-around" alignItems="baseline">
                <Grid item xs={4} sx={{textAlign: 'left'}}>
                    <img alt="Bullish" src={bullishIcon} width="25" height="25" style={{marginLeft: 7, marginBottom: -5}}/>
                </Grid>
                <Grid item xs={4} sx={{textAlign: 'center'}}>
                    <IconButton>
                        <ExpandMoreIcon sx={{fontSize: 20}}/>
                    </IconButton>
                </Grid>
                <Grid item xs={4} sx={{textAlign: 'right'}}>
                    <IconButton>
                        <ShareIcon sx={{fontSize: 20}}/>
                    </IconButton>
                    <IconButton>
                        <ThumbUpIcon sx={{fontSize: 20}}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )
        ;
}