import { MoreVert, Title } from "@mui/icons-material";
import { Box, Divider, IconButton, ListItem, Typography } from "@mui/material";
import React from "react";
import { Counter } from "./UI/Counter";

const styles = {
    Box: {
        height: '100px',
        margin: '24px 0',
        Body: {
            display: 'flex',
            justifyContent: 'space-between',
            Body: {
                display: 'flex',
                gap: '20px',
                Img: {
                    borderRadius: '10px',
                    width: '90px',
                    height: '90px',
                }
            },
        },
        Title: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            mt: '-35px',
            gap: '20px',
            mb: '15px'
        },
        Divider: { bgcolor: 'black' },
    },

}



function BasketItem() {

    return (
        <Box sx={styles.Box}>
            <Box sx={styles.Box.Body}>
                <Box sx={styles.Box.Body.Body}>
                    <img style={styles.Box.Body.Body.Img}
                        alt=''
                        src="https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/159265655_3843698749082372_7781602593632349880_n.jpg?stp=dst-jpg_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=k35yR-Ef0mcAX8GXRFS&_nc_ht=scontent-iev1-1.xx&oh=00_AT9M0VmJ0w653_YUbfC17mhB4XIyil9gDL0SGIGcVVbW8A&oe=635CE2A6"
                    />
                    <Typography children={'Макарон із солоною карамеллю '} />
                </Box>
                <Box>
                    <IconButton children={<MoreVert />} />
                </Box>
            </Box>
            <Box sx={styles.Box.Title}>
                <Counter Number={'1'} />
                <Typography variant="h6" children={'500грн'} />
            </Box>
            <Divider sx={styles.Box.Divider} />
        </Box>
    );
}

export default BasketItem;
