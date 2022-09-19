var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    "?this",
    "?Event_2"
  ],
  "defaultLang": "en",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasRole_Organization",
        "o": "?Role_1",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Organisation",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Role",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Role_1",
            "p": "https://data.cordis.europa.eu/sparnatural-demo-config/involvedIn_Project",
            "o": "?Event_2",
            "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Role",
            "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Event",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "?Event_2",
                "p": "https://data.cordis.europa.eu/sparnatural-demo-config/isEventOf",
                "o": "?Project_3",
                "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Event",
                "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Project",
                "values": []
              },
              "children": [
                {
                  "line": {
                    "s": "?Project_3",
                    "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasTotalCost",
                    "o": "?Amount_4",
                    "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Project",
                    "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Amount",
                    "values": [
                      {
                        "label": "< 2 million euros",
                        "regex": "< 2 million euros"
                      }
                    ]
                  },
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "line": {
        "s": "?this",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasSite",
        "o": "?Site_5",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Organisation",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Site",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Site_5",
            "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasLocation",
            "o": "?AdministrativeArea_6",
            "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Site",
            "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/AdministrativeArea",
            "values": [
              {
                "label": "Greece",
                "regex": "Greece"
              }
            ]
          },
          "children": []
        }
      ]
    }
  ]
} // end example.1 : Organizations from greece participating in Events of Projects of less than 2 million euros
,
  "example.2" : {
  "distinct": true,
  "variables": [
    "?Role",
    "?ProjectDivision",
    "?Project",
    "?Amount"
  ],
  "defaultLang": "en",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Role",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/roleOf",
        "o": "?Organisation_1",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Role",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Organisation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Organisation_1",
            "p": "https://data.cordis.europa.eu/sparnatural-demo-config/legalName_Organization",
            "o": "?Text_2",
            "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Organisation",
            "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Text",
            "values": [
              {
                "label": "Thales",
                "regex": "Thales"
              }
            ]
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "?Role",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/involvedIn_Project",
        "o": "?ProjectDivision",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Role",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/ProjectDivision",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?ProjectDivision",
            "p": "https://data.cordis.europa.eu/sparnatural-demo-config/isDivisionOf",
            "o": "?Project",
            "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/ProjectDivision",
            "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Project",
            "values": []
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "?Role",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/isRecipientOf",
        "o": "?GrantPayment_4",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Role",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/GrantPayment",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?GrantPayment_4",
            "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasPaymentAmount",
            "o": "?Amount",
            "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/GrantPayment",
            "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Amount",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
}
 // end example.2 : Which payment did Thales received, showing for which project division and which project
 ,
"example.3" : {
  "distinct": true,
  "variables": [
    "?this",
    "?Amount_2"
  ],
  "defaultLang": "en",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasEuroSciVocClassification",
        "o": "?EuroSciVoc_1",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Project",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/EuroSciVoc",
        "values": [
          {
            "label": "musicology",
            "uri": "http://data.europa.eu/8mn/euroscivoc/47eb9d78-a29d-4759-8c86-d7d4a8065997"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "https://data.cordis.europa.eu/sparnatural-demo-config/hasTotalCost",
        "o": "?Amount_2",
        "sType": "https://data.cordis.europa.eu/sparnatural-demo-config/Project",
        "oType": "https://data.cordis.europa.eu/sparnatural-demo-config/Amount",
        "values": []
      },
      "children": []
    }
  ]
}

};