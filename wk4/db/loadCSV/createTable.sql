CREATE TABLE bikeRacks (
  id                  INT unsigned,
  streetNumber        INT,
  streetName          VARCHAR(100),
  streetSide          VARCHAR(50),
  skytrainStationName VARCHAR(100),
  numberRacks         INT,
  yearInstalled       VARCHAR(50),

  PRIMARY KEY     (id)
);