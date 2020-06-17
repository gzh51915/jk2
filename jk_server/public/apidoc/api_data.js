define({ "api": [
  {
    "type": "get",
    "url": "/user",
    "title": "获取所有用户",
    "description": "<p>获取所有用户</p>",
    "name": "submit-login",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    data\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/user"
      }
    ],
    "version": "1.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/updata",
    "title": "更改或删除用户",
    "description": "<p>更改或删除用户,更改将返回更改后的用户信息</p>",
    "name": "更改或删除",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>要更改的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del",
            "description": "<p>是否删除用户，是则true</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"username\" : \"username\",\n        \"password\" : \"password\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/user/?username=gg&password=1915&del=true"
      }
    ],
    "version": "1.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "注册：添加一个用户",
    "description": "<p>注册：添加一个用户</p>",
    "name": "注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n       code,\n       msg\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/user/?username=dd&password=123456"
      }
    ],
    "version": "1.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "用户登录",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"username\" : \"username\",\n        \"password\" : \"password\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/user/login/?username=gg&password=123456"
      }
    ],
    "version": "1.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "获取分类列表或商品",
    "description": "<p>获取分类列表或商品</p>",
    "name": "submit-login",
    "group": "category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    data\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "num",
            "optional": false,
            "field": "platform",
            "description": "<p>常为1</p>"
          },
          {
            "group": "Parameter",
            "type": "num",
            "optional": false,
            "field": "pid",
            "description": "<p>取某个类别下的数据，若无pid则只获取列表</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/category&platform=1&pid=311"
      }
    ],
    "version": "1.0.0",
    "filename": "router/category.js",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "获取分类板块商品列表页",
    "description": "<p>num参数决定获取的数据出处，格式(xy)，如11/12/21/22/31,十位数代表左侧列表的行数，个位数代表该类下的第n个商品类</p>",
    "name": "submit-login",
    "group": "category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "num",
            "description": "<p>板块</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code : \"200\",\n    result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/search/?num=11"
      }
    ],
    "version": "1.0.0",
    "filename": "router/category.js",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "/home",
    "title": "获得首页数据",
    "description": "<p>获得首页数据</p>",
    "name": "submit-login",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"data\" : {\n        data\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/home"
      }
    ],
    "version": "1.0.0",
    "filename": "router/home.js",
    "groupTitle": "home"
  },
  {
    "type": "get",
    "url": "/news",
    "title": "获取头条资讯",
    "description": "<p>sort参数决定获取的数据板块，从0-4</p>",
    "name": "submit-login",
    "group": "news",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>板块</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code : \"200\",\n    result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/news/?sort=0"
      }
    ],
    "version": "1.0.0",
    "filename": "router/news.js",
    "groupTitle": "news"
  },
  {
    "type": "get",
    "url": "/news",
    "title": "获取资讯详情",
    "description": "<p>dd参数决定获取的数据板块，如01/02/03/31,十位数为第n板块，个位数为第n条</p>",
    "name": "submit-login",
    "group": "news",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dd",
            "description": "<p>板块+第几条</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    code : \"200\",\n    result\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.3.135.46:3000/api/news/?dd=01"
      }
    ],
    "version": "1.0.0",
    "filename": "router/news.js",
    "groupTitle": "news"
  }
] });
