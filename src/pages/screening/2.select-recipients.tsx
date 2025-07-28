import Footer from "../../components/Footer/footer.tsx";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useAppSelector} from "../../app/hooks.ts";
import {selectSelectedAssets} from "../../features/screenings/screeningSlice.ts";
import {capitalizeFirstLetter} from "../../utils/chars.ts";
import {secondsToTime} from "../../utils/time.ts";

const SelectRecipients = () => {
    const selectedAssets = useAppSelector(selectSelectedAssets);
    return (
        <>
            <Card>
                <CardContent sx={{backgroundColor: "#101018"}}>
                    <Typography variant="h4">
                        Select assets
                        <Typography variant="h4" component="span" color="text.secondary" ml={1}>
                            {selectedAssets.length}
                        </Typography>
                    </Typography>

                    <Grid container spacing={2} sx={{mb: 5}}>
                        {
                            selectedAssets.length && selectedAssets.map(asset => (
                                <Grid item key={asset.id}>
                                    <Card sx={{ display: 'flex', height: 100, width: 400}}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 120 }}
                                            image={asset.thumbnailUrl}
                                            alt={asset.title}
                                        />
                                        <CardContent sx={{ backgroundColor: "" }}>
                                            <Typography variant="h5" component="div">
                                                {asset.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {capitalizeFirstLetter(asset.type)} • {secondsToTime(asset.duration)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>
            <Footer
                previousButton={{pathTo: "/screening/select-assets"}}
                nextButton={{pathTo: "/screening/select-recipients"}}
            />
        </>
    );
}

export default SelectRecipients;
