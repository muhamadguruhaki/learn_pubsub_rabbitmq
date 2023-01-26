/**
 * @copyright Wetalk
 * @author Muhammad Zikri <zikri.wetalk@gmail.com>
 * Created: Tue Jan 17 2023
 * Time: 16:03 WITA (GMT+8)
 */

const express = require('express');
const amqp = require('amqplib/callback_api');

const app = express();
let connection;
const data = {
    "version": "20220912105648",
    "code": 0,
    "msg": "success",
    "data": {
        "partnerOutletID": "W0208",
        "outletID": "0208",
        "outlet": {
            "code": "0208",
            "name": "MT HARYONO JAKARTA",
            "latitude": -6.243021,
            "longitude": 106.847063,
            "active": true,
            "outletDeliverySchedule": {
                "monday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                },
                "tuesday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                },
                "wednesday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                },
                "thursday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                },
                "friday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                },
                "saturday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                },
                "sunday": {
                    "start_time": "10:00",
                    "end_time": "22:00"
                }
            }
        },
        "catalogs": [
            {
                "id": "G47",
                "name": "Kids Meal",
                "dishes": [
                    {
                        "id": "G47_10818_42273",
                        "name": "Chaki Meal A",
                        "price": 46500,
                        "picture": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kfcjv-staging-3f3f4.appspot.com\/o\/MenuImages%2F10818.jpg?alt=media",
                        "description": "1 Pcs Chicken  + 1 Nasi + 1 Ovaltine 125 ML + Premium Chaki + Coloring Kit",
                        "available": true,
                        "sales_time": {
                            "monday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "tuesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "wednesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "thursday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "friday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "saturday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "sunday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ]
                        },
                        "option_groups": [
                            {
                                "id": "X1247:ME2_1",
                                "name": "Select 1 Pcs Crispy Chicken",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1247_X1247_ME2_0",
                                        "name": "1 Pcs Crispy Chicken",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1246_X1247_ME2_0",
                                        "name": "1 Pcs Original Chicken",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1400_X1247_ME2_1818",
                                        "name": "1 Pc Chicken Rosemary Grilled",
                                        "price": 2000,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X1364:M8I_1",
                                "name": "Replace Ovaltine 125 ml with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1364_X1364_M8I_0",
                                        "name": "Ovaltine 125 ml",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X71_X1364_M8I_0",
                                        "name": "Mineral Water",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X246:M52_1",
                                "name": "Replace Rice Kids with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X129_X246_M52_0",
                                        "name": "Pompom",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "G47_10823_42273",
                        "name": "Chaki Meal B",
                        "price": 46500,
                        "picture": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kfcjv-staging-3f3f4.appspot.com\/o\/MenuImages%2F10823.jpg?alt=media",
                        "description": "1 Original Burger + 1 French Fries Regular + 1 Ovaltine 125 ML + Premium Chaki + Coloring Kit",
                        "available": true,
                        "sales_time": {
                            "monday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "tuesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "wednesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "thursday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "friday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "saturday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "sunday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ]
                        },
                        "option_groups": [
                            {
                                "id": "X1364:M8I_1",
                                "name": "Replace Ovaltine 125 ml with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1364_X1364_M8I_0",
                                        "name": "Ovaltine 125 ml",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X71_X1364_M8I_0",
                                        "name": "Mineral Water",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "G56",
                "name": "Coffee",
                "dishes": [
                    {
                        "id": "G56_10838_42727",
                        "name": "1\/2 Dozen Donut",
                        "price": 47000,
                        "picture": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kfcjv-staging-3f3f4.appspot.com\/o\/MenuImages%2F10838.jpg?alt=media",
                        "description": "6pc donut",
                        "available": true,
                        "sales_time": {
                            "monday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "tuesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "wednesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "thursday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "friday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "saturday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "sunday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ]
                        },
                        "option_groups": [
                            {
                                "id": "X104:M88_1",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X104:M88_2",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X104:M88_3",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X104:M88_4",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X104:M88_5",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X104:M88_6",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "G56_4874_8182",
                        "name": "1Pc Donut",
                        "price": 9000,
                        "picture": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kfcjv-staging-3f3f4.appspot.com\/o\/MenuImages%2F4874.jpg?alt=media",
                        "description": "1Pc Donut",
                        "available": true,
                        "sales_time": {
                            "monday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "tuesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "wednesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "thursday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "friday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "saturday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "sunday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ]
                        },
                        "option_groups": [
                            {
                                "id": "X104:M88_1",
                                "name": "Select Donut",
                                "select_min": 1,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "1421_X104_M88_0",
                                        "name": "Cookie Crumb Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1422_X104_M88_0",
                                        "name": "Choconut Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1424_X104_M88_0",
                                        "name": "Cheese Donut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "1426_X104_M88_0",
                                        "name": "Double Choco Donut",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "G56_8269_10909",
                        "name": "Pukis 2 Pcs",
                        "price": 12000,
                        "picture": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kfcjv-staging-3f3f4.appspot.com\/o\/MenuImages%2F8269.jpg?alt=media",
                        "description": "Pukis 2Pc",
                        "available": true,
                        "sales_time": {
                            "monday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "tuesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "wednesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "thursday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "friday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "saturday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "sunday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ]
                        },
                        "option_groups": [
                            {
                                "id": "X1083:M9S_1",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X1083:M9S_2",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "G56_8271_24545",
                        "name": "Pukis 5 Pcs",
                        "price": 27000,
                        "picture": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kfcjv-staging-3f3f4.appspot.com\/o\/MenuImages%2F8271.jpg?alt=media",
                        "description": "5 Pcs Pukis ",
                        "available": true,
                        "sales_time": {
                            "monday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "tuesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "wednesday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "thursday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "friday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "saturday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ],
                            "sunday": [
                                {
                                    "start_time": "00:00",
                                    "end_time": "23:59"
                                }
                            ]
                        },
                        "option_groups": [
                            {
                                "id": "X1083:M9S_1",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X1083:M9S_2",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X1083:M9S_3",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X1083:M9S_4",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            },
                            {
                                "id": "X1083:M9S_5",
                                "name": "Replace Pukis Original with",
                                "select_min": 0,
                                "select_max": 1,
                                "options": [
                                    {
                                        "id": "X1083_X1083_M9S_0",
                                        "name": "Pukis Original",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1084_X1083_M9S_0",
                                        "name": "Pukis Double Choco",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1085_X1083_M9S_0",
                                        "name": "Pukis Cookie Crumb",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1086_X1083_M9S_0",
                                        "name": "Pukis Choconut",
                                        "price": 0,
                                        "available": true
                                    },
                                    {
                                        "id": "X1087_X1083_M9S_0",
                                        "name": "Pukis Cheese",
                                        "price": 0,
                                        "available": true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "version": "20220912105643"
    }
}

amqp.connect('amqp://localhost', function(connError, connection) {
    console.log(connError);
    if (connError) {
        throw connError;
    }
    // step 2 
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError
        }

        // step 3 

        const QUEUE = "Test"
        // const kode_region = 9000;
        channel.assertQueue(QUEUE);
        // step 4
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)))
        console.log('message publiser')
    })
});