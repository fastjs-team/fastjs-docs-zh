const introduction = {
  "text": "引言",
  "items": [
    {
      "text": "说明",
      "link": "/"
    },
    {
      "text": "版本列表",
      "link": "/guide/version-list"
    },
    {
      "text": "开始使用",
      "link": "/guide/getting-started"
    },
    {
      "text": "阅读帮助",
      "link": "/guide/reading-help"
    }
  ]
}

const contribute = {
  "text": "赞助",
  "items": [
    {
      "text": "成为赞助人",
      "link": "/contribute/sponsor"
    },
    {
      "text": "贡献文档",
      "link": "/contribute/docs"
    },
    {
      "text": "贡献代码",
      "link": "/contribute/code"
    },
  ]
}

const other = {
  "text": "其他",
  "items": [
    {
      "text": "赞助人",
      "link": "/other/sponsor"
    },
    {
      "text": "更新日志",
      "link": "/other/changelog"
    }
  ]
}

export default {
  "/v1.x/": [
    introduction,
    {
      "text": "基本组件",
      "items": [
        {
          "text": "选择器",
          "link": "/v1.x/selector"
        },
        {
          "text": "元素基础",
          "link": "/v1.x/element"
        },
        {
          "text": "元素",
          "link": "/v1.x/dom"
        },
        {
          "text": "元素列表",
          "link": "/v1.x/domlist"
        },
        {
          "text": "数组",
          "link": "/v1.x/array"
        },
        {
          "text": "数据绑定",
          "link": "/v1.x/bind"
        }
      ]
    },
    {
      "text": "扩展",
      "items": [
        {
          "text": "Ajax请求",
          "link": "/v1.x/ajax"
        },
        {
          "text": "日期",
          "link": "/v1.x/date"
        }
      ]
    },
    contribute,
    other
  ],
  "/": [
    introduction,
    {
      "text": "从这里开始",
      "items": [
        {
          "text": "v1.x",
          "link": "/v1.x/selector"
        }
      ]
    },
    contribute,
    other
  ]
}