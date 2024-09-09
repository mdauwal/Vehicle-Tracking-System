const mockShipmentList = {
  shipments: [
    {
      truckPlate: 'A789 - HB',
      departureState: 'Abuja',
      destinationState: 'Port Harcourt',
      truckDriver: 'Johnson Okafor Williams',
      date: '11th Nov. 2021',
      shipmentStatus: 'SUCCESSFUL',
    },
    {
      truckPlate: 'YJK2 - 23',
      departureState: 'Abuja',
      destinationState: 'Enugu',
      truckDriver: 'Chidi Lucky Uzo',
      date: '9th Nov. 2021',
      shipmentStatus: 'SUCCESSFUL',
    },
    {
      truckPlate: 'BBC1 - CH',
      departureState: 'Abuja',
      destinationState: 'Lagos',
      truckDriver: "Hassan Al' Faruk",
      date: '9th Nov. 2021',
      shipmentStatus: 'SUCCESSFUL',
    },
    {
      truckPlate: 'A789-HB',
      departureState: 'Abuja',
      destinationState: 'Illorin',
      truckDriver: 'Richard Hussanni',
      date: '2nd Nov. 2021',
      shipmentStatus: 'SUCCESSFUL',
    },
    {
      truckPlate: 'CXD1 - 09',
      departureState: 'Abuja',
      destinationState: 'Kaduna',
      truckDriver: 'Joseph Onoja Hopsin',
      date: '31st Oct. 2021',
      shipmentStatus: 'SUCCESSFUL',
    },
    {
      truckPlate: 'ENU - 221',
      departureState: 'Abuja',
      destinationState: 'Gboko',
      truckDriver: 'Luqman Yusuf Ibrahim',
      date: '29th Oct. 2021',
      shipmentStatus: 'SUCCESSFUL',
    },
  ],
  pagination: {
    currentPage: 1,
    totalPages: 10,
  },
};

// Example function to fetch paginated data
/*   function fetchShipments(page = 1) {
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedShipments = mockShipmentList.shipments.slice(startIndex, startIndex + itemsPerPage);
    return {
      shipments: paginatedShipments,
      pagination: {
        currentPage: page,
        totalPages: mockShipmentList.pagination.totalPages,
      },
    };
  }
   */

export default mockShipmentList;
