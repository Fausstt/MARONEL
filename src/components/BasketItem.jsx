import { MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";



function BasketItem() {
    return (
        <Box sx={{
            height: '130px',
            mt: 3,
        }}>
            <Box sx={{ display: 'flex', height: '65%', }}>
                <Box sx={{
                    width: '15%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        width: '80%',
                        height: '80%',
                    }}
                        alt=''
                        src="https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/159265655_3843698749082372_7781602593632349880_n.jpg?stp=dst-jpg_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=k35yR-Ef0mcAX8GXRFS&_nc_ht=scontent-iev1-1.xx&oh=00_AT9M0VmJ0w653_YUbfC17mhB4XIyil9gDL0SGIGcVVbW8A&oe=635CE2A6" />
                </Box>
                <Box sx={{ width: '80%', padding: 2 }}>
                    Макарон із солоною карамеллю
                </Box>
                <Box sx={{ width: '5%' }}>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ height: '35%', border: '1px solid' }}>

            </Box>
        </Box>
    );
}

export default BasketItem;
