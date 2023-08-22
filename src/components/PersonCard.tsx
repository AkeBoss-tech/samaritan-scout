import { Box, Card, Grid, Typography } from "@mui/material";

interface PersonCardProps {
    type: string;
    job?: string;
    name?: string;
    image?: string;
    link?: string;
}

export default function PersonCard({ type, job="", name="", image="", link }: PersonCardProps) {
    if(type === "boardMember") {
        return (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} justifyContent="center" alignItems="center" textAlign="center">
                <a href={"https://www." + link}>
                    <Card sx={{textDecoration: "none"}}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                            <img src={"/images/" + image}  alt="Avatar" style={{ maxHeight: "80%" }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, textDecoration: "none !important"}} style={{}}>
                            <Typography  variant="h5" component="div">
                                {name}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:'25px' }}>
                            <Typography variant="body2" color="text.secondary">
                                {job}
                            </Typography>
                        </Box>
                    </Card>
                </a>
            </Grid>
        )
    } else if(type === "volunteer") {
        return (
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} justifyContent="center" alignItems="center" textAlign="center">
                <a href={"https://www." + link}>
                    <Card sx={{height: "50%"}}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
                            <img src={"/images/" + image} alt="Avatar" style={{ maxHeight: "80%" }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0}} style={{}}>
                            <Typography  variant="h6" component="div">
                                {name}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:'25px' }}>
                            <Typography variant="body2" color="text.secondary">
                                {job}
                            </Typography>
                        </Box>
                    </Card>
                </a>
            </Grid>
        )
    } else {
        return (
            <div>Error no type</div>
        )
    }
}