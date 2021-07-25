import SphereSaturnComparison from "../Hooks/SphereSaturnComparison";

const SaturnSphereComparison = ({
  position,
  timeSpeed,
  tiltedAxis,
  hrsForRotation,
  radius,
  picture
}) => {
  return (
    <SphereSaturnComparison
      providedPosition={position}
      timeSpeed={timeSpeed}
      tiltedAxis={tiltedAxis}
      hrsForRotation={hrsForRotation}
      radius={radius}
      picture={picture}
    />
  );
};

export default SaturnSphereComparison;
