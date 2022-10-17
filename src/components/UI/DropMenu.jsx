import { Drawer, List, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropMenu({ openMenu, closeMenu, list }) {
    const styles = {
        Box: {
            display: "flex",
            // flexDirection: "row",

            List: {
                width: "50%",

                Item: {
                    fontSize: "25px",
                    fontWeight: "540",
                    lineHeight: "40px",
                },
            },
            category: {
                width: "50%",
            },
        },
    };

    const [CategoryMenu, setCategoryMenu] = useState(false);
    return (
        <Drawer
            anchor="top"
            open={openMenu}
            onClose={closeMenu}
            sx={styles.Box}
        >
            <Box sx={styles.Box}>
                <List sx={styles.Box.List}>
                    {list.map((item) => (
                        <Link className="link" key={item.id} to={item.href}>
                            <MenuItem
                                onClick={closeMenu}
                                children={item.label}
                                sx={styles.Box.List.Item}
                            />
                        </Link>
                    ))}
                </List>
                <List sx={styles.Box.List}>
                    {list[1].category.map((item) => (
                        <Link className="link" key={item.id} to={item.href}>
                            <MenuItem
                                onClick={closeMenu}
                                children={item.category}
                            />
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default DropMenu;
