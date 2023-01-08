import {Box, Button, TextField, Typography} from "@mui/material";

const Form = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{ padding: '0 80px' }}>
                <Typography variant="h1" sx={{ color: '#000', fontSize: '30px', paddingBottom: '50px' }}>LOGIN FORM</Typography>
                <TextField size={'medium'} sx={{ marginBottom: '30px' }} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <TextField size={'medium'} sx={{ marginBottom: '30px' }} fullWidth id="outlined-basic" label="Password" type="password" variant="outlined" />
                <Button variant="contained">Login</Button>
            </div>
        </Box>
    )
}

export default Form;