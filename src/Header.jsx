import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

const MAG_OPTIONS = ["1.0", "2.5", "4.5", "5.0", "significant"];
const PERIOD_OPTIONS = ["hour", "day", "week", "month"];

export const Header = ({ setMagnitude, setPeriod }) => (
  <div className="header">
    <header>
      <Typography
        sx={{ backgroundColor: "#eee333", color: "black", textAlign: "center" }}
        variant="h4"
      >
        IGEO Erdbebenmonitor
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonGroup variant="contained" aria-label="Magnitude">
          {MAG_OPTIONS.map((mag) => (
            <Button key={mag} onClick={() => setMagnitude(mag)}>
              {mag}
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup variant="contained" aria-label="Zeitraum">
          {PERIOD_OPTIONS.map((p) => (
            <Button key={p} onClick={() => setPeriod(p)}>
              {p}
            </Button>
          ))}
        </ButtonGroup>
        {/* Platziere die MUI-ButtonGroups an dieser Stelle und importiere die benötigten MUI-Komponenten in Zeile 1 */}
      </Stack>
    </header>
  </div>
);
