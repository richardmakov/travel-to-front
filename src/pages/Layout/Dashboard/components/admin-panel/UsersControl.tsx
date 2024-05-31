import { Container, Grid, Typography } from '@mui/material'
import TableUsersView from './components/TableUsers/TableUsersView'
import useTableUsersViewModel from './components/TableUsers/view-model/useTableUsersViewModel'

export default function UsersControl() {

  const {users, loading, error} = useTableUsersViewModel()

  return (
    <>
      <Container>
            <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ mt: 6 }}>
                    <Typography variant="h4" sx={{ color: '#7F8C8D' }}>Users</Typography>
                    <TableUsersView users={users} loading={loading} error={error} />
                </Grid>
            </Grid>
        </Container>
    </>
  )
}
