// Confirmed event information. All displayed times are local to Kigali (UTC+2).
export const wedding = {
  names: 'Joshua & Sandrine',
  date: '18 & 20 December 2026',
  location: 'Kigali, Rwanda',
  // Set this when an RSVP service is available; guest contacts work in the meantime.
  rsvpUrl: null as string | null,
  // Add the gift registry URL when it is ready.
  registryUrl: null as string | null,
}

export const events = {
  gusaba: {
    date: 'Friday, 18 December 2026',
    time: '2:00 PM',
    venue: 'Heaven Garden Rebero',
    address: '233H+C54, Kigali, Rwanda',
    map: 'https://www.google.com/maps/search/?api=1&query=Heaven+Garden+Rebero+233H%2BC54+Kigali+Rwanda',
    contacts: [
      { display: '078 876 9004', phone: '+250788769004' },
      { display: '078 565 2048', phone: '+250785652048' },
      { display: '902 393 2080', phone: '+19023932080' },
    ],
  },
  wedding: {
    date: 'Sunday, 20 December 2026',
    venue: 'Kaleb Garden',
    address: 'Rebero, KK 30 Avenue, Kigali, Rwanda',
    map: 'https://www.google.com/maps/search/?api=1&query=Kaleb+Garden+Rebero+KK+30+Avenue+Kigali+Rwanda',
    contacts: [
      { display: '078 830 7830', phone: '+250788307830' },
      { display: '078 835 3322', phone: '+250788353322' },
      { display: '902 314 9251', phone: '+19023149251' },
    ],
  },
}
