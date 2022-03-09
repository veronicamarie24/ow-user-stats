import UserStats from "./components/UserStats";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div>
      <Typography variant="h2" component="div" gutterBottom>
        Overwatch User Stats
      </Typography>
      <UserStats />
    </div>
  );
};

export default App;
