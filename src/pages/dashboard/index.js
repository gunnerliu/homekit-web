export const schema = {
  type: "page",
  body: {
    type: "crud",
    mode: "cards",
    api: "GET:/api/hk/iots/allIots?pageIndex=${page}&pageSize=${perPage}",
    card: {
      header: {
        className: "bg-white",
        title: "$iotCode",
        subTitle: "$iotName",
        description: "$ipAddr",
        avatarText: "$deviceType",
      },
      body: "这里是内容",
    },
    columns: [
      {
        name: "iotCode",
        label: "设备编码",
        fixed: "left",
      },
      {
        name: "iotName",
        label: "设备名称",
        fixed: "left",
      },
      {
        label: "设备类型",
        type: "mapping",
        name: "deviceType",
        map: {
          LIGHT: "灯",
          UNKNOWN: "未知设备",
          "*": "其他：${deviceType}",
        },
      },
      {
        label: "开关",
        type: "mapping",
        name: "switchValue",
        map: {
          ON: "<span class='label label-success'>开</span>",
          OFF: "<span class='label label-warning'>关</span>",
          "*": "其他：${switchValue}",
        },
      },
      {
        name: "ipAddr",
        label: "IP地址",
      },
      {
        name: "onlineState",
        label: "在线状态",
        type: "mapping",
        map: {
          OFFLINE: "<span class='label label-danger'>离线</span>",
          ONLINE: "<span class='label label-success'>在线</span>",
          "*": "其他：${onlineState}",
        },
      },
      {
        name: "lastBeatTime",
        type: "date",
        format: "YYYY-MM-DD HH:mm:ss",
        label: "上一次心跳时间",
      },
      {
        name: "cts",
        type: "date",
        format: "YYYY-MM-DD HH:mm:ss",
        label: "注册时间",
      },
    ],
  },
};
