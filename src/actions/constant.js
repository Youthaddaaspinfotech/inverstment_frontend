export const PORT = "7000";
export const BASE_URL = "https://investmentapi.youthadda.co/"
// export const BASE_URL = "http://localhost:5000"


export const imgPath = (name) => {
    return (
        `https://investmentapi.youthadda.co/${name}`
    )
}
export const PermissionList = [

    {
        "name": "Team Access",
        "type": "1",
        "action": [
            {
                "name": "View",
                "type": "TEAM_LIST"
            },
            {
                "name": "Add",
                "type": "TEAM_ADD"
            },
            {
                "name": "Edit",
                "type": "TEAM_EDIT"
            },
            {
                "name": "Delete",
                "type": "TEAM_Delete"
            }
        ]
    },
    {
        "name": "Company Access",
        "type": "2",
        "action": [
            {
                "name": "View",
                "type": "COMPANY_LIST"
            },
            {
                "name": "Add",
                "type": "COMPANY_ADD"
            },
            {
                "name": "Edit",
                "type": "COMPANYEDIT"
            },
            {
                "name": "Delete",
                "type": "COMPANY_Delete"
            }
        ]
    }
];


export const Modes = [
    {
        id: 1,
        name: "12 hours",
    },
    {
        id: 2,
        name: "24 hours",
    },
    {
        id: 3,
        name: "With Petrol",
    },
    {
        id: 4,
        name: "Without Petrol",
    }

]
