import {useEffect, useState} from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia, Checkbox,
    CircularProgress,
    Grid,
    Typography
} from "@mui/material";
import {Asset} from "../../types";
import {secondsToTime} from "../../utils/time.ts";
import {capitalizeFirstLetter} from "../../utils/chars.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectAsset, deselectAsset, selectSelectedAssets} from "../../features/screenings/screeningSlice.ts";
import Footer from "../../components/Footer/footer.tsx";

const SelectAssets = () => {
    const [assets, setAssets] = useState<Asset[]>([]);
    const dispatch = useAppDispatch();
    const selectedAssets = useAppSelector(selectSelectedAssets);

    const handleSelectAsset = (asset: Asset) => {
        const isSelected = selectedAssets.some(selected => selected.id === asset.id);
        if (isSelected) {
            dispatch(deselectAsset(asset.id));
        } else {
            dispatch(selectAsset(asset));
        }
    }

    useEffect(() => {
        fetch('/api/assets')
            .then(res => (res.ok ? res.json() : Promise.reject(res.statusText)))
            .then(assets => {
                setAssets(assets);
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    if (!assets.length) {
        return (<Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Typography variant="h2" sx={{mb: 3}}>
                    Loading assets...
                </Typography>
                <CircularProgress size={72} thickness={4} color="primary"/>
            </Box>
        );
    }

    return (
        <>
            <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
                {
                    selectedAssets.length ?
                        `${selectedAssets.length} asset${selectedAssets.length > 1 ? 's' : ''} ` :
                        'No assets '
                }
                selected
            </Typography>
            <Grid container spacing={2} sx={{mb: 5}}>
                {
                    assets.length && assets.map(asset => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={asset.id}>
                            <Card
                                sx={{
                                    border: `1px solid ${selectedAssets.some(selected => selected.id === asset.id) ? '#2d6ce1' : 'transparent'}`,
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleSelectAsset(asset)}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={asset.thumbnailUrl}
                                    alt={asset.title}
                                />
                                <CardContent
                                    sx={{
                                        backgroundColor: selectedAssets.some(selected => selected.id === asset.id) ? '#1b2541' : 'transparent'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            mb: 1
                                        }}>
                                        <Typography variant="h5" component="div">
                                            {asset.title}
                                        </Typography>
                                        <Checkbox
                                            checked={selectedAssets.some(selected => selected.id === asset.id)}
                                            onChange={() => handleSelectAsset(asset)}
                                            name={`${selectedAssets.some(selected => selected.id === asset.id) ? "Unselect" : "Select"} ${asset.title} ${asset.type}`}
                                        />
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
                                        {capitalizeFirstLetter(asset.type)} • {secondsToTime(asset.duration)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            <Footer
                nextButton={{
                    pathTo: "/screening/select-recipients",
                    disabled: !selectedAssets.length
                }}
            />
        </>
    );
}

export default SelectAssets;
