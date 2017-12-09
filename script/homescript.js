var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var calendarMonth;
var calendarYear;
var holder ;
var arrowLeftHtml;
var currentMonth;
var currentYear;
var hardcodedEvents = {
    "_embedded": {
        "events": [
            {
                "name": "Brasseur et les enfants du paradis",
                "type": "event",
                "id": "Z698xZG2ZaAJ9",
                "test": false,
                "url": "https://www.ticketmaster.be/event/22935",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/belgium/98e1706d5022174a7ad485ca242d5e22.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-06-29T09:21:13Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-15T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-16",
                        "localTime": "20:30:00",
                        "dateTime": "2017-12-16T19:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7l1",
                            "name": "Theatre"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7ll",
                            "name": "Miscellaneous"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7la",
                            "name": "Individual"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAdJ",
                            "name": "Comedian"
                        }
                    }
                ],
                "promoter": {
                    "id": "3135",
                    "name": "Centre culturel d'Auderghem"
                },
                "promoters": [
                    {
                        "id": "3135",
                        "name": "Centre culturel d'Auderghem"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaAJ9?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917pFe0?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ917fe67?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Z17?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Centre Culturel d'Auderghem",
                            "type": "venue",
                            "id": "Za98xZG2Z17",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/centre-culturel-dauderghem-bruxelles-billets/cca/101",
                            "locale": "en-us",
                            "postalCode": "1160",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Boulevard du Souverain 183"
                            },
                            "location": {
                                "longitude": "4.42728",
                                "latitude": "50.81711"
                            },
                            "upcomingEvents": {
                                "_total": 44,
                                "mfx-be": 44
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Z17?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Brasseur et les enfants du paradis",
                            "type": "attraction",
                            "id": "K8vZ917pFe0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/986720",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7l1",
                                        "name": "Theatre"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7ll",
                                        "name": "Miscellaneous"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAdJ",
                                        "name": "Comedian"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917pFe0?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Paris Theatre",
                            "type": "attraction",
                            "id": "K8vZ917fe67",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/965779",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7l1",
                                        "name": "Theatre"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7lI",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 42,
                                "mfx-be": 42
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917fe67?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Kursaal Classics 2017 -2018: Belgian National Orchestra",
                "type": "event",
                "id": "Z698xZG2ZaAP_",
                "test": false,
                "url": "https://www.ticketmaster.be/event/22873",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Kursaal Classics"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Kursaal Classics"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false,
                        "attribution": "Kursaal Classics"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Kursaal Classics"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-07-04T07:40:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-16T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-16",
                        "localTime": "20:00:00",
                        "dateTime": "2017-12-16T19:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAe6",
                            "name": "Undefined"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v6JI",
                            "name": "Undefined"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7lt",
                            "name": "Event Style"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA6E",
                            "name": "Festival"
                        }
                    }
                ],
                "promoter": {
                    "id": "3863",
                    "name": "Kursaal Oostende"
                },
                "promoters": [
                    {
                        "id": "3863",
                        "name": "Kursaal Oostende"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 21,
                        "max": 43
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaAP_?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917KMHf?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Z7k?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Kursaal Oostende",
                            "type": "venue",
                            "id": "Za98xZG2Z7k",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/kursaal-oostende-ostende-billets/koo/101",
                            "locale": "en-us",
                            "postalCode": "8400",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Oostende"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Monacoplein"
                            },
                            "location": {
                                "longitude": "2.91205",
                                "latitude": "51.23183"
                            },
                            "upcomingEvents": {
                                "_total": 122,
                                "mfx-be": 122
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Z7k?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Kursaal Classics",
                            "type": "attraction",
                            "id": "K8vZ917KMHf",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/964568",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Kursaal Classics"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Kursaal Classics"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Kursaal Classics"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/59d/63654998-aa47-4e7d-96ef-ecfb3a37659d_117501_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Kursaal Classics"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe6",
                                        "name": "Undefined"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6JI",
                                        "name": "Undefined"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6E",
                                        "name": "Festival"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 4,
                                "mfx-be": 4
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917KMHf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Franck Dubosc",
                "type": "event",
                "id": "Z698xZG2Za7Do",
                "test": false,
                "url": "https://www.ticketmaster.be/event/20177",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/belgium/69d5043021177d3fb1e67874bd5a35d8.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-03-06T12:45:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-14T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-16",
                        "localTime": "20:00:00",
                        "dateTime": "2017-12-16T19:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAe1",
                            "name": "Comedy"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF17",
                            "name": "Comedy"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        }
                    }
                ],
                "promoter": {
                    "id": "3039",
                    "name": "Mediascène SPRL"
                },
                "promoters": [
                    {
                        "id": "3039",
                        "name": "Mediascène SPRL"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 45,
                        "max": 49
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Za7Do?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uHm7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Z61?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Centre Culturel de Nivelles",
                            "type": "venue",
                            "id": "Za98xZG2Z61",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/centre-culturel-de-nivelles-nivelles-billets/whn/101",
                            "locale": "en-us",
                            "postalCode": "1400",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Nivelles"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Waux-Hall - Place Albert Ier, 1"
                            },
                            "location": {
                                "longitude": "4.3228",
                                "latitude": "50.59803"
                            },
                            "upcomingEvents": {
                                "_total": 6,
                                "mfx-be": 6
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Z61?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Franck Dubosc",
                            "type": "attraction",
                            "id": "K8vZ917uHm7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/802803",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe1",
                                        "name": "Comedy"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF17",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 8,
                                "mfx-be": 8
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uHm7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Lisandro Cuxi",
                "type": "event",
                "id": "Z698xZG2Zak1_",
                "test": false,
                "url": "https://www.ticketmaster.be/event/25241",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/belgium/74fb54d8dcb9be06d9a2c3eddfb5ec64.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-09-25T15:03:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-11-15T06:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-16",
                        "localTime": "20:00:00",
                        "dateTime": "2017-12-16T19:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "cancelled"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAev",
                            "name": "Pop"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1t",
                            "name": "Pop"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7la",
                            "name": "Individual"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAde",
                            "name": "Singer/Vocalist"
                        }
                    }
                ],
                "promoter": {
                    "id": "3039",
                    "name": "Mediascène SPRL"
                },
                "promoters": [
                    {
                        "id": "3039",
                        "name": "Mediascène SPRL"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zak1_?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917pkl0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Zek?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Le Forum de Liège",
                            "type": "venue",
                            "id": "Za98xZG2Zek",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/le-forum-de-liege-liege-billets/lie/101",
                            "locale": "en-us",
                            "postalCode": "4000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Liège"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Pont d'Avroy, 14"
                            },
                            "location": {
                                "longitude": "5.57031",
                                "latitude": "50.64077"
                            },
                            "upcomingEvents": {
                                "_total": 43,
                                "mfx-be": 43
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Zek?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Lisandro Cuxi",
                            "type": "attraction",
                            "id": "K8vZ917pkl0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/986440",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/f01/e2c3044f-16dd-4930-b006-cd59e0002f01_447651_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAev",
                                        "name": "Pop"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vk1t",
                                        "name": "Pop"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAde",
                                        "name": "Singer/Vocalist"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917pkl0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Real Bodies : The Exhibition",
                "type": "event",
                "id": "Z698xZG2Zakpo",
                "test": false,
                "url": "https://www.ticketmaster.be/event/26001",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-11-09T21:17:57Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-17T22:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": true,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7nl",
                            "name": "Fine Art"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7ld",
                            "name": "Fine Art"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7lt",
                            "name": "Event Style"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA6I",
                            "name": "Exhibit"
                        }
                    }
                ],
                "promoter": {
                    "id": "4417",
                    "name": "Exhibition Hub Sprl"
                },
                "promoters": [
                    {
                        "id": "4417",
                        "name": "Exhibition Hub Sprl"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zakpo?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917fqH0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Ze671?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Caves de Tour & Taxis",
                            "type": "venue",
                            "id": "Z598xZG2Ze671",
                            "test": false,
                            "url": "https://www.ticketmaster.be/venue/caves-de-tour--taxis-brussels-tickets/ttc/101",
                            "locale": "en-us",
                            "postalCode": "1000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Avenue du Port - Havenlaan 86C"
                            },
                            "location": {
                                "longitude": "4.35049",
                                "latitude": "50.86546"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Ze671?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Real Bodies",
                            "type": "attraction",
                            "id": "K8vZ917fqH0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/969660",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7nl",
                                        "name": "Fine Art"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7ld",
                                        "name": "Fine Art"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6I",
                                        "name": "Exhibit"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 226,
                                "ticketmaster": 226
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917fqH0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Le Mystère Bizet avec Éric-Emmanuel Schmitt",
                "type": "event",
                "id": "Z698xZG2Zak8M",
                "test": false,
                "url": "http://www.ticketmaster.be/event/25655",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-10-26T08:09:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-15T15:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "19:00:00",
                        "dateTime": "2017-12-17T18:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "promoter": {
                    "id": "2981",
                    "name": "Music House Foundation ASBL"
                },
                "promoters": [
                    {
                        "id": "2981",
                        "name": "Music House Foundation ASBL"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zak8M?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z198xZG2Z7ae?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Hulencourt Golf Club",
                            "type": "venue",
                            "id": "Z198xZG2Z7ae",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/s-bruegel-golf-cl-dhulencourt-vieux-genappe-billets/sbg/101",
                            "locale": "en-us",
                            "postalCode": "1472",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Vieux-Genappe"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Bruyère d'Hulencourt, 15"
                            },
                            "location": {
                                "longitude": "4.39268",
                                "latitude": "50.63698"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z198xZG2Z7ae?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Franck Dubosc",
                "type": "event",
                "id": "Z698xZG2Za7H2",
                "test": false,
                "url": "http://www.ticketmaster.be/event/20239",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "http://media.ticketmaster.eu/belgium/69d5043021177d3fb1e67874bd5a35d8.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-03-07T08:39:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-14T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "20:00:00",
                        "dateTime": "2017-12-17T19:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAe1",
                            "name": "Comedy"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF17",
                            "name": "Comedy"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        }
                    }
                ],
                "promoter": {
                    "id": "3039",
                    "name": "Mediascène SPRL"
                },
                "promoters": [
                    {
                        "id": "3039",
                        "name": "Mediascène SPRL"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 45,
                        "max": 49
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Za7H2?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uHm7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Z6k?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Centre Temps Choisi",
                            "type": "venue",
                            "id": "Za98xZG2Z6k",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/centre-temps-choisi-gilly-charleroi--billets/ctc/101",
                            "locale": "en-us",
                            "postalCode": "6060",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Gilly (Charleroi)"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Chaussée de Lodelinsart"
                            },
                            "location": {
                                "longitude": "4.47904",
                                "latitude": "50.4233"
                            },
                            "upcomingEvents": {
                                "_total": 4,
                                "mfx-be": 4
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Z6k?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Franck Dubosc",
                            "type": "attraction",
                            "id": "K8vZ917uHm7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/802803",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe1",
                                        "name": "Comedy"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF17",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 8,
                                "mfx-be": 8
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uHm7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "European Circus Festival",
                "type": "event",
                "id": "Z698xZG2Zak5R",
                "test": false,
                "url": "http://www.ticketmaster.be/event/25327",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-10-05T08:53:02Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-16T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "17:30:00",
                        "dateTime": "2017-12-17T16:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7n1",
                            "name": "Circus & Specialty Acts"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7n1",
                            "name": "Circus"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        }
                    }
                ],
                "promoter": {
                    "id": "4125",
                    "name": "European Circus asbl"
                },
                "promoters": [
                    {
                        "id": "4125",
                        "name": "European Circus asbl"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zak5R?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917KWmf?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Zevk7?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Parc d'Avroy",
                            "type": "venue",
                            "id": "Z598xZG2Zevk7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/parc-davroy-liege-tickets/avroy/101",
                            "locale": "en-us",
                            "postalCode": "4000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Liège"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Boulevard d'Avroy"
                            },
                            "location": {
                                "longitude": "5.56755",
                                "latitude": "50.63508"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Zevk7?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Festival Du Cirque Europeen",
                            "type": "attraction",
                            "id": "K8vZ917KWmf",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/965450",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7n1",
                                        "name": "Circus & Specialty Acts"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7n1",
                                        "name": "Circus"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917KWmf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Bilzen Mysteries",
                "type": "event",
                "id": "Z698xZG2Za7Eg",
                "test": false,
                "url": "http://www.ticketmaster.be/event/18933",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/731/4d763ffd-183d-418a-926b-c2468a578731_106411_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2016-12-15T14:17:01Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-17T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": true,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7la",
                            "name": "Spectacular"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7lE",
                            "name": "Spectacular"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7lt",
                            "name": "Event Style"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAF7",
                            "name": "Fan Experiences"
                        }
                    }
                ],
                "promoter": {
                    "id": "4099",
                    "name": "Bilzen Mysteries"
                },
                "promoters": [
                    {
                        "id": "4099",
                        "name": "Bilzen Mysteries"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 12,
                        "max": 15
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Za7Eg?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9174Gs7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Ze7dk?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Landcommanderij Alden Biesen",
                            "type": "venue",
                            "id": "Z598xZG2Ze7dk",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/landcommanderij-alden-biesen-bilzen-tickets/bilzen/101",
                            "locale": "en-us",
                            "postalCode": "3740",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Bilzen"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Kasteelstraat 6"
                            },
                            "location": {
                                "longitude": "5.52072",
                                "latitude": "50.84169"
                            },
                            "upcomingEvents": {
                                "_total": 173,
                                "mfx-be": 173
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Ze7dk?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Bilzen Mysteries",
                            "type": "attraction",
                            "id": "K8vZ9174Gs7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/975150",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/731/4d763ffd-183d-418a-926b-c2468a578731_106411_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7la",
                                        "name": "Spectacular"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7lE",
                                        "name": "Spectacular"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAF7",
                                        "name": "Fan Experiences"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 173,
                                "mfx-be": 173
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9174Gs7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Jimmy Labeeu",
                "type": "event",
                "id": "Z698xZG2ZaAmD",
                "test": false,
                "url": "http://www.ticketmaster.be/event/23483",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-07-28T10:49:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-09-19T07:45:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "17:00:00",
                        "dateTime": "2017-12-17T16:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "cancelled"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAe1",
                            "name": "Comedy"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF17",
                            "name": "Comedy"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7la",
                            "name": "Individual"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAdJ",
                            "name": "Comedian"
                        }
                    }
                ],
                "promoter": {
                    "id": "3865",
                    "name": "Filgoud Sprl"
                },
                "promoters": [
                    {
                        "id": "3865",
                        "name": "Filgoud Sprl"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaAmD?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9174TQf?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z198xZG2Zed1?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Centre Culturel de Tubize",
                            "type": "venue",
                            "id": "Z198xZG2Zed1",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/centre-culturel-de-tubize-tubize-billets/cct/101",
                            "locale": "en-us",
                            "postalCode": "1480",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Tubize"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Boulevard Georges Deryck 124"
                            },
                            "location": {
                                "longitude": "4.20094",
                                "latitude": "50.6912"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z198xZG2Zed1?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Jimmy Labeeu",
                            "type": "attraction",
                            "id": "K8vZ9174TQf",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/984648",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a95/2d42edf3-cf33-44df-a1dc-cdf1f2c9ca95_404561_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe1",
                                        "name": "Comedy"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF17",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAdJ",
                                        "name": "Comedian"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9174TQf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Sois Belge et Tais-Toi!- Le \"Grand Vingtième\"",
                "type": "event",
                "id": "Z698xZG2ZaAp-",
                "test": false,
                "url": "http://www.ticketmaster.be/event/21921",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Sois Belge"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Sois Belge"
                    },
                    {
                        "ratio": "16_9",
                        "url": "http://media.ticketmaster.eu/belgium/8ab36e87ef54771ecef73386a4ec0825.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "Sois Belge"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "Sois Belge"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Sois Belge"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-05-23T07:31:38Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-15T06:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "16:00:00",
                        "dateTime": "2017-12-17T15:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7l1",
                            "name": "Theatre"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7lI",
                            "name": "Comedy"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        }
                    }
                ],
                "promoter": {
                    "id": "3315",
                    "name": "Remireva Sprl"
                },
                "promoters": [
                    {
                        "id": "3315",
                        "name": "Remireva Sprl"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 26.5,
                        "max": 40.5
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaAp-?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9173VbV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z198xZG2Zddk?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Théâtre Saint-Michel",
                            "type": "venue",
                            "id": "Z198xZG2Zddk",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/theatre-saint-michel-bruxelles-billets/thsmb/101",
                            "locale": "en-us",
                            "postalCode": "1040",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Rue Père Eudore Devroye 2"
                            },
                            "location": {
                                "longitude": "4.40711",
                                "latitude": "50.83386"
                            },
                            "upcomingEvents": {
                                "_total": 7,
                                "mfx-be": 7
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z198xZG2Zddk?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Sois Belge Et Tais-Toi",
                            "type": "attraction",
                            "id": "K8vZ9173VbV",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/949672",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Sois Belge"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Sois Belge"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "Sois Belge"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "Sois Belge"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Sois Belge"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/506/0af092c7-f35b-46e3-97f1-e636c1d2f506_169361_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Sois Belge"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7l1",
                                        "name": "Theatre"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7lI",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 16,
                                "mfx-be": 16
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9173VbV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Giselle",
                "type": "event",
                "id": "Z698xZG2ZaAEg",
                "test": false,
                "url": "http://www.ticketmaster.be/event/23029",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "http://media.ticketmaster.eu/belgium/ab84075ba69e33d5314415c04257d881.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-07-03T13:12:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-15T06:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "14:00:00",
                        "dateTime": "2017-12-17T13:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "promoter": {
                    "id": "3137",
                    "name": "Art & Culture à Woluwé Saint Pierre"
                },
                "promoters": [
                    {
                        "id": "3137",
                        "name": "Art & Culture à Woluwé Saint Pierre"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaAEg?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Zak?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "W:Halll - Auditorium",
                            "type": "venue",
                            "id": "Za98xZG2Zak",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/whalll-auditorium-bruxelles-billets/ccw/101",
                            "locale": "en-us",
                            "postalCode": "1150",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Avenue Charles Thielemans 93"
                            },
                            "location": {
                                "longitude": "4.42711",
                                "latitude": "50.83683"
                            },
                            "upcomingEvents": {
                                "_total": 28,
                                "mfx-be": 28
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Zak?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Concert des Coeurs 2017 - LES PASTOUREAUX",
                "type": "event",
                "id": "Z698xZG2Zak1y",
                "test": false,
                "url": "https://www.ticketmaster.be/event/25273",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/belgium/df7112edcaf5b75d0cab6328c046e431.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false,
                        "attribution": "Concert des Coeurs"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-09-29T09:59:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-15T08:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "15:30:00",
                        "dateTime": "2017-12-17T14:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7l1",
                            "name": "Group"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA7a",
                            "name": "Choir"
                        }
                    }
                ],
                "promoter": {
                    "id": "4437",
                    "name": "Be.Source Fondation Privée"
                },
                "promoters": [
                    {
                        "id": "4437",
                        "name": "Be.Source Fondation Privée"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zak1y?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917pbU0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Ze6dF?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Eglise Notre Dame au Sablon",
                            "type": "venue",
                            "id": "Z598xZG2Ze6dF",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/eglise-notre-dame-au-sablon-brussels-tickets/sablon/101",
                            "locale": "en-us",
                            "postalCode": "1000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Rue de la Régence / Regentschapsstraat 3"
                            },
                            "location": {
                                "longitude": "4.35892",
                                "latitude": "50.84237"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Ze6dF?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Concert des Coeurs",
                            "type": "attraction",
                            "id": "K8vZ917pbU0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/989855",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/114/ddf530e5-5b66-4ca3-8b4f-efe549d70114_523721_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false,
                                    "attribution": "Concert des Coeurs"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7l1",
                                        "name": "Group"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA7a",
                                        "name": "Choir"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917pbU0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Brasseur et les enfants du paradis",
                "type": "event",
                "id": "Z698xZG2ZaAJ_",
                "test": false,
                "url": "https://www.ticketmaster.be/event/22937",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/belgium/98e1706d5022174a7ad485ca242d5e22.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-06-29T09:21:13Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-16T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-17",
                        "localTime": "15:00:00",
                        "dateTime": "2017-12-17T14:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7l1",
                            "name": "Theatre"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7ll",
                            "name": "Miscellaneous"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7la",
                            "name": "Individual"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAdJ",
                            "name": "Comedian"
                        }
                    }
                ],
                "promoter": {
                    "id": "3135",
                    "name": "Centre culturel d'Auderghem"
                },
                "promoters": [
                    {
                        "id": "3135",
                        "name": "Centre culturel d'Auderghem"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaAJ_?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917pFe0?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ917fe67?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Z17?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Centre Culturel d'Auderghem",
                            "type": "venue",
                            "id": "Za98xZG2Z17",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/centre-culturel-dauderghem-bruxelles-billets/cca/101",
                            "locale": "en-us",
                            "postalCode": "1160",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Boulevard du Souverain 183"
                            },
                            "location": {
                                "longitude": "4.42728",
                                "latitude": "50.81711"
                            },
                            "upcomingEvents": {
                                "_total": 44,
                                "mfx-be": 44
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Z17?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Brasseur et les enfants du paradis",
                            "type": "attraction",
                            "id": "K8vZ917pFe0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/986720",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/33d/468fc344-5229-4dd1-876a-64307debc33d_462961_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7l1",
                                        "name": "Theatre"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7ll",
                                        "name": "Miscellaneous"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAdJ",
                                        "name": "Comedian"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917pFe0?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Paris Theatre",
                            "type": "attraction",
                            "id": "K8vZ917fe67",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/965779",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/07d/fda8c807-42eb-4b81-9f16-f3a8367e107d_106371_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7l1",
                                        "name": "Theatre"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7lI",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 42,
                                "mfx-be": 42
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917fe67?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Real Bodies : The Exhibition",
                "type": "event",
                "id": "Z698xZG2ZakKP",
                "test": false,
                "url": "https://www.ticketmaster.be/event/25829",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-11-09T20:51:15Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-18T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-18",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": true,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7nl",
                            "name": "Fine Art"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7ld",
                            "name": "Fine Art"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7lt",
                            "name": "Event Style"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA6I",
                            "name": "Exhibit"
                        }
                    }
                ],
                "promoter": {
                    "id": "4417",
                    "name": "Exhibition Hub Sprl"
                },
                "promoters": [
                    {
                        "id": "4417",
                        "name": "Exhibition Hub Sprl"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZakKP?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917fqH0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Ze671?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Caves de Tour & Taxis",
                            "type": "venue",
                            "id": "Z598xZG2Ze671",
                            "test": false,
                            "url": "https://www.ticketmaster.be/venue/caves-de-tour--taxis-brussels-tickets/ttc/101",
                            "locale": "en-us",
                            "postalCode": "1000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Avenue du Port - Havenlaan 86C"
                            },
                            "location": {
                                "longitude": "4.35049",
                                "latitude": "50.86546"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Ze671?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Real Bodies",
                            "type": "attraction",
                            "id": "K8vZ917fqH0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/969660",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7nl",
                                        "name": "Fine Art"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7ld",
                                        "name": "Fine Art"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6I",
                                        "name": "Exhibit"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 226,
                                "ticketmaster": 226
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917fqH0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Veronic DiCaire",
                "type": "event",
                "id": "Z698xZG2ZaA8o",
                "test": false,
                "url": "http://www.ticketmaster.be/event/21521",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dbimages/139880a.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dbimages/139881a.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "CC BY-SA 3.0 Jeangagnon"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-04-24T11:12:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-10-30T11:15:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-18",
                        "localTime": "20:00:00",
                        "dateTime": "2017-12-18T19:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAe6",
                            "name": "Undefined"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v6JI",
                            "name": "Undefined"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        }
                    }
                ],
                "promoter": {
                    "id": "3039",
                    "name": "Mediascène SPRL"
                },
                "promoters": [
                    {
                        "id": "3039",
                        "name": "Mediascène SPRL"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 49,
                        "max": 69
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZaA8o?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917GqSV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2ZFF?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Théâtre Royal de Mons",
                            "type": "venue",
                            "id": "Za98xZG2ZFF",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/theatre-royal-de-mons-mons-billets/trm/101",
                            "locale": "en-us",
                            "postalCode": "7000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Mons"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Grand Place"
                            },
                            "location": {
                                "longitude": "3.95193",
                                "latitude": "50.45429"
                            },
                            "upcomingEvents": {
                                "_total": 33,
                                "mfx-be": 33
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2ZFF?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Veronic DiCaire",
                            "type": "attraction",
                            "id": "K8vZ917GqSV",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/161853",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dbimages/139880a.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/139881a.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/5fc/28cfae58-c853-4ee2-9512-617b8e70a5fc_213371_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "CC BY-SA 3.0 Jeangagnon"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe6",
                                        "name": "Undefined"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6JI",
                                        "name": "Undefined"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 4,
                                "mfx-be": 4
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917GqSV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Bilzen Mysteries",
                "type": "event",
                "id": "Z698xZG2Za7EM",
                "test": false,
                "url": "http://www.ticketmaster.be/event/18935",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/731/4d763ffd-183d-418a-926b-c2468a578731_106411_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false,
                        "attribution": "Bilzen Mysteries"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2016-12-15T14:17:01Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-18T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-18",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": true,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7la",
                            "name": "Spectacular"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7lE",
                            "name": "Spectacular"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7lt",
                            "name": "Event Style"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAF7",
                            "name": "Fan Experiences"
                        }
                    }
                ],
                "promoter": {
                    "id": "4099",
                    "name": "Bilzen Mysteries"
                },
                "promoters": [
                    {
                        "id": "4099",
                        "name": "Bilzen Mysteries"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "EUR",
                        "min": 12,
                        "max": 15
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Za7EM?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9174Gs7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Ze7dk?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Landcommanderij Alden Biesen",
                            "type": "venue",
                            "id": "Z598xZG2Ze7dk",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/landcommanderij-alden-biesen-bilzen-tickets/bilzen/101",
                            "locale": "en-us",
                            "postalCode": "3740",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Bilzen"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Kasteelstraat 6"
                            },
                            "location": {
                                "longitude": "5.52072",
                                "latitude": "50.84169"
                            },
                            "upcomingEvents": {
                                "_total": 173,
                                "mfx-be": 173
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Ze7dk?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Bilzen Mysteries",
                            "type": "attraction",
                            "id": "K8vZ9174Gs7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/975150",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/731/4d763ffd-183d-418a-926b-c2468a578731_106411_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/d08/d3e857e6-c368-45d8-bcc4-0a144fb39d08_141581_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false,
                                    "attribution": "Bilzen Mysteries"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7la",
                                        "name": "Spectacular"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7lE",
                                        "name": "Spectacular"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAF7",
                                        "name": "Fan Experiences"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 173,
                                "mfx-be": 173
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9174Gs7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Bruno Coppens",
                "type": "event",
                "id": "Z698xZG2Zak2_",
                "test": false,
                "url": "https://www.ticketmaster.be/event/25561",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/belgium/5fb392f14381e2b1b7f1d8fa7b815cff.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-10-24T08:52:00Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-17T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-18",
                        "localTime": "20:00:00",
                        "dateTime": "2017-12-18T19:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAe1",
                            "name": "Comedy"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF17",
                            "name": "Comedy"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7la",
                            "name": "Individual"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vAdJ",
                            "name": "Comedian"
                        }
                    }
                ],
                "promoter": {
                    "id": "3007",
                    "name": "Aula Magna SA"
                },
                "promoters": [
                    {
                        "id": "3007",
                        "name": "Aula Magna SA"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zak2_?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917pLN7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Za98xZG2Zde?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Aula Magna",
                            "type": "venue",
                            "id": "Za98xZG2Zde",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/aula-magna-louvain-la-neuve-billets/mag/101",
                            "locale": "en-us",
                            "postalCode": "1348",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Louvain-la-Neuve"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Place Raymond Lemaire, 1"
                            },
                            "location": {
                                "longitude": "4.6106",
                                "latitude": "50.66899"
                            },
                            "upcomingEvents": {
                                "_total": 17,
                                "mfx-be": 17
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Za98xZG2Zde?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Bruno Coppens",
                            "type": "attraction",
                            "id": "K8vZ917pLN7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/991658",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/0c1/b54bae14-c2b7-4444-8d58-7ffb29bae0c1_572681_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe1",
                                        "name": "Comedy"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF17",
                                        "name": "Comedy"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAdJ",
                                        "name": "Comedian"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917pLN7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "European Circus Festival",
                "type": "event",
                "id": "Z698xZG2Zak5s",
                "test": false,
                "url": "https://www.ticketmaster.be/event/25329",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false,
                        "attribution": "Festival Du Cirque Europeen"
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-10-05T08:53:02Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-17T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-18",
                        "localTime": "13:00:00",
                        "dateTime": "2017-12-18T12:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7n1",
                            "name": "Circus & Specialty Acts"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7n1",
                            "name": "Circus"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        }
                    }
                ],
                "promoter": {
                    "id": "4125",
                    "name": "European Circus asbl"
                },
                "promoters": [
                    {
                        "id": "4125",
                        "name": "European Circus asbl"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2Zak5s?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917KWmf?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Zevk7?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Parc d'Avroy",
                            "type": "venue",
                            "id": "Z598xZG2Zevk7",
                            "test": false,
                            "url": "http://www.ticketmaster.be/venue/parc-davroy-liege-tickets/avroy/101",
                            "locale": "en-us",
                            "postalCode": "4000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Liège"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Boulevard d'Avroy"
                            },
                            "location": {
                                "longitude": "5.56755",
                                "latitude": "50.63508"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Zevk7?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Festival Du Cirque Europeen",
                            "type": "attraction",
                            "id": "K8vZ917KWmf",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/965450",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/e6b/57d06bfb-5ccd-417f-b3c2-c3fd8082ee6b_174901_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false,
                                    "attribution": "Festival Du Cirque Europeen"
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7n1",
                                        "name": "Circus & Specialty Acts"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7n1",
                                        "name": "Circus"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917KWmf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Real Bodies : The Exhibition",
                "type": "event",
                "id": "Z698xZG2ZakKE",
                "test": false,
                "url": "https://www.ticketmaster.be/event/25831",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    }
                ],
                "sales": {
                    "public": {
                        "startDateTime": "2017-11-09T20:51:16Z",
                        "startTBD": false,
                        "endDateTime": "2017-12-19T22:59:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2017-12-19",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": true,
                        "noSpecificTime": false
                    },
                    "timezone": "Europe/Brussels",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7nl",
                            "name": "Fine Art"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7ld",
                            "name": "Fine Art"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7lt",
                            "name": "Event Style"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7vA6I",
                            "name": "Exhibit"
                        }
                    }
                ],
                "promoter": {
                    "id": "4417",
                    "name": "Exhibition Hub Sprl"
                },
                "promoters": [
                    {
                        "id": "4417",
                        "name": "Exhibition Hub Sprl"
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z698xZG2ZakKE?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917fqH0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z598xZG2Ze671?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Caves de Tour & Taxis",
                            "type": "venue",
                            "id": "Z598xZG2Ze671",
                            "test": false,
                            "url": "https://www.ticketmaster.be/venue/caves-de-tour--taxis-brussels-tickets/ttc/101",
                            "locale": "en-us",
                            "postalCode": "1000",
                            "timezone": "Europe/Brussels",
                            "city": {
                                "name": "Brussels"
                            },
                            "country": {
                                "name": "Belgium",
                                "countryCode": "BE"
                            },
                            "address": {
                                "line1": "Avenue du Port - Havenlaan 86C"
                            },
                            "location": {
                                "longitude": "4.35049",
                                "latitude": "50.86546"
                            },
                            "upcomingEvents": {
                                "_total": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z598xZG2Ze671?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Real Bodies",
                            "type": "attraction",
                            "id": "K8vZ917fqH0",
                            "test": false,
                            "url": "http://www.ticketmaster.be/artist/969660",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/05e/4198226b-221d-46aa-beb6-e8c1f89cc05e_555141_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7nl",
                                        "name": "Fine Art"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7ld",
                                        "name": "Fine Art"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6I",
                                        "name": "Exhibit"
                                    }
                                }
                            ],
                            "upcomingEvents": {
                                "_total": 226,
                                "ticketmaster": 226
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917fqH0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "first": {
            "href": "/discovery/v2/events.json?startDateTime=2017-11-30T23%3A59%3A59Z&countryCode=be&endDateTime=2017-12-31T23%3A59%3A59Z&page=0&size=20"
        },
        "prev": {
            "href": "/discovery/v2/events.json?startDateTime=2017-11-30T23%3A59%3A59Z&countryCode=be&endDateTime=2017-12-31T23%3A59%3A59Z&page=4&size=20"
        },
        "self": {
            "href": "/discovery/v2/events.json?startDateTime=2017-11-30T23%3A59%3A59Z&countryCode=be&page=5&endDateTime=2017-12-31T23%3A59%3A59Z"
        },
        "next": {
            "href": "/discovery/v2/events.json?startDateTime=2017-11-30T23%3A59%3A59Z&countryCode=be&endDateTime=2017-12-31T23%3A59%3A59Z&page=6&size=20"
        },
        "last": {
            "href": "/discovery/v2/events.json?startDateTime=2017-11-30T23%3A59%3A59Z&countryCode=be&endDateTime=2017-12-31T23%3A59%3A59Z&page=10&size=20"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 215,
        "totalPages": 11,
        "number": 11
    }
};
var previousSelectedDay;
var calendarHolder;
var calendarHeader;
var calendarDays;

function getEventsByMonth(month, page, year){
    previousSelectedDay = null;
    var startDate;
    var endDate;
    var intYear;
    switch(month){
        case "January":
            var startYear = parseInt(year) - 1;
            startDate = startYear+"-12-31T23:59:59Z";
            endDate = year+"-01-31T23:59:59Z";
            break;
        case "February":
            intYear = parseInt(year);
            if(((intYear%4==0)&&(intYear%100!=0))||(intYear%400==0)){
                startDate = year+"-01-31T23:59:59Z";
                endDate = year+"-02-29T23:59:59Z";
                break;
            } else{
                startDate = year+"-01-31T23:59:59Z";
                endDate = year+"-02-28T23:59:59Z";
                break;
            }
        case "March":
            intYear = parseInt(year);
            if(((intYear%4==0)&&(intYear%100!=0))||(intYear%400==0)){
                startDate = year+"-02-29T23:59:59Z";
                endDate = year+"-03-31T23:59:59Z";
                break;
            } else{
                startDate = year+"-02-28T23:59:59Z";
                endDate = year+"-03-31T23:59:59Z";
                break;
            }
        case "April":
            startDate = year+"-03-31T23:59:59Z";
            endDate = year+"-04-30T23:59:59Z";
            break;
        case "May":
            startDate = year+"-04-30T23:59:59Z";
            endDate = year+"-05-31T23:59:59Z";
            break;
        case "June":
            startDate = year+"-05-31T23:59:59Z";
            endDate = year+"-06-30T23:59:59Z";
            break;
        case "July":
            startDate = year+"-06-30T23:59:59Z";
            endDate = year+"-07-31T23:59:59Z";
            break;
        case "August":
            startDate = year+"-07-31T23:59:59Z";
            endDate = year+"-08-31T23:59:59Z";
            break;
        case "September":
            startDate = year+"-08-31T23:59:59Z";
            endDate = year+"-09-30T23:59:59Z";
            break;
        case "October":
            startDate = year+"-09-30T23:59:59Z";
            endDate = year+"-10-31T23:59:59Z";
            break;
        case "November":
            startDate = year+"-10-31T23:59:59Z";
            endDate = year+"-11-30T23:59:59Z";
            break;
        case "December":
            startDate = year+"-11-30T23:59:59Z";
            endDate = year+"-12-31T23:59:59Z";
            break;
    }
    var url;
    url = "https://app.ticketmaster.com/discovery/v2/events.json?startDateTime="+startDate+"&endDateTime="+endDate+"&countryCode=be";

    if(page == -1){
       holder.innerHTML = "";
       createLoader();
    }else{
        url += "&page="+page;
    }
    url += "&apikey=3VaDpKjcG6YEr85SATQCB3zfvKu4St6C";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var result = JSON.parse(xhttp.responseText);
            try {
                displayEvents(result._embedded.events);
                if (result.page.totalPages == result.page.number) {
                    removeLoader();
                } else {
                    getEventsByMonth(month, result.page.number + 1, year);
                }
            } catch(ex){
                removeLoader();
            }

        }
    };
    xhttp.open("GET",url, true);
    xhttp.send();
}

function getEventsByDate(page, date){
    var stringdate = ".date-" + date.toString();
    var clickedCell = document.querySelector(stringdate);
    if((clickedCell == previousSelectedDay) && page == -1){
        clickedCell.classList.remove("activeDay");
        getEventsByMonth(calendarMonth.innerHTML, -1, parseInt(calendarYear.innerHTML));

    }else {
        if(previousSelectedDay != null) {
            previousSelectedDay.classList.remove("activeDay");
        }
        previousSelectedDay = clickedCell;
        clickedCell.classList.add("activeDay");

        var startDate = clickedCell.dataset.startdate;
        var endDate = clickedCell.dataset.enddate;

        var url;
        url = "https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=" + startDate + "&endDateTime=" + endDate + "&countryCode=be";
        if (page == -1) {
            holder.innerHTML = "";
            createLoader();
        } else {
            url += "&page=" + page;
        }
        url += "&apikey=3VaDpKjcG6YEr85SATQCB3zfvKu4St6C";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(xhttp.responseText);
                try {
                    displayEvents(result._embedded.events);
                    if (result.page.totalPages == result.page.number) {
                    } else {
                        getEventsByDate(result.page.number + 1, date);
                    }
                } catch (ex) {
                   removeLoader();
                }

            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    }
}

function displayEvents(events) {
    for(var i = 0, l = events.length; i<l; i++){
        var currentEvent = events[i];
        var div = document.createElement('div');
        div.classList.add('event');

        holder.append(div);

        var nameh3 = document.createElement('h3');
        nameh3.classList.add('eventTitle');
        nameh3.innerHTML = currentEvent.name;
        div.append(nameh3);

        var dateP = document.createElement('p');
        dateP.classList.add('eventDate');
        dateP.innerHTML = "Rundate: " + currentEvent.dates.start.localDate;
        div.append(dateP);

        var genreP = document.createElement('p');
        genreP.classList.add('eventGenre');
        try {
            genreP.innerHTML = "Genre: " + currentEvent.classifications[0].genre.name;
        } catch (ex){
            genreP.innerHTML = "Genre unknown";
        }
        div.append(genreP);

        var embeddedVenue = currentEvent._embedded.venues;
        var venue = embeddedVenue[0];

        var cityP = document.createElement('p');
        cityP.classList.add('eventCity');
        try {
            cityP.innerHTML = "City: " + venue.city.name;
        }catch (ex){
            cityP.innerHTML = "City unknown";
        }
        div.append(cityP);

        var venueP = document.createElement('p');
        venueP.classList.add('eventVenue');
        try {
            venueP.innerHTML = "Venue: " + venue.name;
        }catch (ex){
            venueP.innerHTML = "Venue unknown";
        }
        div.append(venueP);
    }
    if(holder.innerHTML == ""){
        var noEventsFound = document.createElement('p');
        noEventsFound.innerHTML = "No events found";
        holder.append(noEventsFound);
    }
}

function clearTable(table){
    var rows = table.rows;
    var i = rows.length;
    while(--i){
        rows[i].parentNode.removeChild(rows[i]);
    }
}

function fillupCallendar(month, year){
    var daysInMonth = getDaysInMonth(month, year);
    var stringMonthNumber;
    var days = 1;
    var row;
    var cell;
    clearTable(calendarDays);
    if(month+1 < 10){
        stringMonthNumber = "0"+(month+1).toString();
    }else{
        stringMonthNumber = (month+1).toString();
    }
    var stringDate = year.toString() + "-" + stringMonthNumber +"-"+"01";
    var firstDayDate = new Date(stringDate);
    var firstDay = firstDayDate.getDay();
    if(firstDay != 1){
        if(firstDay !=0) {
            row = calendarDays.insertRow();
            for (var i = 1; i < firstDay; i++) {
                cell = row.insertCell();
            }
            for (i = firstDay; i < 8; i++) {
                fillCalendarCell(cell, days, row);

                days += 1;
            }
        }else{
            row = calendarDays.insertRow();
            for(i=0;i<6;i++){
                cell = row.insertCell();
            }

            fillCalendarCell(cell, days, row);
            days += 1;
        }

    }

    while(days<daysInMonth+1){
        row = calendarDays.insertRow();
        for( i = 1; i<8; i++){
            if(days<daysInMonth+1){
                fillCalendarCell(cell, days, row);
                days +=1;

            }else{
                break;
            }
        }
    }


    if((months.indexOf(calendarMonth.innerHTML) == currentMonth) && currentYear == calendarYear.innerHTML){
        arrowLeftHtml.setAttribute('onclick','');
        arrowLeftHtml.style.opacity = 0.3;
        arrowLeftHtml.classList.remove('arrowsHover');

    }else{
        arrowLeftHtml.setAttribute('onclick','arrowLeft()');
        arrowLeftHtml.style.opacity = 1;
        arrowLeftHtml.classList.add('arrowsHover');
    }
}

function fillCalendarCell(cell, days, row){
    var date = new Date();
    cell = row.insertCell();
    cell.innerHTML = days;
    if (days < 10){
        var datadate = "0"+days;
    }else{
        datadate = days;
    }
    if((days>=date.getDate()) || (date.getMonth() !=months.indexOf(calendarMonth.innerHTML))){
        var datamonth = parseInt(months.indexOf(calendarMonth.innerHTML) + 1);
        if (datamonth < 10) {
            datamonth = "0" + parseInt(months.indexOf(calendarMonth.innerHTML) + 1);
        }
        cell.dataset.startdate = calendarYear.innerHTML + "-" + datamonth + "-" + datadate + "T00:00:01Z";
        cell.dataset.enddate = calendarYear.innerHTML + "-" + datamonth + "-" + datadate + "T23:59:59Z";
        var stringclass = "date-" + days;
        cell.classList.add(stringclass);
        cell.classList.add("cellDate");
        cell.setAttribute('onclick', 'getEventsByDate(-1, ' + days + ')')
    }
}

function arrowLeft(){
    if(calendarMonth.innerHTML == months[0]){
        calendarYear.innerHTML = parseInt(calendarYear.innerHTML) -1;
        calendarMonth.innerHTML = months[11];
        holder.innerHTML = "";
        getEventsByMonth(calendarMonth.innerHTML, -1, parseInt(calendarYear.innerHTML));
        fillupCallendar(months.indexOf(calendarMonth.innerHTML), parseInt(calendarYear.innerHTML));
    }else{
        calendarMonth.innerHTML = months[(months.indexOf(calendarMonth.innerHTML))-1];
        getEventsByMonth(calendarMonth.innerHTML, -1, parseInt(calendarYear.innerHTML));
        fillupCallendar(months.indexOf(calendarMonth.innerHTML), parseInt(calendarYear.innerHTML));
    }
}

function arrowRight(){
    if(calendarMonth.innerHTML == months[11]){
        calendarYear.innerHTML = parseInt(calendarYear.innerHTML)+1;
        calendarMonth.innerHTML = months[0];
        holder.innerHTML = "";
        getEventsByMonth(calendarMonth.innerHTML, -1, parseInt(calendarYear.innerHTML));
        fillupCallendar(months.indexOf(calendarMonth.innerHTML), parseInt(calendarYear.innerHTML));
    }else{
        calendarMonth.innerHTML = months[(months.indexOf(calendarMonth.innerHTML)+1)];
        getEventsByMonth(calendarMonth.innerHTML, -1, parseInt(calendarYear.innerHTML));
        fillupCallendar(months.indexOf(calendarMonth.innerHTML), parseInt(calendarYear.innerHTML));
    }
}

function getDaysInMonth(month, year){
    switch (month){
        case 0:
            return 31;
        case 1:
            if(((year%4==0)&&(year%100!=0))||(year%400==0)){
                return 29;
            } else{
                return 28;
            }
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
    }
}

function createLoader(){
    calendarHeader.style.display = "none";
    calendarDays.style.display = "none";
    var div = document.createElement('div');
    div.classList.add('loader');
    calendarHolder.append(div);
}

function removeLoader(){
    var loader = document.querySelector('.loader');
    calendarHolder.removeChild(loader);
    calendarHeader.style.display = "block";
    calendarDays.style.display = "table";
}

document.addEventListener('DOMContentLoaded',function(){

    holder = document.querySelector('.eventsHolder');
    arrowLeftHtml = document.querySelector('.arrow-left');
    currentMonth = new Date().getMonth();
    currentYear = new Date().getFullYear();
    calendarMonth = document.querySelector('.calendarMonth');
    calendarYear = document.querySelector('.calendarYear');
    calendarHolder = document.querySelector('.calendarHolder');
    calendarHeader = document.querySelector('.calendarHeader');
    calendarDays = document.querySelector('.calendarDays');
    calendarMonth.innerHTML = months[currentMonth];
    calendarYear.innerHTML = currentYear.toString();
    fillupCallendar(currentMonth, currentYear);
    getEventsByMonth(months[currentMonth], -1, currentYear);

});