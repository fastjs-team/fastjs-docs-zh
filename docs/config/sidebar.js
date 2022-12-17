const introduction = {
  "text": "Introduction",
  "items": [
    {
      "text": "Description",
      "link": "/"
    },
    {
      "text": "Version List",
      "link": "/guide/version-list"
    },
    {
      "text": "Getting Started",
      "link": "/guide/getting-started"
    },
    {
      "text": "Reading Help",
      "link": "/guide/reading-help"
    }
  ]
}

const contribute = {
  "text": "Contribute",
  "items": [
    {
      "text": "Become a Sponsor",
      "link": "/contribute/sponsor"
    },
    {
      "text": "Docs Contribution",
      "link": "/contribute/docs"
    },
    {
      "text": "Code Contribution",
      "link": "/contribute/code"
    },
  ]
}

const other = {
  "text": "Other",
  "items": [
    {
      "text": "Sponsor",
      "link": "/other/sponsor"
    },
    {
      "text": "Change Log",
      "link": "/other/changelog"
    }
  ]
}

export default {
  "/v1.x/": [
    introduction,
    {
      "text": "Essentials",
      "items": [
        {
          "text": "Selecter",
          "link": "/v1.x/selecter"
        },
        {
          "text": "Element",
          "link": "/v1.x/element"
        },
        {
          "text": "Dom",
          "link": "/v1.x/dom"
        },
        {
          "text": "DomList",
          "link": "/v1.x/domlist"
        },
        {
          "text": "Array",
          "link": "/v1.x/array"
        },
        {
          "text": "Bind",
          "link": "/v1.x/bind"
        }
      ]
    },
    {
      "text": "Modules",
      "items": [
        {
          "text": "Ajax",
          "link": "/v1.x/ajax"
        }
      ]
    },
    contribute,
    other
  ],
  "/": [
    introduction,
    {
      "text": "Start Here",
      "items": [
        {
          "text": "v1.x",
          "link": "/v1.x/selecter"
        }
      ]
    },
    contribute,
    other
  ]
}