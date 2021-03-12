const getAppealDocumentsByAppealCode = (appealCode: string) => {
    fetch(`https://goadmin.ifrc.org/api/v2/appeal/?limit=1&code=${appealCode}`)
        .then((response) => response.json())
        .then((response) => {
            const appealId = response.results[0].aid;
            fetch(
                `https://goadmin.ifrc.org/api/v2/appeal_document/?limit=10&appeal=${appealId}`
            )
                .then((response) => response.json())
                .then((response) => {
                    console.log(JSON.stringify(response.results));
                });
        });
};

getAppealDocumentsByAppealCode('MDRCM002');

/*
[
    {
        "created_at": "2021-02-20T00:00:00Z",
        "document": null,
        "document_url": "https://www.ifrc.org/docs/appeals/Active/MDRGN012.pdf",
        "appeal": 3388,
        "id": 2699,
        "name": "Donor Response"
    },
    {
        "created_at": "2021-02-18T00:00:00Z",
        "document": null,
        "document_url": "https://www.ifrc.org/docs/Appeals/21/IB%20Guinea_Ebola%20Virus%20Disease.pdf",
        "appeal": 3388,
        "id": 2697,
        "name": "IB Guinea_Ebola Virus Disease"
    },
    {
        "created_at": "2021-02-17T00:00:00Z",
        "document": null,
        "document_url": "https://adore.ifrc.org/Download.aspx?FileId=386727",
        "appeal": 3388,
        "id": 2696,
        "name": "DREF Operation"
    }
]
*/
