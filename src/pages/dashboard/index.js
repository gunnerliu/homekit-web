export const schema = {
  type: "page",
  body: {
    type: "crud",
    mode: "cards",
    api: "GET:/api/hk/iots/allIots?pageIndex=${page}&pageSize=${perPage}",
    card: {
      header: {
        className: "bg-white",
        title: "$iotName",
        subTitle: "$iotCode",
        description: "<%if(this.deviceType === 'LIGHT') { %> 灯 <% } else { %> $deviceType <% } %>",
        avatarText: "$deviceType",
      },
      body: '<span class="label label-default">$switchValue</span><span class="label label-warning">$ipAddr</span>',
      toolbar: [
        {
          type: "tpl",
          tpl: "标签",
          className: "label label-warning",
        },
      ],
      actions: [
        {
          type: "button",
          label: "开/关",
          actionType: "ajax",
          className: "mr-4",
          api: "",
          hiddenOn: "this.deviceType != 'LIGHT'",
        },
      ],
    },
  },
};
