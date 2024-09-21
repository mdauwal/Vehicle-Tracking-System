const dashboardData = {
  shipments: {
    successfulShipments: `5,600`,
    shipmentsOnRoute: `1,922`,
    numberOfIncidents: 124,
    seizedShipments: 102,
    totalShipments: {
      successRate: [20, 25, 38, 22, 29, 33, 40, 36, 28, 19, 45, 30], // Data points for success rate
      incidents: [5, 10, 15, 20, 12, 18, 25, 14, 20, 10, 30, 15], // Data points for incidents
    },
    breakdownByRoutes: {
      federal: 432,
      state: 677,
      securityIncidents: 1024,
    },
    riskAssessments: 14, // In percentage
  },
  truckDrivers: {
    totalDrivers: 1536,
    driversWithSuccessfulShipments: 1211,
    driversWithIncidents: 124,
    driversOnRoute: 201,
  },
  titleStats: {
    totalTL: 594,
    availableTL: 179,
    unavailableTL: 394,
  },
  timeFrames: ["November", "December", "January"], // Dropdown options for months
};

export default dashboardData;
