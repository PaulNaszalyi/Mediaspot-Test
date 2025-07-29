import {useAppSelector} from "../../app/hooks.ts";
import {selectSelectedAssets} from "../../features/screenings/screeningSlice.ts";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {capitalizeFirstLetter} from "../../utils/chars.ts";
import {secondsToTime} from "../../utils/time.ts";

const SelectedAssets = () => {
    const selectedAssets = useAppSelector(selectSelectedAssets);
    return (
        <>
            <Typography variant="h4" sx={{mb: 2}}>
                Selected assets
                <Typography variant="h4" component="span" color="text.secondary" ml={1}>
                    {selectedAssets.length}
                </Typography>
            </Typography>

            <Grid container spacing={2} sx={{mb: 5}}>
                {
                    selectedAssets.length && selectedAssets.map(asset => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={asset.id}>
                            <Card sx={{display: 'flex', height: 80}}>
                                <CardMedia
                                    component="img"
                                    sx={{width: 120}}
                                    image={asset.thumbnailUrl}
                                    alt={asset.title}
                                />
                                <CardContent sx={{backgroundColor: ""}} aria-label={asset.title}>
                                    <Typography variant="h5" component="div" sx={{fontSize: "16px"}}>
                                        {asset.title.length > 18 ? asset.title.slice(0, 18) + '...' : asset.title}
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
        </>
    )
}

export default SelectedAssets;
